import { useTranslations } from "next-intl";
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { FEATURES } from "../constants";
import { FeatureDescription } from "./FeatureDescription";
import { FeatureImage } from "./FeatureImage";

interface FeatureContentProps {
  mounted: boolean;
}

export function FeatureContent({ mounted }: FeatureContentProps) {
  const t = useTranslations("features.items");

  return (
    <div className={cn("relative", mounted && "min-h-[400px]")}>
      {FEATURES.map((feature) => (
        <TabsContent
          key={feature.id}
          value={feature.id}
          className="focus-visible:outline-none focus-visible:ring-0 scroll-mt-20 absolute top-0 start-0 w-full transition-opacity"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <FeatureDescription feature={feature} />
            <FeatureImage
              src={feature.image}
              alt={t(`${feature.id}.title`)}
              className="hidden md:block"
              glowClassName="blur-lg"
            />
          </div>
        </TabsContent>
      ))}
    </div>
  );
}
