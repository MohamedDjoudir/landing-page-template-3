"use client";

import {
  PricingBackground,
  PricingHeader,
  PricingGrid,
  PricingFooter,
} from "./components";
import { usePricingToggle } from "./hooks/usePricingToggle";

export default function Pricing() {
  const { annual, setAnnual } = usePricingToggle();

  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      <PricingBackground />

      <div className="container mx-auto px-4 relative z-10">
        <PricingHeader annual={annual} setAnnual={setAnnual} />
        <PricingGrid annual={annual} />
        <PricingFooter />
      </div>
    </section>
  );
}
