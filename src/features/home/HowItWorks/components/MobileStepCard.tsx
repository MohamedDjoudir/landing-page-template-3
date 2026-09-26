import Image from "next/image";
import { useTranslations } from "next-intl";
import { GlowFrame } from "@/components/GlowFrame";
import type { Step } from "../types";
import { StepBadge } from "./StepBadge";

interface MobileStepCardProps {
  step: Step;
  index: number;
}

export function MobileStepCard({ step, index }: MobileStepCardProps) {
  const t = useTranslations("howItWorks.steps");
  const title = t(`${step.id}.title`);

  return (
    <div className="flex-[0_0_85%] min-w-0 ms-4">
      <GlowFrame
        className="h-[320px]"
        glowClassName="rounded-xl blur-sm"
        frameClassName="rounded-lg overflow-hidden h-full flex flex-col"
      >
        <div className="relative h-32 overflow-hidden">
          <Image
            src={step.image}
            alt={title}
            fill
            sizes="(max-width: 639px) 80vw"
            className="object-cover"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <StepBadge
            number={step.number}
            className="top-3 start-3 w-8 h-8 text-sm"
          />
        </div>

        <div className="p-3 flex-grow flex flex-col">
          <h3 className="text-base font-bold mb-1">{title}</h3>
          <p className="text-xs text-white/70">{t(`${step.id}.description`)}</p>
        </div>
      </GlowFrame>
    </div>
  );
}
