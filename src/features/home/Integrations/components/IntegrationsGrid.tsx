"use client";

import { integrationsConfig } from "../config/integrations.config";
import { IntegrationCard } from "./IntegrationCard";

export function IntegrationsGrid() {
  return (
    <div
      className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 sm:gap-4"
      role="list"
      aria-label="Available integrations"
    >
      {integrationsConfig.integrations.map((integration, index) => (
        <IntegrationCard key={index} integration={integration} index={index} />
      ))}
    </div>
  );
}
