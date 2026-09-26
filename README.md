# NOVA: Business Case Studies Template (Next.js + Tailwind CSS)

**NOVA** is a professional and elegant template built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, designed to showcase detailed business case studies, client success stories, and project highlights. Perfect for consultancies, agencies, and SaaS businesses.

**Live Demo & More Info:** [aniq-ui.com NOVA Template](https://www.aniq-ui.com/en/templates/business-case-studies-nextjs-template)

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- Yarn (the repository pins Yarn 4 through `packageManager`; run `corepack enable`)

### Installation

```sh
yarn install
yarn dev        # http://localhost:3030
yarn build      # production build
yarn start      # serve the production build on http://localhost:3030
yarn lint
```

The port is set in the `dev` and `start` scripts in `package.json`.

There are no environment variables to configure: the template is a static landing page with no back-end.

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
- Components read text with `useTranslations`; constants only hold keys, ids, routes, icons and numbers.
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
│   └── ui/                 # UI primitives (Button, Accordion, Tabs, Avatar)
├── features/home/          # One folder per page section
│   └── <Section>/
│       ├── index.tsx       # Composition only
│       ├── components/     # One component per file + index.ts barrel
│       ├── hooks/          # One hook per file + index.ts barrel
│       ├── constants/      # Keys, ids, images, numbers
│       └── types/
├── layouts/                # Header and Footer, same subfolder convention
├── hooks/                  # Shared hooks (useTextDirection)
├── lib/utils.ts            # cn() helper
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
- **Dark mode** through `next-themes`.
- Cards separate from the page by fill, not by borders.
- Entrance animations only fade (through the shared `Reveal` component); nothing slides up or zooms.

---

## Tech Stack

| Technology     | Purpose                         |
| -------------- | ------------------------------- |
| Next.js 15     | React framework with App Router |
| next-intl      | Localization (en, ar)           |
| TypeScript     | Type safety                     |
| Tailwind CSS   | Utility-first styling           |
| Framer Motion  | Animations                      |
| Radix UI       | Accordion, Tabs, Avatar         |
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
