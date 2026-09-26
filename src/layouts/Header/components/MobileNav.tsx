"use client";

import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { cn } from "@/lib/utils";
import { HEADER_HEIGHT_PX } from "../constants";
import { useActiveDropdown, useNavItems } from "../hooks";
import { AuthButtons } from "./AuthButtons";
import { NavDropdown } from "./NavDropdown";

interface MobileNavProps {
  isOpen: boolean;
}

export function MobileNav({ isOpen }: MobileNavProps) {
  const { dropdowns, links } = useNavItems();
  const { activeId, open, close, toggle } = useActiveDropdown();

  return (
    <div
      className={cn(
        "md:hidden fixed inset-x-0 bg-black/95 backdrop-blur-lg border-t border-white/10 transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0 invisible pointer-events-none"
      )}
      style={{ top: HEADER_HEIGHT_PX }}
    >
      <div
        className="container mx-auto px-3 py-4 flex flex-col gap-2 overflow-y-auto"
        style={{ maxHeight: `calc(100vh - ${HEADER_HEIGHT_PX}px)` }}
      >
        {dropdowns.map((group) => (
          <NavDropdown
            key={group.id}
            group={group}
            isMobile
            isOpen={activeId === group.id}
            onOpen={() => open(group.id)}
            onClose={close}
            onToggle={() => toggle(group.id)}
          />
        ))}

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="py-2 px-2 border-b border-white/10 hover:bg-white/5 rounded-md transition-colors active:bg-white/10"
          >
            {link.label}
          </Link>
        ))}

        <LocaleSwitcher className="self-start" />

        <AuthButtons
          className="flex flex-col gap-2 pt-3"
          loginVariant="outlineDark"
          loginClassName="h-10 active:bg-white/20"
          signUpClassName="h-10 active:opacity-90"
        />
      </div>
    </div>
  );
}
