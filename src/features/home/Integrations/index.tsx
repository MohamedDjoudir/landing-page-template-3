"use client";

import {
  IntegrationsBackground,
  IntegrationsHeader,
  IntegrationsGrid,
  IntegrationsFooter,
} from "./components";

export default function Integrations() {
  return (
    <section
      className="py-12 sm:py-16 md:py-24 bg-black relative overflow-hidden"
      aria-labelledby="integrations-heading"
    >
      <IntegrationsBackground />

      <div className="container mx-auto px-4 relative z-10">
        <IntegrationsHeader />
        <IntegrationsGrid />
        <IntegrationsFooter />
      </div>
    </section>
  );
}
