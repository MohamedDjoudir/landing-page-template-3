import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export function useStepsCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
    });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = () => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    const scrollTo = (index: number) => emblaApi?.scrollTo(index);

    return {
        emblaRef,
        selectedIndex,
        scrollTo,
    };
}
