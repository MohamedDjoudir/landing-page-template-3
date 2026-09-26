import { Zap, Users, Shield, BarChart3 } from "lucide-react";
import type { Feature } from "../types";

export const FEATURES: Feature[] = [
  { id: "analytics", icon: BarChart3, image: "/images/hero1.webp" },
  {
    id: "automation",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "collaboration",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "security",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
  },
];

export const DEFAULT_FEATURE_ID = "analytics";
export const VISIBLE_BENEFITS = 3;
