import { Suspense } from "react";
import { notFound } from "next/navigation";
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
import {
  featuredPostsQuery,
  projectBySlugQuery,
  relatedProjectsQuery,
  projectSlugsQuery,
} from "../../../../sanity/lib/queries";
import { Post } from "@/types/blog";
import { Project } from "@/types/project";
import {
  transformPostToArticle,
  transformProjectToDetail,
  transformProjectToRelated,
} from "@/lib/sanity-helpers";
import {
  SkeletonProjectDetailBody,
  SkeletonRelatedProjectsSection,
  SkeletonArticlesSection,
} from "@/components/ui/Skeleton";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(projectSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

async function ProjectContent({ slug }: { slug: string }) {
  const project: Project | null = await client.fetch(projectBySlugQuery, { slug });

  if (!project) {
    notFound();
  }

  const detail = transformProjectToDetail(project);

  // Fetch related projects by same category
  const relatedRaw: Project[] = await client.fetch(relatedProjectsQuery, {
    projectId: project._id,
    category: project.category,
  });
  const relatedProjects = relatedRaw.map(transformProjectToRelated);

  return (
    <>
      <ProjectDetailHero
        title={detail.title}
        description={detail.description}
        images={detail.heroImages}
        tags={detail.tags}
        countryFlag={detail.countryFlag}
      />
      {detail.introDescription && (
        <ProjectIntroduction
          heading={detail.introHeading}
          description={detail.introDescription}
          image={detail.introImage}
        />
      )}
      {detail.overviewDescription && (
        <ProjectOverview
          description={detail.overviewDescription}
          image={detail.overviewImage}
        />
      )}
      {detail.challengeTitle && (
        <ProjectChallenges
          title={detail.challengeTitle}
          description={detail.challengeDescription}
          images={detail.challengeImages}
        />
      )}
      {relatedProjects.length > 0 && (
        <RelatedProjects projects={relatedProjects} />
      )}
    </>
  );
}

async function ArticlesSection() {
  const featuredPosts: Post[] = await client.fetch(featuredPostsQuery);
  const featuredArticles = featuredPosts.map(transformPostToArticle);
  return <PopularArticles articles={featuredArticles} />;
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-[#000000]">
      <Navbar />
      <Suspense fallback={<SkeletonProjectDetailBody />}>
        <ProjectContent slug={slug} />
      </Suspense>
      <Suspense fallback={<SkeletonArticlesSection />}>
        <ArticlesSection />
      </Suspense>
      <BookingSection />
      <Footer />
    </div>
  );
}
