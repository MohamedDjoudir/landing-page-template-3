"use client";

import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useClickOutside, useHoverIntent } from "../hooks";
import type { NavDropdownGroup } from "../types";

interface NavDropdownProps {
  group: NavDropdownGroup;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  isMobile?: boolean;
}

const STYLES = {
  mobile: {
    wrapper: "border-b border-white/10 pb-2",
    button:
      "flex items-center justify-between w-full py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 rounded-md px-2",
    content: "ps-2 mt-1 space-y-0.5 animate-fadeIn",
    item: "block py-1.5 px-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors active:bg-white/15",
  },
  desktop: {
    wrapper: "relative",
    button:
      "flex items-center gap-1 text-white/80 hover:text-white transition-colors py-2 px-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 text-sm lg:text-base",
    content:
      "absolute top-full start-0 mt-1 w-64 bg-black/90 border border-white/10 rounded-xl overflow-hidden backdrop-blur-xl shadow-xl p-3 animate-fadeIn",
    item: "flex items-center px-4 py-2.5 hover:bg-white/10 rounded-lg transition-colors",
  },
} as const;

export function NavDropdown({
  group,
  isOpen,
  onOpen,
  onClose,
  onToggle,
  isMobile = false,
}: NavDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const styles = isMobile ? STYLES.mobile : STYLES.desktop;

  useClickOutside([dropdownRef, buttonRef], isOpen, onClose);
  const { handleMouseEnter, handleMouseLeave } = useHoverIntent(onOpen, onClose);

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={isMobile ? undefined : handleMouseEnter}
      onMouseLeave={isMobile ? undefined : handleMouseLeave}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={onToggle}
        onKeyDown={(event) => {
          if (event.key === "Escape" && isOpen) onClose();
        }}
        className={styles.button}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className={isMobile ? "font-medium" : ""}>{group.label}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180",
            !isMobile && "ms-1"
          )}
        />
      </button>

      {isOpen && (
        <div ref={dropdownRef} className={styles.content}>
          {group.items.map((item) => (
            <Link key={item.label} href={item.href} className={styles.item}>
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
