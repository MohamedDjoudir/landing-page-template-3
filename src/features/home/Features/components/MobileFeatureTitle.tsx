"use client";

import { featuresConfig } from "../config/features.config";

interface MobileFeatureTitleProps {
  activeTab: string;
}

export function MobileFeatureTitle({ activeTab }: MobileFeatureTitleProps) {
  return (
    <div className="sm:hidden text-center mb-4">
      <h3 className="text-lg font-bold">
        {featuresConfig.features.find((f) => f.id === activeTab)?.title}
      </h3>
    </div>
  );
}
