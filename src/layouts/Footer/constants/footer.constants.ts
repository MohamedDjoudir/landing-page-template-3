import { Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react";
import type { FooterLinkGroupConfig, SocialLinkConfig } from "../types";

export const FOOTER_LINK_GROUPS: FooterLinkGroupConfig[] = [
  {
    id: "product",
    linkKeys: ["features", "pricing", "integrations", "roadmap", "changelog"],
  },
  {
    id: "company",
    linkKeys: ["about", "blog", "careers", "customers", "contact"],
  },
  {
    id: "resources",
    linkKeys: ["documentation", "helpCenter", "apiReference", "community", "status"],
  },
];

export const LEGAL_LINK_KEYS = ["privacy", "terms", "cookies"] as const;

export const SOCIAL_LINKS: SocialLinkConfig[] = [
  { id: "twitter", href: "#", icon: Twitter },
  { id: "facebook", href: "#", icon: Facebook },
  { id: "instagram", href: "#", icon: Instagram },
  { id: "linkedin", href: "#", icon: Linkedin },
  { id: "github", href: "#", icon: Github },
];
