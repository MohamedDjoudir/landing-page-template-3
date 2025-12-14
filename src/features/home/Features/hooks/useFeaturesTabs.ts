import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function useFeaturesTabs() {
    const [activeTab, setActiveTab] = useState("analytics");
    const isMobile = useIsMobile();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleTabChange = (value: string) => {
        setActiveTab(value);

        if (isMobile && mounted) {
            setTimeout(() => {
                const element = document.getElementById(`${value}-content`);
                if (element) {
                    const yOffset = -80;
                    const y =
                        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            }, 100);
        }
    };

    const contentStyle = {
        minHeight: mounted ? "400px" : "auto",
    };

    return {
        activeTab,
        handleTabChange,
        contentStyle,
        mounted,
    };
}
