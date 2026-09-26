import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LEGAL_LINK_KEYS } from "../constants";

export function FooterLegal() {
  const t = useTranslations("footer");

  return (
    <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
      <p className="text-white/50 text-sm mb-4 md:mb-0">
        {t("copyright", { year: new Date().getFullYear() })}
      </p>
      <div className="flex gap-6">
        {LEGAL_LINK_KEYS.map((key) => (
          <Link
            key={key}
            href="#"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            {t(`legal.${key}`)}
          </Link>
        ))}
      </div>
    </div>
  );
}
