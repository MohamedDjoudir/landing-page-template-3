import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

interface MenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MenuToggle({ isOpen, onToggle }: MenuToggleProps) {
  const t = useTranslations("header");

  return (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden text-white focus-visible:ring-2 focus-visible:ring-amber-500/70 h-9 w-9"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-label={isOpen ? t("closeMenu") : t("openMenu")}
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </Button>
  );
}
