import type { Plan } from "../types";

export const PLANS: Plan[] = [
  { id: "starter", monthlyPrice: 39, annualPrice: 29, popular: false },
  { id: "professional", monthlyPrice: 99, annualPrice: 79, popular: true },
  { id: "enterprise", monthlyPrice: 199, annualPrice: 149, popular: false },
];
