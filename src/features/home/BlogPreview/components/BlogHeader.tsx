import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";
import { OutlineButton } from "@/components/OutlineButton";

export function BlogHeader() {
  const t = useTranslations("blog");

  return (
    <Reveal
      inView
      className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12"
    >
      <div>
        <h2
          id="blog-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
        >
          {t("title")}
        </h2>
        <p className="text-base sm:text-lg text-white/70 max-w-2xl">
          {t("subtitle")}
        </p>
      </div>
      <div className="mt-6 md:mt-0">
        <OutlineButton
          className="text-sm sm:text-base focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
          aria-label={t("viewAllLabel")}
        >
          {t("viewAll")}
          <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" aria-hidden="true" />
        </OutlineButton>
      </div>
    </Reveal>
  );
}
