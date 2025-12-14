"use client";

import { howItWorksConfig } from "../config/steps.config";
import { StepCard } from "./StepCard";

export function DesktopStepsGrid() {
  return (
    <div className="hidden sm:grid sm:grid-cols-2 sm:px-[5%] lg:grid-cols-4 gap-4 sm:gap-6">
      {howItWorksConfig.steps.map((step, index) => (
        <StepCard
          key={index}
          step={step}
          index={index}
          isLast={index === howItWorksConfig.steps.length - 1}
        />
      ))}
    </div>
  );
}
