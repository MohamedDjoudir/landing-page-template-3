import { STEPS } from "../constants";
import { StepCard } from "./StepCard";

export function DesktopStepsGrid() {
  return (
    <div className="hidden sm:grid sm:grid-cols-2 sm:px-[5%] lg:grid-cols-4 gap-4 sm:gap-6">
      {STEPS.map((step, index) => (
        <StepCard
          key={step.id}
          step={step}
          index={index}
          isLast={index === STEPS.length - 1}
        />
      ))}
    </div>
  );
}
