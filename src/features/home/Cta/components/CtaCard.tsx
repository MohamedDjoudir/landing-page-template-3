import { useTranslations } from "next-intl";
import { GlowFrame } from "@/components/GlowFrame";
import { Reveal } from "@/components/Reveal";
import { CtaButtons } from "./CtaButtons";

export function CtaCard() {
  const t = useTranslations("cta");

  return (
    <Reveal inView className="max-w-4xl mx-auto">
      <GlowFrame frameClassName="p-5 sm:p-8 md:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          {t("title")}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
          {t("description")}
        </p>

        <CtaButtons />

        <p className="mt-4 sm:mt-6 text-white/50 text-xs sm:text-sm">
          {t("note")}
        </p>
      </GlowFrame>
    </Reveal>
  );
}
