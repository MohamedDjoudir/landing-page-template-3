import { useTranslations } from "next-intl";
import { NAV_DROPDOWNS, NAV_LINKS } from "../constants";
import type { NavDropdownGroup, NavLinkItem } from "../types";

export function useNavItems() {
  const t = useTranslations("header");

  const dropdowns: NavDropdownGroup[] = NAV_DROPDOWNS.map((group) => ({
    id: group.id,
    label: t(`${group.id}.label`),
    items: group.itemKeys.map((key) => ({
      label: t(`${group.id}.items.${key}`),
      href: "#",
    })),
  }));

  const links: NavLinkItem[] = NAV_LINKS.map((link) => ({
    label: t(`links.${link.key}`),
    href: link.href,
  }));

  return { dropdowns, links };
}
