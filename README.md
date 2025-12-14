# NOVA – Business Case Studies Template (Next.js + Tailwind CSS)

**NOVA** is a professional and elegant template built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, designed to showcase detailed business case studies, client success stories, and project highlights. Perfect for consultancies, agencies, and SaaS businesses.

🔗 **Live Demo & More Info:** [aniq-ui.com NOVA Template](https://www.aniq-ui.com/en/templates/business-case-studies-nextjs-template)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```sh
   git clone <repository-url>
   cd landing-page-template-3
   ```

2. **Install dependencies**

   ```sh
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```sh
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**

   ```sh
   npm run build
   npm start
   ```

---

## 🧠 Project Structure

This project follows a **feature-based architecture** with modular, reusable components:

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
│
├── components/             # Shared/Reusable components
│   └── ui/                 # UI primitives (Button, Accordion, Tabs, etc.)
│
├── config/                 # App configuration
│   └── site.config.ts      # Site-wide settings (nav, footer, social links)
│
├── features/               # Page-specific features (organized by page)
│   ├── index.ts            # Feature exports
│   └── home/               # Home page features
│       ├── Hero/
│       │   ├── index.tsx
│       │   ├── components/
│       │   └── config/
│       ├── SocialProof/
│       ├── Features/
│       ├── HowItWorks/
│       ├── Testimonials/
│       ├── Pricing/
│       ├── Integrations/
│       ├── BlogPreview/
│       ├── Faq/
│       └── Cta/
│
├── hooks/                  # Global custom hooks
│   └── use-mobile.tsx      # Mobile detection hook
│
├── layouts/                # Layout components
│   ├── Header/
│   │   ├── index.tsx
│   │   └── components/     # Logo, DesktopNav, MobileNav, NavDropdown
│   └── Footer/
│       ├── index.tsx
│       ├── components/     # FooterLogo, FooterNav, SocialLinks
│       └── config/
│
├── lib/                    # Utility functions
│   └── utils.ts            # cn() helper for Tailwind classes
│
└── providers/              # React context providers
    └── index.tsx           # ThemeProvider setup
```

---

## 📄 Adding a New Page

Follow these steps to add a new page (e.g., `/about`):

### Step 1: Create the Page Route

Create a new file in `src/app/`:

```tsx
// src/app/about/page.tsx
import { AboutHero, AboutTeam, AboutValues } from "@/features/about";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutValues />
      <AboutTeam />
    </main>
  );
}
```

### Step 2: Create the Features Folder

Create the feature folder structure:

```
src/features/about/
├── index.ts              # Export all features
├── AboutHero/
│   ├── index.tsx         # Main component
│   ├── components/       # Sub-components
│   └── config/           # Feature-specific configuration
├── AboutTeam/
│   ├── index.tsx
│   └── components/
└── AboutValues/
    └── index.tsx
```

### Step 3: Create a Feature Component

Example feature component:

```tsx
// src/features/about/AboutHero/index.tsx
"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-white/70">We are Nova</p>
      </motion.div>
    </section>
  );
}
```

### Step 4: Export from Feature Index

```tsx
// src/features/about/index.ts
export { default as AboutHero } from "./AboutHero";
export { default as AboutTeam } from "./AboutTeam";
export { default as AboutValues } from "./AboutValues";
```

### Step 5: Add to Main Features Export

```tsx
// src/features/index.ts
// Home features
export {
  Hero,
  SocialProof,
  Features,
  HowItWorks,
  Testimonials,
  Pricing,
  Integrations,
  BlogPreview,
  Faq,
  Cta,
} from "./home";

// About features
export { AboutHero, AboutTeam, AboutValues } from "./about";
```

### Step 6: Update Navigation (Optional)

Add the new page to `src/config/site.config.ts`:

```tsx
export const siteConfig = {
  navLinks: [
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "About", href: "/about" }, // Add new link
  ],
};
```

---

## 🧩 Component Architecture

### UI Components (`src/components/ui/`)

Reusable, stateless UI primitives:

- `Button` - Styled button with variants
- `Accordion` - Expandable content sections
- `Tabs` - Tabbed content navigation

### Layout Components (`src/layouts/`)

```
src/layouts/Header/
├── index.tsx           # Main Header component
└── components/
    ├── Logo.tsx
    ├── DesktopNav.tsx
    ├── MobileNav.tsx
    └── NavDropdown.tsx
```

### Feature Components

Each feature follows this pattern:

```
src/features/home/Hero/
├── index.tsx           # Main export (composition only)
├── components/         # Sub-components (HeroBadge, HeroTitle, etc.)
└── config/             # Feature-specific configuration
    └── hero.config.ts
```

---

## 🎨 Styling

- **Tailwind CSS** - Utility-first CSS framework
- **CSS Variables** - Theme colors defined in `globals.css`
- **Dark Mode** - Supported via `next-themes`
- **Custom Utilities** - `cn()` helper for conditional classes

```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", isActive && "active-class")} />;
```

---

## 🔧 Configuration

### Site Config (`src/config/site.config.ts`)

Centralized configuration for:

- Navigation links
- Product/Solutions dropdown items
- Footer links
- Social media links
- Site metadata

### TypeScript Paths

Path aliases configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Usage:

```tsx
import { Button } from "@/components/ui/button";
import { Hero } from "@/features/home";
import { cn } from "@/lib/utils";
import { Header, Footer } from "@/layouts";
```

---

## 🌟 Features

- ✨ **Next.js 15** with App Router
- 📝 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- 🎭 **Framer Motion** for animations
- 🌙 **Dark Mode** support
- 📱 **Fully Responsive** design
- 🧩 **Modular Architecture** for scalability
- 🔄 **Feature-based Structure** for maintainability
- ⚙️ **Config-driven Content** for easy customization

---

## 📦 Tech Stack

| Technology     | Purpose                         |
| -------------- | ------------------------------- |
| Next.js 15     | React framework with App Router |
| TypeScript     | Type safety                     |
| Tailwind CSS   | Utility-first styling           |
| Framer Motion  | Animations                      |
| Lucide React   | Icons                           |
| next-themes    | Theme management                |
| Embla Carousel | Mobile carousels                |

---

## 💬 Support

For questions or support, contact the [Aniq UI team](https://www.aniq-ui.com/#contact).

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Created by [Aniq UI](https://www.aniq-ui.com) — Premium Next.js Templates for modern web apps.
