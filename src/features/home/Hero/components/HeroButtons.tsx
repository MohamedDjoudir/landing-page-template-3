import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";
import { GradientButton } from "@/components/GradientButton";
import { OutlineButton } from "@/components/OutlineButton";

export function HeroButtons() {
  const t = useTranslations("hero");

  return (
    <Reveal
      delay={0.3}
      className="flex flex-col max-w-[80%] mx-auto sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
    >
      <GradientButton className="h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base">
        {t("primaryCta")}
        <ArrowRight className="ms-2 h-3.5 w-3.5 sm:h-4 sm:w-4 rtl:rotate-180" />
      </GradientButton>
      <OutlineButton className="h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base">
        {t("secondaryCta")}
      </OutlineButton>
    </Reveal>
  );
}
