import { useTranslations } from "next-intl";
import { INTEGRATIONS } from "../constants";
import { IntegrationCard } from "./IntegrationCard";

export function IntegrationsGrid() {
  const t = useTranslations("integrations");

  return (
    <div
      className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 sm:gap-4"
      role="list"
      aria-label={t("listLabel")}
    >
      {INTEGRATIONS.map((integration, index) => (
        <IntegrationCard
          key={integration.name}
          integration={integration}
          index={index}
        />
      ))}
    </div>
  );
}
