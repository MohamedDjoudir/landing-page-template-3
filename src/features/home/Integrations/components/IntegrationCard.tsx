"use client";

import { motion } from "framer-motion";

interface Integration {
  name: string;
  logo: string;
  category: string;
}

interface IntegrationCardProps {
  integration: Integration;
  index: number;
}

export function IntegrationCard({ integration, index }: IntegrationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group"
      role="listitem"
    >
      <div
        className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center h-full transition-colors focus-within:ring-2 focus-within:ring-white"
        tabIndex={0}
      >
        <div
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-red-500/20 to-amber-500/20 flex items-center justify-center mb-1 sm:mb-2"
          aria-hidden="true"
        >
          <img
            src={integration.logo}
            alt=""
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain filter brightness-0 invert"
          />
        </div>
        <h3 className="font-medium text-center text-xs sm:text-sm">
          {integration.name}
        </h3>
        <p
          className="hidden sm:block text-xs text-white/50 mt-0.5"
          aria-label={`${integration.category} integration`}
        >
          {integration.category}
        </p>
      </div>
    </motion.div>
  );
}
