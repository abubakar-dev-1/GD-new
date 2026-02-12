import { Post } from "@/types/blog";
import { Product } from "@/types/product";
import { Project } from "@/types/project";
import { Service } from "@/types/service";
import { urlFor } from "../../sanity/lib/image";

/**
 * Get a usable image URL from a Sanity image reference
 */
export function getImageUrl(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  source: any,
  width: number = 800,
  height: number = 600
): string {
  if (!source) return "/image 54.png";
  return urlFor(source).width(width).height(height).url();
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

/**
 * Transform Sanity Post to a simpler article shape for cards
 */
export function transformPostToArticle(post: Post) {
  return {
    id: post._id,
    title: post.title,
    description: post.excerpt,
    coverImage: post.coverImage
      ? urlFor(post.coverImage).width(800).height(600).url()
      : "/image 54.png",
    tags: post.categories?.map((cat) => cat.title) || [],
    readTime: `${post.readTime} Min Read`,
    link: `/blog/${post.slug.current}`,
  };
}

/**
 * Transform Sanity Post to the shape needed by DiscoverBlogs cards
 */
export function transformPostToBlogCard(post: Post) {
  return {
    id: post._id,
    title: post.title,
    description: post.excerpt,
    coverImage: post.coverImage
      ? urlFor(post.coverImage).width(800).height(500).url()
      : "/image 54.png",
    date: formatDate(post.publishedAt),
    link: `/blog/${post.slug.current}`,
  };
}

// ── Project Helpers ──

/**
 * Transform Sanity Project to the shape needed by listing cards
 * (ProjectsListing, OurProjects, RelatedProjects)
 */
export function transformProjectToCard(project: Project) {
  return {
    id: project._id,
    title: project.title,
    description: project.description,
    image: project.coverImage
      ? urlFor(project.coverImage).width(800).height(455).url()
      : "/portfolio/image 36.png",
    tags: project.tags || [],
    countryFlag: project.countryFlag,
    category: project.category,
    link: `/projects/${project.slug.current}`,
  };
}

/**
 * Transform Sanity Project to full detail page data
 */
export function transformProjectToDetail(project: Project) {
  const fallbackImage = "/portfolio/image 36.png";

  return {
    // Hero
    title: project.title,
    description: project.description,
    heroImages: project.heroImages?.length
      ? project.heroImages.map((img) => urlFor(img).width(1280).height(580).url())
      : [fallbackImage],
    tags: project.tags || [],
    countryFlag: project.countryFlag,

    // Introduction
    introHeading: project.introHeading || "Introduction",
    introDescription: project.introDescription || "",
    introImage: project.introImage
      ? urlFor(project.introImage).width(800).height(455).url()
      : fallbackImage,

    // Overview
    overviewDescription: project.overviewDescription || "",
    overviewImage: project.overviewImage
      ? urlFor(project.overviewImage).width(1280).height(450).url()
      : fallbackImage,

    // Challenge
    challengeTitle: project.challengeTitle || "",
    challengeDescription: project.challengeDescription || "",
    challengeImages: project.challengeImages?.length
      ? project.challengeImages.map((img) => urlFor(img).width(608).height(608).url())
      : [fallbackImage],

    // Meta
    category: project.category,
    _id: project._id,
  };
}

/**
 * Transform Sanity Project to RelatedProjects card shape
 */
export function transformProjectToRelated(project: Project) {
  return {
    title: project.title,
    description: project.description,
    image: project.coverImage
      ? urlFor(project.coverImage).width(775).height(484).url()
      : "/portfolio/image 36.png",
    link: `/projects/${project.slug.current}`,
  };
}

// ── Product Helpers ──

/**
 * Transform Sanity Product to the shape needed by FeaturedProducts cards
 */
export function transformProductToCard(product: Product) {
  return {
    id: product._id,
    title: product.title,
    tags: product.tags || [],
    description: product.description,
    image: product.coverImage
      ? urlFor(product.coverImage).width(1440).height(465).url()
      : "/hiretics landing page 1.png",
    mobileImage: product.mobileCoverImage
      ? urlFor(product.mobileCoverImage).width(400).height(500).url()
      : "/mobile_hiretics landing page 1.png",
    logo: product.logo
      ? urlFor(product.logo).width(200).height(150).url()
      : undefined,
    link: product.link,
  };
}

/**
 * Transform Sanity Product to full detail page data
 */
export function transformProductToDetail(product: Product) {
  const fallbackImage = "/image 54.png";

  return {
    // Hero
    title: product.title,
    description: product.description,
    image: product.coverImage
      ? urlFor(product.coverImage).width(1440).height(465).url()
      : fallbackImage,
    mobileImage: product.mobileCoverImage
      ? urlFor(product.mobileCoverImage).width(400).height(500).url()
      : fallbackImage,
    logo: product.logo
      ? urlFor(product.logo).width(200).height(150).url()
      : undefined,
    tags: product.tags || [],

    // Features
    featuresHeading: product.featuresHeading,
    featuresDescription: product.featuresDescription,
    features: product.features?.map((f) => ({
      icon: f.icon ? urlFor(f.icon).width(64).height(64).url() : undefined,
      title: f.title,
      description: f.description,
    })),

    // Showcase
    showcaseHeading: product.showcaseHeading,
    showcaseDescription: product.showcaseDescription,
    showcaseImages: product.showcaseImages?.map((img) =>
      urlFor(img).width(1440).height(744).url()
    ),
    showcaseVideoUrl: product.showcaseVideoUrl,

    // Highlights
    highlightsHeading: product.highlightsHeading,
    highlightsDescription: product.highlightsDescription,
    highlights: product.highlights?.map((h) => ({
      image: h.image ? urlFor(h.image).width(800).height(500).url() : fallbackImage,
      title: h.title,
      description: h.description,
    })),

    // Overview
    overviewHeading: product.overviewHeading,
    overviewDescription: product.overviewDescription,
    overviewImages: product.overviewImages?.map((img) =>
      urlFor(img).width(492).height(287).url()
    ),
    overviewCards: product.overviewCards?.map((c) => ({
      icon: c.icon ? urlFor(c.icon).width(64).height(64).url() : "/image 54.png",
      text: c.text,
    })),
  };
}

// ── Service Helpers ──

/**
 * Transform Sanity Service to the shape needed by OurServices grid cards
 */
export function transformServiceToCard(service: Service) {
  return {
    id: service._id,
    slug: service.slug.current,
    title: service.title,
    description: service.description,
    image: service.coverImage
      ? urlFor(service.coverImage).width(800).height(600).url()
      : "/services/image 52.png",
    mobileImage: service.mobileCoverImage
      ? urlFor(service.mobileCoverImage).width(400).height(280).url()
      : "/services/mobile_image 52.png",
    icon: service.icon
      ? urlFor(service.icon).width(48).height(48).url()
      : null,
  };
}

/**
 * Transform Sanity Service to full detail page data
 */
export function transformServiceToDetail(service: Service) {
  const fallbackDesktop = "/services/image 52.png";
  const fallbackMobile = "/services/mobile_image 52.png";

  return {
    // Hero
    heroTitle: service.heroTitle || service.title,
    heroDescription: service.heroDescription || service.description,
    heroImage: service.heroImage
      ? urlFor(service.heroImage).width(1440).height(600).url()
      : fallbackDesktop,
    mobileHeroImage: service.mobileHeroImage
      ? urlFor(service.mobileHeroImage).width(400).height(500).url()
      : fallbackMobile,

    // Process
    processHeading: service.processHeading || `Process for ${service.title}`,
    processDescription:
      service.processDescription ||
      "We are a collective of strategists, creatives, and engineers united by a passion for building brands that matter.",
    processSteps: service.processSteps || [],
  };
}
