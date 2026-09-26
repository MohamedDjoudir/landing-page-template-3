import type { Company, Stat } from "../types";

export const COMPANIES: Company[] = [
  { name: "slackware", logo: "https://cdn.simpleicons.org/slackware" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github" },
  { name: "Notion", logo: "https://cdn.simpleicons.org/notion" },
  { name: "Google", logo: "https://cdn.simpleicons.org/google" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
  { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe" },
];

export const STATS: Stat[] = [
  { id: "activeUsers", value: "10k+" },
  { id: "enterpriseClients", value: "500+" },
  { id: "uptime", value: "99.9%" },
  { id: "support", value: "24/7" },
];

export const STAGGER_ANIMATION = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export const FADE_ITEM_ANIMATION = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};
