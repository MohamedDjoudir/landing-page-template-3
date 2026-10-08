"use client";

import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface LocaleSwitcherProps {
  className?: string;
}

export function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const targets = routing.locales.filter((item) => item !== locale);

  // One link per other locale, each placed by the parent's own layout.
  return (
    <>
      {targets.map((target) => (
        <Link
          key={target}
          href={pathname}
          locale={target}
          hrefLang={target}
          aria-label={t("switchTo", { language: t(`names.${target}`) })}
          className={cn(
            "inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70",
            className
          )}
        >
          <Languages className="h-4 w-4" aria-hidden="true" />
          <span>{t(`names.${target}`)}</span>
        </Link>
      ))}
    </>
  );
}
