import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";

export function SocialProofHeader() {
  const t = useTranslations("socialProof");

  return (
    <Reveal inView className="text-center mb-10 sm:mb-16">
      <p className="text-base sm:text-lg text-amber-400 font-medium mb-2">
        {t("eyebrow")}
      </p>
      <h2
        id="social-proof-heading"
        className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
      >
        {t("title")}
      </h2>
    </Reveal>
  );
}
