import { useTranslations } from "next-intl";
import { SectionBackground } from "@/components/SectionBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { DesktopStepsGrid, MobileStepsCarousel } from "./components";

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-black relative overflow-hidden">
      <SectionBackground redSide="end" grid />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
          className="mb-8 sm:mb-16"
          subtitleClassName="text-sm sm:text-base md:text-lg"
        />
        <DesktopStepsGrid />
        <MobileStepsCarousel />
      </div>
    </section>
  );
}
