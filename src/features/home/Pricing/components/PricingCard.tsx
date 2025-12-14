"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  popular: boolean;
  cta: string;
  features: string[];
}

interface PricingCardProps {
  plan: Plan;
  index: number;
  annual: boolean;
}

export function PricingCard({ plan, index, annual }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
      role="listitem"
    >
      {plan.popular && <PopularBadge />}

      <div
        className={`h-full bg-white/5 backdrop-blur-sm border rounded-2xl overflow-hidden transition-transform ${
          plan.popular ? "border-amber-500" : "border-white/10"
        }`}
      >
        <div className="p-5 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
          <p className="text-white/70 text-sm mb-5 sm:mb-6">
            {plan.description}
          </p>

          <PriceDisplay plan={plan} annual={annual} />

          <Button
            className={`w-full mb-6 sm:mb-8 py-2 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:outline-none ${
              plan.popular
                ? "bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0"
                : "bg-white/10 hover:bg-white/20 text-white"
            }`}
            aria-label={`${plan.cta} with the ${plan.name} plan`}
          >
            {plan.cta}
          </Button>

          <FeaturesList features={plan.features} planName={plan.name} />
        </div>
      </div>
    </motion.div>
  );
}

function PopularBadge() {
  return (
    <div className="absolute -top-3 left-0 right-0 flex justify-center">
      <div className="bg-gradient-to-r from-red-500 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-50">
        Most Popular
      </div>
    </div>
  );
}

function PriceDisplay({ plan, annual }: { plan: Plan; annual: boolean }) {
  return (
    <div
      className="flex items-baseline mb-5 sm:mb-6"
      aria-label={`${
        annual ? plan.annualPrice : plan.monthlyPrice
      } dollars per ${annual ? "year" : "month"}`}
    >
      <span className="text-2xl sm:text-4xl font-bold">
        ${annual ? plan.annualPrice : plan.monthlyPrice}
      </span>
      <span className="text-white/70 ml-2 text-sm">
        /{annual ? "year" : "month"}
      </span>
    </div>
  );
}

function FeaturesList({
  features,
  planName,
}: {
  features: string[];
  planName: string;
}) {
  return (
    <ul
      className="space-y-3 sm:space-y-4"
      aria-label={`${planName} plan features`}
    >
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-2 sm:gap-3">
          <div
            className="flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-gradient-to-r from-red-500 to-amber-500 flex items-center justify-center"
            aria-hidden="true"
          >
            <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
          </div>
          <span className="text-white/80 text-sm sm:text-base">{feature}</span>
        </li>
      ))}
    </ul>
  );
}
