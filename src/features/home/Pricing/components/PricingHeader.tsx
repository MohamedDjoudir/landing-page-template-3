import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/SectionHeader";
import { BillingToggle } from "./BillingToggle";

interface PricingHeaderProps {
  annual: boolean;
  onBillingChange: (annual: boolean) => void;
}

export function PricingHeader({ annual, onBillingChange }: PricingHeaderProps) {
  const t = useTranslations("pricing");

  return (
    <div className="text-center mb-10 sm:mb-16">
      <SectionHeader
        titleId="pricing-heading"
        title={t("title")}
        subtitle={t("subtitle")}
        titleClassName="sm:mb-4"
        subtitleClassName="md:text-xl"
      />
      <BillingToggle annual={annual} onChange={onBillingChange} />
    </div>
  );
}
