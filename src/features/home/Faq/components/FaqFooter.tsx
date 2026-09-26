import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";

export function FaqFooter() {
  const t = useTranslations("faq");

  return (
    <Reveal inView delay={0.5} className="text-center mt-8 sm:mt-10 md:mt-12">
      <p className="text-sm sm:text-base text-white/70">
        {t("contactText")}{" "}
        <a
          href="#contact"
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
        >
          {t("contactLink")}
        </a>
      </p>
    </Reveal>
  );
}
