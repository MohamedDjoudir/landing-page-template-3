import {
  Hero,
  SocialProof,
  Features,
  HowItWorks,
  Testimonials,
  Pricing,
  Integrations,
  BlogPreview,
  Faq,
  Cta,
} from "@/features/home";

export default function Home() {
  return (
    <div className="min-h-screen bg-black px-0 sm:px-4 text-white">
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Features />
      <Integrations />
      <Testimonials />
      <BlogPreview />
      <Pricing />
      <Faq />
      <Cta />
    </div>
  );
}
