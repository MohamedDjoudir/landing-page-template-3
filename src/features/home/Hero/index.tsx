"use client";

import {
  HeroBadge,
  HeroTitle,
  HeroDescription,
  HeroButtons,
  HeroSocialProof,
  HeroImage,
  HeroBackground,
} from "./components";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-16 sm:pt-20 overflow-hidden bg-black">
      <HeroBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8 sm:py-0">
          {/* Hero content */}
          <div className="flex-1 text-center lg:text-left">
            <HeroBadge />
            <HeroTitle />
            <HeroDescription />
            <HeroButtons />
            <HeroSocialProof />
          </div>

          {/* Hero image */}
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
