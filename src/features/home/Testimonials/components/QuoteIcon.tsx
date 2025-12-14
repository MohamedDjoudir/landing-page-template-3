"use client";

import { Quote } from "lucide-react";

export function QuoteIcon() {
  return (
    <>
      <div
        className="absolute -top-12 -left-12 text-red-500/20 hidden sm:block"
        aria-hidden="true"
      >
        <Quote size={80} />
      </div>

      <div className="sm:hidden flex justify-center mb-4" aria-hidden="true">
        <Quote className="h-10 w-10 text-red-500/20" />
      </div>
    </>
  );
}
