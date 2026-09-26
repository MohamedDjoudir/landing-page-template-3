import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface BillingToggleProps {
  annual: boolean;
  onChange: (annual: boolean) => void;
}

const OPTION_CLASS =
  "relative z-10 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white";

export function BillingToggle({ annual, onChange }: BillingToggleProps) {
  const t = useTranslations("pricing");

  return (
    <div className="relative flex items-center justify-center mt-6 sm:mt-8">
      <fieldset className="bg-white/5 backdrop-blur-sm p-1 rounded-full">
        <legend className="sr-only">{t("billingFrequency")}</legend>
        <div className="relative flex">
          <button
            type="button"
            onClick={() => onChange(true)}
            className={cn(OPTION_CLASS, annual ? "text-white" : "text-white/70")}
            aria-pressed={annual}
            aria-label={t("annualBilling")}
          >
            {t("annual")}
          </button>
          <button
            type="button"
            onClick={() => onChange(false)}
            className={cn(OPTION_CLASS, !annual ? "text-white" : "text-white/70")}
            aria-pressed={!annual}
            aria-label={t("monthlyBilling")}
          >
            {t("monthly")}
          </button>
          <div
            className={cn(
              "absolute top-1 start-1 h-[calc(100%-8px)] bg-gradient-to-r from-red-500 to-amber-500 rounded-full transition-transform duration-300",
              annual
                ? "w-[calc(50%-12px)] translate-x-0"
                : "w-[calc(50%-3px)] translate-x-full rtl:-translate-x-full"
            )}
            aria-hidden="true"
          ></div>
        </div>
      </fieldset>

      {annual && (
        <div className="absolute sm:relative -bottom-8 sm:bottom-auto ms-3 bg-gradient-to-r from-red-500 to-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {t("save")}
        </div>
      )}
    </div>
  );
}
