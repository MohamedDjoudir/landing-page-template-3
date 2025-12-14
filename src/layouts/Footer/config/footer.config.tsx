import { Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react";
import { ReactNode } from "react";

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: ReactNode;
}

export const footerConfig = {
  description:
    "Empowering businesses with AI-powered solutions that drive growth and efficiency.",

  linkGroups: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Roadmap", href: "#" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Customers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "Community", href: "#" },
        { label: "Status", href: "#" },
      ],
    },
  ] as FooterLinkGroup[],

  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export const socialLinks: SocialLink[] = [
  { name: "Twitter", href: "#", icon: <Twitter className="h-5 w-5" /> },
  { name: "Facebook", href: "#", icon: <Facebook className="h-5 w-5" /> },
  { name: "Instagram", href: "#", icon: <Instagram className="h-5 w-5" /> },
  { name: "LinkedIn", href: "#", icon: <Linkedin className="h-5 w-5" /> },
  { name: "GitHub", href: "#", icon: <Github className="h-5 w-5" /> },
];
