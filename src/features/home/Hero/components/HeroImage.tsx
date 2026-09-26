"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { GlowFrame } from "@/components/GlowFrame";
import { Reveal } from "@/components/Reveal";
import { HERO_IMAGE } from "../constants";
import { useParallax } from "../hooks";
import { HeroStatusBadge } from "./HeroStatusBadge";

export function HeroImage() {
  const t = useTranslations("hero");
  const parallaxRef = useParallax<HTMLDivElement>();

  return (
    <div className="flex-1 relative mt-8 lg:mt-0 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-full mx-auto">
      <Reveal delay={0.2} duration={0.7} className="relative z-10">
        <GlowFrame frameRef={parallaxRef} frameClassName="overflow-hidden">
          <Image
              src={HERO_IMAGE.src}
              alt={t("imageAlt")}
              width={HERO_IMAGE.width}
              height={HERO_IMAGE.height}
              className="w-full h-auto rounded-lg"
            />

            <HeroStatusBadge
              label={t("status.online")}
              delay={0.6}
              className="top-2 sm:top-4 end-2 sm:end-4"
              dotClassName="w-2 h-2 sm:w-3 sm:h-3 bg-green-500"
              labelClassName="text-xs sm:text-sm font-medium"
            />
            <HeroStatusBadge
              label={t("status.processing")}
              delay={0.8}
              className="bottom-2 sm:bottom-4 start-2 sm:start-4"
              dotClassName="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-500 animate-pulse"
              labelClassName="text-xs"
            />
        </GlowFrame>
      </Reveal>

      <div className="absolute -top-5 sm:-top-10 -end-5 sm:-end-10 w-10 h-10 sm:w-20 sm:h-20 border border-white/10 rounded-full hidden sm:block"></div>
      <div className="absolute -bottom-3 sm:-bottom-5 -start-3 sm:-start-5 w-6 h-6 sm:w-10 sm:h-10 border border-white/10 rounded-full hidden sm:block"></div>
    </div>
  );
}
