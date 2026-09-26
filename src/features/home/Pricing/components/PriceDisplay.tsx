import { useTranslations } from "next-intl";

interface PriceDisplayProps {
  price: number;
  annual: boolean;
}

export function PriceDisplay({ price, annual }: PriceDisplayProps) {
  const t = useTranslations("pricing");
  const period = t(annual ? "year" : "month");

  return (
    <div
      className="flex items-baseline mb-5 sm:mb-6"
      aria-label={t("priceLabel", { price, period })}
    >
      <span className="text-2xl sm:text-4xl font-bold">
        {t("price", { price })}
      </span>
      <span className="text-white/70 ms-2 text-sm">{t("per", { period })}</span>
    </div>
  );
}
