"use client";

import { pricingConfig } from "../config/plans.config";

export function PricingFooter() {
  return (
    <div className="mt-10 sm:mt-16 text-center">
      <p className="text-white/70 text-sm sm:text-base">
        {pricingConfig.trialInfo}
      </p>
    </div>
  );
}
