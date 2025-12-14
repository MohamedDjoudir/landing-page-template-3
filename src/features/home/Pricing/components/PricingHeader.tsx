"use client";

import { motion } from "framer-motion";
import { pricingConfig } from "../config/plans.config";

interface PricingHeaderProps {
  annual: boolean;
  setAnnual: (value: boolean) => void;
}

export function PricingHeader({ annual, setAnnual }: PricingHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-10 sm:mb-16"
    >
      <h2
        id="pricing-heading"
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
      >
        {pricingConfig.title}
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
        {pricingConfig.subtitle}
      </p>

      <BillingToggle annual={annual} setAnnual={setAnnual} />
    </motion.div>
  );
}

function BillingToggle({ annual, setAnnual }: PricingHeaderProps) {
  return (
    <div className="relative flex items-center justify-center mt-6 sm:mt-8">
      <fieldset className="bg-white/5 backdrop-blur-sm border border-white/10 p-1 rounded-full">
        <legend className="sr-only">Billing Frequency</legend>
        <div className="relative flex">
          <button
            onClick={() => setAnnual(true)}
            className={`relative z-10 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white ${
              annual ? "text-white" : "text-white/70"
            }`}
            aria-pressed={annual}
            aria-label="Annual billing"
          >
            Annual
          </button>
          <button
            onClick={() => setAnnual(false)}
            className={`relative z-10 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white ${
              !annual ? "text-white" : "text-white/70"
            }`}
            aria-pressed={!annual}
            aria-label="Monthly billing"
          >
            Monthly
          </button>
          <div
            className={`absolute top-1 left-1 ${
              annual ? "w-[calc(50%-12px)]" : "w-[calc(50%-3px)]"
            } h-[calc(100%-8px)] bg-gradient-to-r from-red-500 to-amber-500 rounded-full transition-transform duration-300 ${
              annual ? "transform translate-x-0" : "transform translate-x-full"
            }`}
            aria-hidden="true"
          ></div>
        </div>
      </fieldset>

      {annual && (
        <div className="absolute sm:relative -bottom-8 sm:bottom-auto ml-3 bg-gradient-to-r from-red-500 to-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          Save 20%
        </div>
      )}
    </div>
  );
}
