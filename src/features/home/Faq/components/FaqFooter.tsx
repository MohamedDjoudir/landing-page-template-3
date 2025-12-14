"use client";

import { motion } from "framer-motion";
import { faqConfig } from "../config/faq.config";

export function FaqFooter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-center mt-8 sm:mt-10 md:mt-12"
    >
      <p className="text-sm sm:text-base text-white/70">
        {faqConfig.contactText}{" "}
        <a
          href="#contact"
          className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
        >
          {faqConfig.contactLink}
        </a>
      </p>
    </motion.div>
  );
}
