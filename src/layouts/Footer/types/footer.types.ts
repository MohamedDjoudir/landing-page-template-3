import type { LucideIcon } from "lucide-react";

export interface FooterLinkGroupConfig {
  id: string;
  linkKeys: readonly string[];
}

export interface SocialLinkConfig {
  id: string;
  href: string;
  icon: LucideIcon;
}
