import { setRequestLocale } from "next-intl/server";
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

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

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
