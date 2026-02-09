import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostContent from "@/components/blog/BlogPostContent";
import PopularArticles from "@/components/sections/PopularArticles";
import { client } from "../../../../sanity/lib/client";
import {
  postBySlugQuery,
  postSlugsQuery,
  relatedPostsQuery,
  featuredPostsQuery,
} from "../../../../sanity/lib/queries";
import { Post } from "@/types/blog";
import {
  getImageUrl,
  formatDate,
  transformPostToArticle,
} from "@/lib/sanity-helpers";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(postSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  // First fetch the current post
  const post: Post | null = await client.fetch(postBySlugQuery, { slug });

  if (!post) {
    notFound();
  }

  // Get raw category reference IDs for the related posts query
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const categoryIds: string[] = (post as any).categoryRefs || [];

  // Fetch related posts by shared categories, fallback to featured if none found
  let relatedPosts: Post[] = [];
  if (categoryIds.length > 0) {
    relatedPosts = await client.fetch(relatedPostsQuery, {
      postId: post._id,
      categoryIds,
    });
  }

  // Fallback to featured posts if no category-based related posts found
  if (relatedPosts.length === 0) {
    const featuredPosts: Post[] = await client.fetch(featuredPostsQuery);
    relatedPosts = featuredPosts.filter((p) => p._id !== post._id);
  }

  const headerProps = {
    tags: post.categories?.map((cat) => cat.title) || [],
    readTime: `${post.readTime} Min Read`,
    title: post.title,
    coverImage: getImageUrl(post.coverImage, 1440, 810),
    date: formatDate(post.publishedAt),
  };

  const relatedArticles = relatedPosts.map(transformPostToArticle);

  return (
    <div className="min-h-screen bg-[#090C08]">
      <Navbar />
      <BlogPostHeader {...headerProps} />
      <BlogPostContent body={post.body} />
      <PopularArticles title="Related Articles" articles={relatedArticles} />
      <Footer />
    </div>
  );
}
