"use client";

import {
  HowItWorksBackground,
  HowItWorksHeader,
  DesktopStepsGrid,
  MobileStepsCarousel,
} from "./components";
import { useStepsCarousel } from "./hooks/useStepsCarousel";

export default function HowItWorks() {
  const { emblaRef, selectedIndex, scrollTo } = useStepsCarousel();

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-black relative overflow-hidden">
      <HowItWorksBackground />

      <div className="container mx-auto px-4 relative z-10">
        <HowItWorksHeader />
        <DesktopStepsGrid />
        <MobileStepsCarousel
          emblaRef={emblaRef}
          selectedIndex={selectedIndex}
          scrollTo={scrollTo}
        />
      </div>
    </section>
  );
}
