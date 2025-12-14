"use client";

import { motion } from "framer-motion";
import { integrationsConfig } from "../config/integrations.config";

export function IntegrationsFooter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center mt-6 sm:mt-8"
    >
      <p className="text-xs sm:text-sm text-white/70">
        {integrationsConfig.ctaText}{" "}
        <a
          href="#contact"
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Request a custom integration"
        >
          {integrationsConfig.ctaLink}
        </a>
      </p>
    </motion.div>
  );
}
