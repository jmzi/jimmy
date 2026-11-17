export type Service = {
  slug: string;
  icon: "wordpress" | "redesign" | "maintenance" | "landing" | "speed" | "automation";
  title: string;
  summary: string;
  includes: string[];
  problem: string;
  expect: string;
};

export const SERVICES: Service[] = [
  {
    slug: "wordpress-development",
    icon: "wordpress",
    title: "WordPress Website Development",
    summary: "A custom WordPress site built around your business, using Elementor or Divi.",
    includes: [
      "Custom WordPress build using Elementor or Divi",
      "Responsive layout for desktop, tablet, and mobile",
      "Core pages (home, services, about, contact, etc.)",
      "Basic on-page SEO setup",
    ],
    problem:
      "You need a professional website but don't want to deal with the technical setup, hosting, or page-builder learning curve yourself.",
    expect:
      "A fully functional, responsive WordPress site built around your content and branding, ready to launch and easy to update afterward.",
  },
  {
    slug: "redesign-customization",
    icon: "redesign",
    title: "Website Redesign & Customization",
    summary: "Modernize an outdated site without starting from scratch.",
    includes: [
      "Review of your current site's layout, content, and structure",
      "Visual refresh and improved navigation",
      "Content and layout updates",
      "Fixes for broken or outdated sections",
    ],
    problem:
      "Your current site looks dated, is hard to navigate, or no longer reflects what your business actually offers.",
    expect:
      "A refreshed site that keeps what's already working and improves what isn't — not a full, costly rebuild.",
  },
  {
    slug: "maintenance-support",
    icon: "maintenance",
    title: "Website Maintenance & Support",
    summary: "Ongoing care so your site keeps running smoothly after launch.",
    includes: [
      "Regular plugin, theme, and core updates",
      "Backups and basic security checks",
      "Troubleshooting errors and broken pages",
      "Content and layout changes as needed",
    ],
    problem:
      "You don't have the time — or the technical background — to keep your website updated, secure, and working properly.",
    expect:
      "A reliable point of contact for your website, so small issues get caught and fixed before they become big ones.",
  },
  {
    slug: "landing-pages",
    icon: "landing",
    title: "Landing Page Development",
    summary: "A focused page built to convert traffic from a specific campaign.",
    includes: [
      "Single-purpose landing page design and build",
      "Copy layout aligned to one clear call to action",
      "Mobile-optimized, fast-loading build",
      "Form or booking integration",
    ],
    problem:
      "You need a focused page to convert traffic from ads, email, or social — not a full multi-page website.",
    expect:
      "A fast, clean, conversion-focused page built around a single goal: getting visitors to take action.",
  },
  {
    slug: "optimization",
    icon: "speed",
    title: "Website Optimization",
    summary: "Make an existing site faster, cleaner, and more mobile-friendly.",
    includes: [
      "Performance review of your current site",
      "Cleanup of unnecessary plugins and bloated code",
      "Image and asset optimization",
      "Mobile responsiveness fixes",
    ],
    problem:
      "Your site loads slowly, feels clunky, or doesn't display well on phones and tablets.",
    expect:
      "A faster, smoother site that's more pleasant for visitors to use and performs better in search results.",
  },
  {
    slug: "crm-automation",
    icon: "automation",
    title: "CRM & Business Automation",
    summary: "Connect your website to a CRM so leads don't fall through the cracks.",
    includes: [
      "CRM setup and configuration (e.g. Salesmate)",
      "Website form and email integrations",
      "Lead follow-up workflow automation",
      "Basic process automation for repetitive tasks",
    ],
    problem:
      "Leads come in through your website but your follow-up process is manual, inconsistent, or scattered across tools.",
    expect:
      "A connected system where leads flow automatically from your website into your CRM, with follow-up handled consistently.",
  },
];
