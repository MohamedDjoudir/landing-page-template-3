import type { Integration } from "../types";

const logo = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

export const INTEGRATIONS: Integration[] = [
  { name: "Slack", category: "communication", logo: logo("slack") },
  { name: "GitHub", category: "development", logo: logo("github") },
  { name: "Notion", category: "productivity", logo: logo("notion") },
  { name: "Google", category: "workspace", logo: logo("google") },
  { name: "Figma", category: "design", logo: logo("figma") },
  { name: "Salesforce", category: "crm", logo: logo("salesforce") },
  { name: "Zapier", category: "automation", logo: logo("zapier") },
  { name: "Stripe", category: "payments", logo: logo("stripe") },
  { name: "Hubspot", category: "marketing", logo: logo("hubspot") },
  { name: "Zoom", category: "meetings", logo: logo("zoom") },
  { name: "Jira", category: "projectManagement", logo: logo("jira") },
  { name: "Zendesk", category: "support", logo: logo("zendesk") },
];
