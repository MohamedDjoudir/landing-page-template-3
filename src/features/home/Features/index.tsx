"use client";

import { useTranslations } from "next-intl";
import { SectionBackground } from "@/components/SectionBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { Tabs } from "@/components/ui/tabs";
import {
  FeaturesTabs,
  MobileFeatureTitle,
  FeatureContent,
} from "./components";
import { useFeaturesTabs } from "./hooks";

export default function Features() {
  const t = useTranslations("features");
  const { activeTab, setActiveTab } = useFeaturesTabs();

  return (
    <section
      id="features"
      className="py-12 px-4 sm:py-16 md:py-24 bg-black relative"
    >
      <SectionBackground redSide="end" />

      <div className="container mx-auto relative z-10">
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
          className="mb-8 sm:mb-12"
          subtitleClassName="text-sm sm:text-base md:text-lg"
        />

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <FeaturesTabs />
          <MobileFeatureTitle activeTab={activeTab} />
          <FeatureContent />
        </Tabs>
      </div>
    </section>
  );
}
