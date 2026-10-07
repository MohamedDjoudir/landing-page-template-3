# NOVA landing page: Next.js 15, served from its standalone build.
#
# Build and run from this folder:
#   docker build -t company-site .
#   docker run -p 3030:3030 company-site
#
# NEXT_PUBLIC_SITE_URL is compiled into the build, so the live address is a
# build argument, and changing it is a rebuild:
#   docker build -t company-site \
#     --build-arg NEXT_PUBLIC_SITE_URL=https://www.your-domain.com .

FROM node:24-alpine AS base
WORKDIR /app
ENV YARN_ENABLE_IMMUTABLE_INSTALLS=false \
    COREPACK_ENABLE_DOWNLOAD_PROMPT=0 \
    NEXT_TELEMETRY_DISABLED=1
RUN corepack enable

FROM base AS deps
# sharp, which next/image uses, resolves to the platform it is installed on.
RUN apk add --no-cache libc6-compat
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install

FROM base AS build
# Nothing secret may be passed this way: it ends up in the shipped JavaScript.
# The address the site is served from: canonical links, language alternates
# and the social sharing image are built from it.
ARG NEXT_PUBLIC_SITE_URL=http://localhost:3030
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    BUILD_STANDALONE=true \
    NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM base AS runtime
ENV NODE_ENV=production
RUN apk add --no-cache libc6-compat
# The standalone bundle carries its own server and only the files it traced.
# It serves public/ and .next/static only when both sit beside it.
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public
# next/image writes its optimised copies into .next/cache, which needs a tree
# the unprivileged user owns.
USER node
# HOSTNAME too: a server bound to localhost inside a container is unreachable
# from outside it.
ENV PORT=3030 \
    HOSTNAME=0.0.0.0
EXPOSE 3030
CMD ["node", "server.js"]
