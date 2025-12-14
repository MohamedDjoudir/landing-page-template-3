"use client";

import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import { featuresConfig } from "../config/features.config";

interface FeatureContentProps {
  contentStyle: React.CSSProperties;
}

export function FeatureContent({ contentStyle }: FeatureContentProps) {
  return (
    <div style={contentStyle} className="relative">
      {featuresConfig.features.map((feature) => (
        <TabsContent
          key={feature.id}
          value={feature.id}
          className="focus-visible:outline-none focus-visible:ring-0 scroll-mt-20 absolute top-0 left-0 w-full transition-opacity"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <FeatureDescription feature={feature} />
            <FeatureImage feature={feature} />
          </div>
        </TabsContent>
      ))}
    </div>
  );
}

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
  icon: React.ReactNode;
}

function FeatureDescription({ feature }: { feature: Feature }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image shown first on mobile */}
      <div className="relative order-first mb-4 md:hidden min-h-[185px]">
        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-2xl blur-md opacity-70"></div>
        <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden p-1">
          <img
            src={feature.image || "/placeholder.svg"}
            alt={feature.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <p className="text-white/70 text-sm sm:text-base mb-4 mt-8 sm:mb-6">
        {feature.description}
      </p>

      <ul className="space-y-2 sm:space-y-3">
        {feature.benefits.slice(0, 3).map((benefit, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm sm:text-base"
          >
            <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-gradient-to-r from-red-500 to-amber-500 flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function FeatureImage({ feature }: { feature: Feature }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative hidden md:block"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-2xl blur-lg opacity-70"></div>
      <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden p-1">
        <img
          src={feature.image || "/placeholder.svg"}
          alt={feature.title}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </motion.div>
  );
}
