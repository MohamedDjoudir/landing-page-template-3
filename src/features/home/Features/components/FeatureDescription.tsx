"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckBadge } from "@/components/CheckBadge";
import { useTextDirection } from "@/hooks";
import { VISIBLE_BENEFITS } from "../constants";
import type { Feature } from "../types";
import { FeatureImage } from "./FeatureImage";

interface FeatureDescriptionProps {
  feature: Feature;
}

export function FeatureDescription({ feature }: FeatureDescriptionProps) {
  const t = useTranslations("features.items");
  const { sign } = useTextDirection();
  const title = t(`${feature.id}.title`);
  const benefits = t.raw(`${feature.id}.benefits`) as string[];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 * sign }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FeatureImage
        src={feature.image}
        alt={title}
        className="order-first mb-4 md:hidden min-h-[185px]"
        glowClassName="blur-md"
      />

      <p className="text-white/70 text-sm sm:text-base mb-4 mt-8 sm:mb-6">
        {t(`${feature.id}.description`)}
      </p>

      <ul className="space-y-2 sm:space-y-3">
        {benefits.slice(0, VISIBLE_BENEFITS).map((benefit) => (
          <li
            key={benefit}
            className="flex items-center gap-2 text-sm sm:text-base"
          >
            <CheckBadge className="h-4 w-4 sm:h-5 sm:w-5 text-xs font-bold">
              ✓
            </CheckBadge>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
