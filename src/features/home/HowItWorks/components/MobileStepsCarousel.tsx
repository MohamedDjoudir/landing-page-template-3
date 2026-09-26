"use client";

import { STEPS } from "../constants";
import { useStepsCarousel } from "../hooks";
import { MobileStepCard } from "./MobileStepCard";
import { StepsPagination } from "./StepsPagination";

export function MobileStepsCarousel() {
  const { emblaRef, selectedIndex, scrollTo } = useStepsCarousel();

  return (
    <div className="sm:hidden">
      <div className="overflow-visible -mx-4 px-4" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {STEPS.map((step, index) => (
            <MobileStepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>

      <StepsPagination
        selectedIndex={selectedIndex}
        total={STEPS.length}
        onSelect={scrollTo}
      />
    </div>
  );
}
