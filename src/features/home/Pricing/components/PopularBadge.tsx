import { useTranslations } from "next-intl";

export function PopularBadge() {
  const t = useTranslations("pricing");

  return (
    <div className="absolute -top-3 inset-x-0 flex justify-center">
      <div className="bg-gradient-to-r from-red-500 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-50">
        {t("mostPopular")}
      </div>
    </div>
  );
}
