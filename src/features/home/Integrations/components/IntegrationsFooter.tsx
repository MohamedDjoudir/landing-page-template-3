import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";

export function IntegrationsFooter() {
  const t = useTranslations("integrations");

  return (
    <Reveal inView delay={0.3} className="text-center mt-6 sm:mt-8">
      <p className="text-xs sm:text-sm text-white/70">
        {t("ctaText")}{" "}
        <a
          href="#contact"
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
          aria-label={t("ctaAriaLabel")}
        >
          {t("ctaLink")}
        </a>
      </p>
    </Reveal>
  );
}
