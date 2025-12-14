"use client";

import {
  SocialProofBackground,
  SocialProofHeader,
  CompanyLogos,
  StatsGrid,
} from "./components";

export default function SocialProof() {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-black"
      aria-labelledby="social-proof-heading"
    >
      <SocialProofBackground />

      <div className="container relative z-10 px-4 md:px-8">
        <SocialProofHeader />
        <CompanyLogos />
        <StatsGrid />
      </div>
    </section>
  );
}
