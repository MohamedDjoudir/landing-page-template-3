"use client";

import { motion } from "framer-motion";
import { faqConfig } from "../config/faq.config";

export function FaqHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8 sm:mb-12 md:mb-16"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
        {faqConfig.title}
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
        {faqConfig.subtitle}
      </p>
    </motion.div>
  );
}
