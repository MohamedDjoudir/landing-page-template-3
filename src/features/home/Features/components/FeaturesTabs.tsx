"use client";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { featuresConfig } from "../config/features.config";

export function FeaturesTabs() {
  return (
    <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto pb-3 sm:pb-0 scrollbar-hide">
      <TabsList className="bg-white/5 backdrop-blur-sm border border-white/10 p-1 rounded-xl flex-nowrap">
        {featuresConfig.features.map((feature) => (
          <TabsTrigger
            key={feature.id}
            value={feature.id}
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-amber-500 data-[state=active]:text-white rounded-lg p-2 sm:px-3 sm:py-1.5 whitespace-nowrap"
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="flex items-center justify-center">
                {feature.icon}
              </span>
              <span className="hidden sm:inline text-sm md:text-base">
                {feature.title}
              </span>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
}
