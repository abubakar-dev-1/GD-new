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

  const [post, relatedPosts]: [Post | null, Post[]] = await Promise.all([
    client.fetch(postBySlugQuery, { slug }),
    client.fetch(featuredPostsQuery),
  ]);

  if (!post) {
    notFound();
  }

  const headerProps = {
    tags: post.categories?.map((cat) => cat.title) || [],
    readTime: `${post.readTime} Min Read`,
    title: post.title,
    coverImage: getImageUrl(post.coverImage, 1440, 810),
    date: formatDate(post.publishedAt),
  };

  const relatedArticles = relatedPosts
    .filter((p) => p._id !== post._id)
    .map(transformPostToArticle);

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
