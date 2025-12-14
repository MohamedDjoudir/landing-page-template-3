"use client";

import { motion } from "framer-motion";
import { featuresConfig } from "../config/features.config";

export function FeaturesHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8 sm:mb-12"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
        {featuresConfig.title}
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto">
        {featuresConfig.subtitle}
      </p>
    </motion.div>
  );
}
