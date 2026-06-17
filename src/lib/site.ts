/**
 * Central site configuration used for SEO metadata, sitemap and robots.
 * Override the production URL with the NEXT_PUBLIC_SITE_URL env var.
 */
export const siteConfig = {
  name: "Gamma Developers",
  shortName: "GD",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.gammadevelopers.com",
  description:
    "Gamma Developers (GD) is a digital product agency. We transform ideas into powerful apps, sleek designs, and intelligent software — from mobile apps and AI-driven platforms to enterprise-scale systems.",
  ogImage: "/images/image 59.png",
} as const;
