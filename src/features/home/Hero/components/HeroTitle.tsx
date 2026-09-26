import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";

export function HeroTitle() {
  const t = useTranslations("hero.title");

  return (
    <Reveal delay={0.1}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
        <span className="block">{t("line1")}</span>
        <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
          {t("line2")}
        </span>
      </h1>
    </Reveal>
  );
}
