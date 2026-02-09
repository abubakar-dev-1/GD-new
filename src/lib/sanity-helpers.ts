import { Post } from "@/types/blog";
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
