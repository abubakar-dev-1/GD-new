import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import PopularArticles from "@/components/sections/PopularArticles";
import DiscoverBlogs from "@/components/blog/DiscoverBlogs";
import { client } from "../../../sanity/lib/client";
import { featuredPostsQuery, postsQuery } from "../../../sanity/lib/queries";
import { Post } from "@/types/blog";
import { transformPostToArticle, transformPostToBlogCard } from "@/lib/sanity-helpers";

export const revalidate = 60;

export default async function BlogPage() {
  const [featuredPosts, allPosts]: [Post[], Post[]] = await Promise.all([
    client.fetch(featuredPostsQuery),
    client.fetch(postsQuery),
  ]);

  const featuredArticles = featuredPosts.map(transformPostToArticle);
  const blogCards = allPosts.map(transformPostToBlogCard);

  return (
    <div className="min-h-screen bg-[#090C08]">
      <Navbar />
      <BlogHeroSection />
      <PopularArticles articles={featuredArticles} />
      <DiscoverBlogs posts={blogCards} />
      <Footer />
    </div>
  );
}
