import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Plan } from "../types";
import { PlanFeatures } from "./PlanFeatures";
import { PopularBadge } from "./PopularBadge";
import { PriceDisplay } from "./PriceDisplay";

interface PricingCardProps {
  plan: Plan;
  index: number;
  annual: boolean;
}

export function PricingCard({ plan, index, annual }: PricingCardProps) {
  const t = useTranslations("pricing.plans");
  const name = t(`${plan.id}.name`);
  const cta = t(`${plan.id}.cta`);

  return (
    <Reveal
      inView
      delay={index * 0.1}
      className={cn("relative", plan.popular && "md:-mt-4 md:mb-4")}
      role="listitem"
    >
      {plan.popular && <PopularBadge />}

      <div
        className={cn(
          "h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden transition-transform",
          plan.popular && "border border-amber-500"
        )}
      >
        <div className="p-5 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">{name}</h3>
          <p className="text-white/70 text-sm mb-5 sm:mb-6">
            {t(`${plan.id}.description`)}
          </p>

          <PriceDisplay
            price={annual ? plan.annualPrice : plan.monthlyPrice}
            annual={annual}
          />

          <Button
            variant={plan.popular ? "gradient" : "secondary"}
            className={cn(
              "w-full mb-6 sm:mb-8 py-2 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:outline-none",
              !plan.popular && "bg-white/10 hover:bg-white/20 text-white"
            )}
            aria-label={t("ctaLabel", { cta, plan: name })}
          >
            {cta}
          </Button>

          <PlanFeatures planId={plan.id} />
        </div>
      </div>
    </Reveal>
  );
}
