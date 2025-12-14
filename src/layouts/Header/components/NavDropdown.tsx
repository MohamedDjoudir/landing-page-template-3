"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type NavDropdownProps = {
  label: string;
  items: string[];
  id: string;
  isMobile?: boolean;
  className?: string;
  activeDropdown: string | null;
  setActiveDropdown: (id: string | null) => void;
};

export default function NavDropdown({
  label,
  items,
  id,
  isMobile = false,
  className,
  activeDropdown,
  setActiveDropdown,
}: NavDropdownProps) {
  const isOpen = activeDropdown === id;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear any pending timeout when component unmounts or dropdown state changes
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeDropdown]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setActiveDropdown]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleDropdown();
    } else if (e.key === "Escape" && isOpen) {
      setActiveDropdown(null);
    }
  };

  // For desktop only - hover functionality with improved handling
  const handleMouseEnter = () => {
    if (isMobile) return;

    // Clear any pending close timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Set this dropdown as active immediately
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a small delay before closing to allow movement to another dropdown
    timeoutRef.current = setTimeout(() => {
      // Only close if we're the currently active dropdown
      // This prevents closing a newly opened dropdown
      if (activeDropdown === id) {
        setActiveDropdown(null);
      }
    }, 150);
  };

  const toggleDropdown = () => {
    setActiveDropdown(isOpen ? null : id);
  };

  const mobileStyles = isMobile
    ? {
        wrapper: "border-b border-white/10 pb-2",
        button:
          "flex items-center justify-between w-full py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 rounded-md px-2",
        content: "pl-2 mt-1 space-y-0.5 animate-fadeIn",
        item: "block py-1.5 px-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors active:bg-white/15",
      }
    : {
        wrapper: "relative",
        button:
          "flex items-center gap-1 text-white/80 hover:text-white transition-colors py-2 px-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 text-sm lg:text-base",
        content:
          "absolute top-full left-0 mt-1 w-64 bg-black/90 border border-white/10 rounded-xl overflow-hidden backdrop-blur-xl shadow-xl p-3 animate-fadeIn",
        item: "flex items-center px-4 py-2.5 hover:bg-white/10 rounded-lg transition-colors",
      };

  return (
    <div
      className={cn(mobileStyles.wrapper, className)}
      onMouseEnter={isMobile ? undefined : handleMouseEnter}
      onMouseLeave={isMobile ? undefined : handleMouseLeave}
    >
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        className={mobileStyles.button}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className={isMobile ? "font-medium" : ""}>{label}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen ? "rotate-180" : "",
            isMobile ? "" : "ml-1"
          )}
        />
      </button>

      {isOpen && (
        <div ref={dropdownRef} className={mobileStyles.content}>
          {items.map((item) => (
            <Link key={item} href="#" className={mobileStyles.item}>
              <span className={cn("font-medium", "text-sm")}>{item}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
