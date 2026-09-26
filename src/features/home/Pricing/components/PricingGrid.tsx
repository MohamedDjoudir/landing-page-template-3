import { PLANS } from "../constants";
import { PricingCard } from "./PricingCard";

interface PricingGridProps {
  annual: boolean;
}

export function PricingGrid({ annual }: PricingGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
      {PLANS.map((plan, index) => (
        <PricingCard key={plan.id} plan={plan} index={index} annual={annual} />
      ))}
    </div>
  );
}
