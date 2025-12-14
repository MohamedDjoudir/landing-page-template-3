// Site configuration
export const siteConfig = {
    name: "Nova",
    description: "Transform how you work with our AI-powered platform. Automate workflows, gain insights, and boost productivity.",
    url: "https://nova.example.com",

    // Navigation links
    navLinks: [
        { label: "Pricing", href: "#pricing" },
        { label: "Testimonials", href: "#testimonials" },
    ],

    // Product dropdown items
    productItems: [
        "Analytics",
        "Automation",
        "Collaboration",
        "Security",
    ],

    // Solutions dropdown items
    solutionItems: [
        "For Startups",
        "For Enterprise",
        "For Teams",
        "For Developers",
    ],

    // Footer links
    footerLinks: {
        product: [
            { label: "Features", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Integrations", href: "#" },
            { label: "Roadmap", href: "#" },
            { label: "Changelog", href: "#" },
        ],
        company: [
            { label: "About", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Customers", href: "#" },
            { label: "Contact", href: "#" },
        ],
        resources: [
            { label: "Documentation", href: "#" },
            { label: "Help Center", href: "#" },
            { label: "API Reference", href: "#" },
            { label: "Community", href: "#" },
            { label: "Status", href: "#" },
        ],
        legal: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Cookie Policy", href: "#" },
        ],
    },

    // Social links
    socialLinks: [
        { name: "Twitter", href: "#" },
        { name: "Facebook", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "LinkedIn", href: "#" },
        { name: "GitHub", href: "#" },
    ],
}

export type SiteConfig = typeof siteConfig
