"use client";

import { motion } from "framer-motion";
import { integrationsConfig } from "../config/integrations.config";

export function IntegrationsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8 sm:mb-10 md:mb-16"
    >
      <h2
        id="integrations-heading"
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
      >
        {integrationsConfig.title}
      </h2>
      <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
        {integrationsConfig.subtitle}
      </p>
    </motion.div>
  );
}
