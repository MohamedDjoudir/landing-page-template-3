"use client";

import { cn } from "@/lib/utils";
import { SCROLLED_THRESHOLD_PX } from "./constants";
import { useBodyScrollLock, useMobileMenu, useScrolled } from "./hooks";
import { HeaderLogo, DesktopNav, MobileNav, MenuToggle } from "./components";

export function Header() {
  const { isOpen, toggle } = useMobileMenu();
  const scrolled = useScrolled(SCROLLED_THRESHOLD_PX);
  useBodyScrollLock(isOpen);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 h-[60px] flex items-center",
        scrolled
          ? "bg-black/80 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <HeaderLogo />
        <DesktopNav />
        <MenuToggle isOpen={isOpen} onToggle={toggle} />
      </div>

      <MobileNav isOpen={isOpen} />
    </header>
  );
}
