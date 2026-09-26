"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { GlowFrame } from "@/components/GlowFrame";
import { Reveal } from "@/components/Reveal";
import type { Step } from "../types";
import { StepBadge } from "./StepBadge";

interface StepCardProps {
  step: Step;
  index: number;
  isLast: boolean;
}

export function StepCard({ step, index, isLast }: StepCardProps) {
  const t = useTranslations("howItWorks.steps");
  const title = t(`${step.id}.title`);

  return (
    <Reveal inView delay={index * 0.1} className="h-full">
      <GlowFrame
        className="group h-full"
        glowClassName="rounded-xl blur-sm group-hover:opacity-100 transition-opacity duration-300"
        frameClassName="rounded-lg overflow-hidden h-full flex flex-col"
      >
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <Image
            src={step.image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <StepBadge
            number={step.number}
            className="top-4 start-4 w-10 h-10 sm:w-12 sm:h-12 text-lg sm:text-xl"
          />
        </div>

        <div className="p-4 sm:p-6 flex-grow flex flex-col">
          <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm sm:text-base text-white/70 mb-4 flex-grow">
            {t(`${step.id}.description`)}
          </p>

          {!isLast && (
            <div className="hidden lg:flex items-center justify-end text-amber-400 mt-auto">
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </div>
          )}
        </div>
      </GlowFrame>
    </Reveal>
  );
}
