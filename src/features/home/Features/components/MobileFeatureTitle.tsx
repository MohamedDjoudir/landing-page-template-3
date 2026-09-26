import { useTranslations } from "next-intl";

interface MobileFeatureTitleProps {
  activeTab: string;
}

export function MobileFeatureTitle({ activeTab }: MobileFeatureTitleProps) {
  const t = useTranslations("features.items");

  return (
    <div className="sm:hidden text-center mb-4">
      <h3 className="text-lg font-bold">{t(`${activeTab}.title`)}</h3>
    </div>
  );
}
