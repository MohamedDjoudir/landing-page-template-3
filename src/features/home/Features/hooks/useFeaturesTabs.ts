import { useEffect, useState } from "react";
import { DEFAULT_FEATURE_ID } from "../constants";

export function useFeaturesTabs() {
  const [activeTab, setActiveTab] = useState(DEFAULT_FEATURE_ID);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return { activeTab, setActiveTab, mounted };
}
