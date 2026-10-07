// The address the site is served from, without a trailing slash. It resolves
// the canonical link, the language alternates and the social sharing image.
// NEXT_PUBLIC_* values are inlined at build time, so a change needs a rebuild.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3030"
).replace(/\/+$/, "");
