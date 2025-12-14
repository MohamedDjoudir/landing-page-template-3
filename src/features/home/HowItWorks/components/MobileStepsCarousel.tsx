"use client";

import Image from "next/image";
import { howItWorksConfig } from "../config/steps.config";

interface MobileStepsCarouselProps {
  emblaRef: React.RefCallback<HTMLDivElement>;
  selectedIndex: number;
  scrollTo: (index: number) => void;
}

export function MobileStepsCarousel({
  emblaRef,
  selectedIndex,
  scrollTo,
}: MobileStepsCarouselProps) {
  return (
    <div className="sm:hidden">
      <div className="overflow-visible -mx-4 px-4" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {howItWorksConfig.steps.map((step, index) => (
            <MobileStepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>

      <MobileStepsPagination
        selectedIndex={selectedIndex}
        scrollTo={scrollTo}
        total={howItWorksConfig.steps.length}
      />
    </div>
  );
}

interface Step {
  number: string;
  title: string;
  description: string;
  image: string;
}

function MobileStepCard({ step, index }: { step: Step; index: number }) {
  return (
    <div className="flex-[0_0_85%] min-w-0 ml-4 first:ml-4">
      <div className="relative h-[320px]">
        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-xl blur-sm opacity-70"></div>
        <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden h-full flex flex-col">
          <div className="relative h-32 overflow-hidden">
            <Image
              src={step.image}
              alt={step.title}
              fill
              sizes="(max-width: 639px) 80vw"
              className="object-cover"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-amber-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">
              {step.number}
            </div>
          </div>

          <div className="p-3 flex-grow flex flex-col">
            <h3 className="text-base font-bold mb-1">{step.title}</h3>
            <p className="text-xs text-white/70">{step.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileStepsPagination({
  selectedIndex,
  scrollTo,
  total,
}: {
  selectedIndex: number;
  scrollTo: (index: number) => void;
  total: number;
}) {
  return (
    <div className="flex justify-center mt-8 sm:hidden">
      {[...Array(total)].map((_, index) => (
        <button
          key={index}
          className={`h-1 rounded-full mx-1 ${
            selectedIndex === index
              ? "w-5 bg-gradient-to-r from-red-500 to-amber-500"
              : "w-2 bg-white/20"
          }`}
          onClick={() => scrollTo(index)}
          aria-label={`Go to step ${index + 1}`}
        />
      ))}
    </div>
  );
}
