"use client";

import { Tabs } from "@/components/ui/tabs";
import {
  FeaturesBackground,
  FeaturesHeader,
  FeaturesTabs,
  MobileFeatureTitle,
  FeatureContent,
} from "./components";
import { useFeaturesTabs } from "./hooks/useFeaturesTabs";

export default function Features() {
  const { activeTab, handleTabChange, contentStyle } = useFeaturesTabs();

  return (
    <section
      id="features"
      className="py-12 px-4 sm:py-16 md:py-24 bg-black relative"
    >
      <FeaturesBackground />

      <div className="container mx-auto relative z-10">
        <FeaturesHeader />

        <Tabs
          defaultValue="analytics"
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <FeaturesTabs />
          <MobileFeatureTitle activeTab={activeTab} />
          <FeatureContent contentStyle={contentStyle} />
        </Tabs>
      </div>
    </section>
  );
}
