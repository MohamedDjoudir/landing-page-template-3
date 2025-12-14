"use client";

import { CtaBackground, CtaCard } from "./components";

export default function Cta() {
  return (
    <section className="py-16 pb-20 px-3 sm:px-0 sm:py-16 md:py-24 bg-black relative overflow-hidden">
      <CtaBackground />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <CtaCard />
      </div>
    </section>
  );
}
