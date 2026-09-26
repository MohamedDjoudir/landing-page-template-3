export const SCROLLED_THRESHOLD_PX = 20;
export const DROPDOWN_CLOSE_DELAY_MS = 150;

export const NAV_DROPDOWNS = [
  {
    id: "products",
    itemKeys: ["analytics", "automation", "collaboration", "security"],
  },
  {
    id: "solutions",
    itemKeys: ["startups", "enterprise", "teams", "developers"],
  },
] as const;

export const NAV_LINKS = [
  { key: "pricing", href: "#pricing" },
  { key: "testimonials", href: "#testimonials" },
] as const;
