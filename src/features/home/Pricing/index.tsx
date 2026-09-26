"use client";

import { SectionBackground } from "@/components/SectionBackground";
import { PricingHeader, PricingGrid, PricingFooter } from "./components";
import { usePricingToggle } from "./hooks";

export default function Pricing() {
  const { annual, setAnnual } = usePricingToggle();

  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      <SectionBackground redSide="end" />

      <div className="container mx-auto px-4 relative z-10">
        <PricingHeader annual={annual} onBillingChange={setAnnual} />
        <PricingGrid annual={annual} />
        <PricingFooter />
      </div>
    </section>
  );
}
