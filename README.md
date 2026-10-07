# NOVA: Business Case Studies Template (Next.js + Tailwind CSS)

**NOVA** is a professional and elegant template built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, designed to showcase detailed business case studies, client success stories, and project highlights. Perfect for consultancies, agencies, and SaaS businesses.

**Live Demo & More Info:** [aniq-ui.com NOVA Template](https://www.aniq-ui.com/en/templates/business-case-studies-nextjs-template)

---

## Getting Started

### Requirements

- **With Docker:** Docker Desktop (or Docker Engine) and nothing else.
- **Without Docker:** Node.js 22 or newer, and Yarn 4. The repository pins Yarn 4 through `packageManager`; if the `yarn` command is missing, run `corepack enable` once.

### Path A: Docker

From this folder:

```sh
docker build -t company-site .
docker run -p 3030:3030 company-site
```

Open http://localhost:3030. English is at `/en`, Arabic at `/ar`.

### Path B: without Docker

```sh
yarn install
yarn dev
```

Open http://localhost:3030. The development server reloads as you edit.

For the production build:

```sh
yarn build
yarn start
```

It is served on http://localhost:3030 too.

### A port is already in use?

Another program is using port 3030. Stop it, or use another port:

- **Docker:** change the left number, for example `docker run -p 3041:3030 company-site`, then open http://localhost:3041.
- **Without Docker:** `yarn dev -p 3041` (or `yarn start -p 3041`), then open http://localhost:3041.

### Environment variables

The site runs without a `.env` file. It reads one optional variable, listed in `.env.example`:

| Variable | Default | What it does |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3030` | The address the site is served from. The canonical link, the language alternates and the social sharing image are built from it. |

Set it to your real domain before you deploy. It is read at build time, so build again after changing it:

- **Without Docker:** `cp .env.example .env`, edit the value, then `yarn build`.
- **Docker:** `docker build -t company-site --build-arg NEXT_PUBLIC_SITE_URL=https://www.your-domain.com .`

### Scripts

| Command | What it does |
| --- | --- |
| `yarn dev` | Development server on port 3030 |
| `yarn build` | Production build |
| `yarn start` | Serves the production build on port 3030 |
| `yarn lint` | ESLint (Next.js rules) |
| `yarn typecheck` | TypeScript check (`tsc --noEmit`) |

---

## Customizing

| What | Where |
| --- | --- |
| Text, in every language | `messages/en.json` and `messages/ar.json` (same keys in both) |
| Brand name | `brand.name` in both message files |
| Page title and description | `metadata` in both message files |
| Images | `public/images/` (hero, steps, features), referenced from each section's `constants/` folder |
| Remote images and logos | `constants/` of the Testimonials, Features, Integrations and SocialProof sections; any new remote host must be added to `images.remotePatterns` in `next.config.mjs` |
| Logo mark | `src/components/Logo.tsx` |
| Favicon and app icons | `public/favicon.svg`, `public/favicon.ico`, `public/apple-touch-icon.png`, `public/site.webmanifest` |
| Social sharing image | `public/image.png` (1200 x 630) |
| Colours | The red to amber accent gradient is written as Tailwind classes (`from-red-500`, `to-amber-500`) in the components, starting with `src/components/GradientButton.tsx`; theme tokens are in `src/app/globals.css` and `tailwind.config.ts` |
| Fonts | `src/app/[locale]/layout.tsx`: Inter for English, Noto Sans Arabic for Arabic, both through `next/font/google` |
| Sections on the page and their order | `src/app/[locale]/page.tsx` |

---

## Languages

The site is localized with **next-intl** and ships two locales:

| Locale | Language | Direction |
| ------ | -------- | --------- |
| `en`   | English (default) | LTR |
| `ar`   | Arabic   | RTL |

- Routes are prefixed with the locale: `/en`, `/ar`.
- `src/middleware.ts` redirects `/` to the default locale.
- `<html lang dir>` is set from the locale, and layout uses logical Tailwind classes (`ms-*`, `pe-*`, `start-*`, `text-start`...) so RTL mirrors automatically.
- All copy lives in `messages/en.json` and `messages/ar.json`. Both files must keep the same keys.
- Components read text with `useTranslations`; constants only hold keys, ids, routes, icons, image paths and numbers.
- A locale switcher sits in the header (`src/components/LocaleSwitcher.tsx`).

To add a locale, add its code to `src/i18n/routing.ts`, create `messages/<locale>.json`, and add the locale name under `localeSwitcher.names` in every messages file. If it is right-to-left, list it in `src/i18n/direction.ts`.

---

## Project Structure

```
messages/                   # en.json, ar.json
src/
├── app/
│   ├── globals.css
│   └── [locale]/           # layout.tsx (html, providers, metadata) and page.tsx (home composition)
├── i18n/                   # routing, request config, locale-aware navigation, text direction
├── middleware.ts           # locale negotiation
├── components/             # Shared components (Logo, Reveal, SectionHeader, GlowFrame, LocaleSwitcher...)
│   └── ui/                 # UI primitives (Button, Accordion, Tabs)
├── features/home/          # One folder per page section
│   └── <Section>/
│       ├── index.tsx       # Composition only
│       ├── components/     # One component per file + index.ts barrel
│       ├── hooks/          # One hook per file + index.ts barrel
│       ├── constants/      # Keys, ids, images, numbers
│       └── types/
├── layouts/                # Header and Footer, same subfolder convention
├── hooks/                  # Shared hooks (useTextDirection)
├── lib/                    # cn() helper, site URL
└── providers/              # ThemeProvider
```

Barrel `index.ts` files only re-export.

---

## Adding a Section or Page

1. Create the section folder under `src/features/<page>/<Section>/` using the layout above.
2. Add its copy to **both** `messages/en.json` and `messages/ar.json`, and read it with `useTranslations("<namespace>")`.
3. Compose it in `src/app/[locale]/<route>/page.tsx`. Call `setRequestLocale(locale)` at the top of a page so it stays statically rendered.
4. Use logical spacing classes and add `rtl:rotate-180` to arrows and chevrons that point in a reading direction.

---

## Styling

- **Tailwind CSS** with CSS variables for theme colors in `globals.css`.
- The page is designed dark. `next-themes` sets the `dark` class on `<html>`.
- Entrance animations go through the shared `Reveal` component.

---

## Tech Stack

| Technology     | Purpose                         |
| -------------- | ------------------------------- |
| Next.js 15     | React framework with App Router |
| next-intl      | Localization (en, ar)           |
| TypeScript     | Type safety                     |
| Tailwind CSS   | Utility-first styling           |
| Framer Motion  | Animations                      |
| Radix UI       | Accordion, Tabs                 |
| Lucide React   | Icons                           |
| next-themes    | Theme management                |
| Embla Carousel | Mobile carousels                |

All dependencies are pinned to exact versions and `yarn.lock` is committed.

---

## Support

For questions or support, contact the [Aniq UI team](https://www.aniq-ui.com/#contact).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Created by [Aniq UI](https://www.aniq-ui.com), premium Next.js templates for modern web apps.

