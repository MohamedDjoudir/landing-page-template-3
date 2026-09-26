"use client";

import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { useActiveDropdown, useEscapeKey, useNavItems } from "../hooks";
import { AuthButtons } from "./AuthButtons";
import { NavDropdown } from "./NavDropdown";

export function DesktopNav() {
  const { dropdowns, links } = useNavItems();
  const { activeId, open, close, closeIfActive, toggle } = useActiveDropdown();
  useEscapeKey(close);

  return (
    <>
      <nav className="hidden md:flex items-center gap-4 lg:gap-8">
        {dropdowns.map((group) => (
          <NavDropdown
            key={group.id}
            group={group}
            isOpen={activeId === group.id}
            onOpen={() => open(group.id)}
            onClose={() => closeIfActive(group.id)}
            onToggle={() => toggle(group.id)}
          />
        ))}

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white/80 hover:text-white transition-colors py-2 px-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 text-sm lg:text-base"
            onMouseEnter={close}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div
        className="hidden md:flex items-center gap-2 lg:gap-4"
        onMouseEnter={close}
      >
        <LocaleSwitcher />
        <AuthButtons
          className="flex items-center gap-2 lg:gap-4"
          loginClassName="text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-amber-500/70 text-sm lg:text-base"
          signUpClassName="hover:shadow-amber-500/30 transition-shadow text-sm lg:text-base px-3 lg:px-4"
        />
      </div>
    </>
  );
}
