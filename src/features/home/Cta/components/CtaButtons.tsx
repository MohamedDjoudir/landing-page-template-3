import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { GradientButton } from "@/components/GradientButton";
import { OutlineButton } from "@/components/OutlineButton";

export function CtaButtons() {
  const t = useTranslations("cta");

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <GradientButton className="h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base">
        {t("primaryCta")}
        <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" />
      </GradientButton>
      <OutlineButton className="h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base">
        {t("secondaryCta")}
      </OutlineButton>
    </div>
  );
}
