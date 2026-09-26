import { SectionBackground } from "@/components/SectionBackground";
import { SocialProofHeader, CompanyLogos, StatsGrid } from "./components";

export default function SocialProof() {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-black"
      aria-labelledby="social-proof-heading"
    >
      <SectionBackground
        redSide="start"
        size="half"
        grid
        className="opacity-50"
      />

      <div className="container relative z-10 px-4 md:px-8">
        <SocialProofHeader />
        <CompanyLogos />
        <StatsGrid />
      </div>
    </section>
  );
}
