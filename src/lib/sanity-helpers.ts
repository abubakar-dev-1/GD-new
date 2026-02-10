import { Post } from "@/types/blog";
import { Project } from "@/types/project";
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
