import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";
import ProjectIntroduction from "@/components/projects/ProjectIntroduction";
import ProjectOverview from "@/components/projects/ProjectOverview";
import ProjectChallenges from "@/components/projects/ProjectChallenges";
import RelatedProjects from "@/components/projects/RelatedProjects";
import PopularArticles from "@/components/sections/PopularArticles";
import BookingSection from "@/components/home/BookingSection";
import { client } from "../../../../sanity/lib/client";
import { featuredPostsQuery } from "../../../../sanity/lib/queries";
import { Post } from "@/types/blog";
import { transformPostToArticle } from "@/lib/sanity-helpers";

export const revalidate = 60;

export default async function ProjectDetailPage() {
  const featuredPosts: Post[] = await client.fetch(featuredPostsQuery);
  const featuredArticles = featuredPosts.map(transformPostToArticle);

  return (
    <div className="min-h-screen bg-[#090C08]">
      <Navbar />
      <ProjectDetailHero />
      <ProjectIntroduction />
      <ProjectOverview />
      <ProjectChallenges />
      <RelatedProjects />
      <PopularArticles articles={featuredArticles} />
      <BookingSection />
      <Footer />
    </div>
  );
}
