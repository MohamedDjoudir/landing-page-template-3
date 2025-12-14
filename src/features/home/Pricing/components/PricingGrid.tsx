"use client";

import { pricingConfig } from "../config/plans.config";
import { PricingCard } from "./PricingCard";

interface PricingGridProps {
  annual: boolean;
}

export function PricingGrid({ annual }: PricingGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
      {pricingConfig.plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} index={index} annual={annual} />
      ))}
    </div>
  );
}
