"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ctaConfig } from "../config/cta.config";

export function CtaCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-2xl blur-lg opacity-70"></div>
        <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-8 md:p-12 text-center">
          <CtaContent />
        </div>
      </div>
    </motion.div>
  );
}

function CtaContent() {
  return (
    <>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
        {ctaConfig.title}
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
        {ctaConfig.description}
      </p>

      <CtaButtons />

      <p className="mt-4 sm:mt-6 text-white/50 text-xs sm:text-sm">
        {ctaConfig.note}
      </p>
    </>
  );
}

function CtaButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0 h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base">
        {ctaConfig.primaryCta}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        className="border-white/20 text-white hover:bg-white/10 h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
      >
        {ctaConfig.secondaryCta}
      </Button>
    </div>
  );
}
