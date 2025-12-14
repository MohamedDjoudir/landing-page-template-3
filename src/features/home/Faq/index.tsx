"use client";

import { FaqBackground, FaqHeader, FaqList, FaqFooter } from "./components";

export default function Faq() {
  return (
    <section className="py-4 sm:py-20 md:py-24 bg-black relative overflow-hidden">
      <FaqBackground />

      <div className="container mx-auto px-4 relative z-10">
        <FaqHeader />
        <FaqList />
        <FaqFooter />
      </div>
    </section>
  );
}
