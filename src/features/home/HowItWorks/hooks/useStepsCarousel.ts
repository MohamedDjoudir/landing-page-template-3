import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useTextDirection } from "@/hooks";

export function useStepsCarousel() {
  const { direction } = useTextDirection();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    direction,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return { emblaRef, selectedIndex, scrollTo };
}
