"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  COMPANIES,
  FADE_ITEM_ANIMATION,
  STAGGER_ANIMATION,
} from "../constants";

export function CompanyLogos() {
  const t = useTranslations("socialProof");

  return (
    <motion.div
      className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 sm:gap-x-8 md:gap-x-12 mb-12 sm:mb-16"
      variants={STAGGER_ANIMATION}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      aria-label={t("logosLabel")}
    >
      {COMPANIES.map((company) => (
        <motion.div
          key={company.name}
          className="opacity-60 hover:opacity-100 transition-all duration-300"
          variants={FADE_ITEM_ANIMATION}
        >
          <div className="w-[30px] h-[30px] sm:w-[80px] sm:h-[80px] md:h-[40px] flex items-center justify-center">
            <Image
              src={company.logo}
              alt={t("logoAlt", { name: company.name })}
              width={60}
              height={60}
              className="object-contain filter brightness-0 invert"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
