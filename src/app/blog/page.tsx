import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import PopularArticles from "@/components/sections/PopularArticles";
import DiscoverBlogs from "@/components/blog/DiscoverBlogs";
import { client } from "../../../sanity/lib/client";
import { featuredPostsQuery, postsQuery } from "../../../sanity/lib/queries";
import { Post } from "@/types/blog";
import { transformPostToArticle, transformPostToBlogCard } from "@/lib/sanity-helpers";
import { SkeletonArticlesSection, SkeletonBlogGridSection } from "@/components/ui/Skeleton";

export const revalidate = 60;

async function FeaturedArticlesSection() {
  const featuredPosts: Post[] = await client.fetch(featuredPostsQuery);
  const featuredArticles = featuredPosts.map(transformPostToArticle);
  return <PopularArticles articles={featuredArticles} />;
}

async function DiscoverBlogsSection() {
  const allPosts: Post[] = await client.fetch(postsQuery);
  const blogCards = allPosts.map(transformPostToBlogCard);
  return <DiscoverBlogs posts={blogCards} />;
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#090C08]">
      <Navbar />
      <BlogHeroSection />
      <Suspense fallback={<SkeletonArticlesSection />}>
        <FeaturedArticlesSection />
      </Suspense>
      <Suspense fallback={<SkeletonBlogGridSection />}>
        <DiscoverBlogsSection />
      </Suspense>
      <Footer />
    </div>
  );
}
