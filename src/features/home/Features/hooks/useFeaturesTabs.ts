import { useState } from "react";
import { DEFAULT_FEATURE_ID } from "../constants";

export function useFeaturesTabs() {
  const [activeTab, setActiveTab] = useState(DEFAULT_FEATURE_ID);
  return { activeTab, setActiveTab };
}
