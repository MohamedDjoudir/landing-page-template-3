import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";

export function HeroDescription() {
  const t = useTranslations("hero");

  return (
    <Reveal delay={0.2}>
      <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
        {t("description")}
      </p>
    </Reveal>
  );
}
