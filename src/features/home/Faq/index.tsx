import { useTranslations } from "next-intl";
import { SectionBackground } from "@/components/SectionBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { FaqList, FaqFooter } from "./components";

export default function Faq() {
  const t = useTranslations("faq");

  return (
    <section className="py-4 sm:py-20 md:py-24 bg-black relative overflow-hidden">
      <SectionBackground redSide="start" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
          className="mb-8 sm:mb-12 md:mb-16"
          titleClassName="sm:mb-4"
          subtitleClassName="md:text-xl"
        />
        <FaqList />
        <FaqFooter />
      </div>
    </section>
  );
}
