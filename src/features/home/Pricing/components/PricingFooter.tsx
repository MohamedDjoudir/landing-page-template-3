import { useTranslations } from "next-intl";

export function PricingFooter() {
  const t = useTranslations("pricing");

  return (
    <div className="mt-10 sm:mt-16 text-center">
      <p className="text-white/70 text-sm sm:text-base">{t("trialInfo")}</p>
    </div>
  );
}
