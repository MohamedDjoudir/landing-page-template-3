import { useTranslations } from "next-intl";
import { CheckBadge } from "@/components/CheckBadge";

interface PlanFeaturesProps {
  planId: string;
}

export function PlanFeatures({ planId }: PlanFeaturesProps) {
  const t = useTranslations("pricing.plans");
  const features = t.raw(`${planId}.features`) as string[];

  return (
    <ul
      className="space-y-3 sm:space-y-4"
      aria-label={t("featuresLabel", { plan: t(`${planId}.name`) })}
    >
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-2 sm:gap-3">
          <CheckBadge
            className="h-4 w-4 sm:h-5 sm:w-5"
            iconClassName="h-2.5 w-2.5 sm:h-3 sm:w-3"
          />
          <span className="text-white/80 text-sm sm:text-base">{feature}</span>
        </li>
      ))}
    </ul>
  );
}
