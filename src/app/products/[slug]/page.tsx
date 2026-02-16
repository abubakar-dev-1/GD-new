import { Suspense } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingSection from "@/components/home/BookingSection";
import ProductDetailHero from "@/components/products/ProductDetailHero";
import ProductFeatures from "@/components/products/ProductFeatures";
import ProductShowcase from "@/components/products/ProductShowcase";
import ProductHighlights from "@/components/products/ProductHighlights";
import ProductOverview from "@/components/products/ProductOverview";
import TestimonialsWrapper from "@/components/sections/TestimonialsWrapper";
import PopularArticles from "@/components/sections/PopularArticles";
import { client } from "../../../../sanity/lib/client";
import {
  productBySlugQuery,
  productSlugsQuery,
  featuredPostsQuery,
} from "../../../../sanity/lib/queries";
import { Product } from "@/types/product";
import { Post } from "@/types/blog";
import {
  transformProductToDetail,
  transformPostToArticle,
} from "@/lib/sanity-helpers";
import type { Feature } from "@/components/products/ProductFeatures";
import type { Highlight } from "@/components/products/ProductHighlights";
import type { OverviewCard } from "@/components/products/ProductOverview";
import {
  SkeletonProductDetailBody,
  SkeletonArticlesSection,
} from "@/components/ui/Skeleton";

export const revalidate = 60;

interface ProductFallback {
  title: string;
  description: string;
  image: string;
  mobileImage: string;
  logo?: string;
  tags: string[];
  featuresHeading?: string;
  featuresDescription?: string;
  features?: Feature[];
  showcaseHeading?: string;
  showcaseDescription?: string;
  showcaseImages?: string[];
  showcaseVideoUrl?: string;
  highlightsHeading?: string;
  highlightsDescription?: string;
  highlights?: Highlight[];
  overviewHeading?: string;
  overviewDescription?: string;
  overviewImages?: string[];
  overviewCards?: OverviewCard[];
}

// Hardcoded fallback data per slug (used when no Sanity data exists yet)
const fallbackData: Record<string, ProductFallback> = {
  hiretics: {
    title: "Hiretics",
    description:
      "Our AI-powered platform automates resume screening with 99.7% accuracy, empowering your team to focus on what truly matters: interviewing the best talent.",
    image: "/products/hiretics-hero.png",
    mobileImage: "/products/hiretics-hero-mobile.png",
    tags: ["Windows"],
    featuresHeading: "Platform Features",
    featuresDescription:
      "Hiretics is packed with features designed for both recruiters and job seekers. Here's what makes the platform stand out.",
    features: [
      {
        icon: "/products/hiretics-feature-1.svg",
        title: "AI-Powered Screening",
        description:
          "Used by some of the world's largest companies, enables you to create.",
      },
      {
        icon: "/products/hiretics-feature-2.svg",
        title: "Intelligent Candidate Ranking",
        description:
          "Used by some of the world's largest companies, enables you to create.",
      },
      {
        icon: "/products/hiretics-feature-3.svg",
        title: "Customizable Skill Matching",
        description:
          "Used by some of the world's largest companies, enables you to create.",
      },
      {
        icon: "/products/hiretics-feature-4.svg",
        title: "Actionable Analytics",
        description:
          "Used by some of the world's largest companies, enables you to create.",
      },
    ],
    showcaseHeading: "Redefining Recruitment",
    showcaseDescription:
      "Our client aimed to capture the thriving mobile card game market with an app that felt both authentic and innovative. The core challenge was to create a highly polished, scalable, and engaging multiplayer experience that would appeal to a global audience while respecting the traditions of the beloved card game.",
    showcaseImages: ["/products/hiretics-showcase.png"],
    overviewHeading: "Product overview",
    overviewDescription:
      "We are a collective of strategists, creatives, and engineers united by a passion for building brands that matter.",
    overviewCards: [
      {
        icon: "/products/hiretics-overview-icon-1.svg",
        text: "Build the ideal candidate profile. Set custom weights for specific skills, education, and years of experience to ensure the AI ranks candidates based on what matters most for any given role.",
      },
      {
        icon: "/products/hiretics-overview-icon-2.svg",
        text: "Build the ideal candidate profile. Set custom weights for specific skills, education, and years of experience to ensure the AI ranks candidates based on what matters most for any given role.",
      },
      {
        icon: "/products/hiretics-overview-icon-3.svg",
        text: "Build the ideal candidate profile. Set custom weights for specific skills, education, and years of experience to ensure the AI ranks candidates based on what matters most for any given role.",
      },
      {
        icon: "/products/hiretics-overview-icon-4.svg",
        text: "Build the ideal candidate profile. Set custom weights for specific skills, education, and years of experience to ensure the AI ranks candidates based on what matters most for any given role.",
      },
    ],
    highlightsHeading: "An Intelligence-Driven Workflow",
    highlightsDescription:
      "Experience the classic card game, reimagined for the digital age. Taash Royale blends timeless strategy with a sleek, modern interface, competitive online multiplayer, and a rewarding progression system. Challenge players worldwide, climb the leaderboards, and become a card master.",
    highlights: [
      {
        image: "/products/hiretics-highlight-1.png",
        title: "Daily Bonuses & Progressive Rewards",
        description:
          "We developed Taash Royale from the ground up, focusing on three pillars: an intuitive user interface, a rock-solid technical architecture, and a compelling player progression system. We designed a clean, user-friendly UI that was easy for new players to learn, yet provided all the information and strategic depth that veteran players demand.",
      },
      {
        image: "/products/hiretics-highlight-2.png",
        title: "Daily Bonuses & Progressive Rewards",
        description:
          "We developed Taash Royale from the ground up, focusing on three pillars: an intuitive user interface, a rock-solid technical architecture, and a compelling player progression system. We designed a clean, user-friendly UI that was easy for new players to learn, yet provided all the information and strategic depth that veteran players demand.",
      },
    ],
  },
  "taash-royale": {
    title: "Taash Royale",
    description:
      "Experience the classic card game, reimagined for the digital age. Taash Royale blends timeless strategy with a sleek, modern interface, competitive online multiplayer, and a rewarding progression system. Challenge players worldwide, climb the leaderboards, and become a card master.",
    image: "/image.png",
    mobileImage: "/mobile_image.png",
    logo: "/image 99.png",
    tags: ["Android", "IOS", "Windows"],
    featuresHeading: "Game Features",
    featuresDescription:
      "Taash Royale is packed with features designed for both casual players and competitive pros. Here's what makes the game stand out.",
    showcaseHeading: "Redefining a Classic",
    showcaseDescription:
      "Our client aimed to capture the thriving mobile card game market with an app that felt both authentic and innovative. The core challenge was to create a highly polished, scalable, and engaging multiplayer experience that would appeal to a global audience while respecting the traditions of the beloved card game.",
    showcaseImages: [
      "/products/showcase-1.png",
      "/products/showcase-2.png",
      "/products/showcase-3.png",
    ],
    overviewHeading: "Product Overview",
    overviewDescription:
      "We are a collective of strategists, creatives, and engineers united by a passion for building brands that matter.",
    overviewImages: [
      "/products/overview-1.png",
      "/products/overview-2.png",
      "/products/overview-3.png",
    ],
    highlightsHeading: "A User-Centric Approach",
    highlightsDescription:
      "Experience the classic card game, reimagined for the digital age. Taash Royale blends timeless strategy with a sleek, modern interface, competitive online multiplayer, and a rewarding progression system.",
    highlights: [
      {
        image: "/products/highlight-1.png",
        title: "Daily Bonuses & Progressive Rewards",
        description:
          "We developed Taash Royale from the ground up, focusing on three pillars: an intuitive user interface, a rock-solid technical architecture, and a compelling player progression system. We designed a clean, user-friendly UI that was easy for new players to learn, yet provided all the information and strategic depth that veteran players demand.",
      },
      {
        image: "/products/highlight-2.png",
        title: "Competitive Multiplayer Experience",
        description:
          "The real-time multiplayer engine was built to handle thousands of concurrent matches with minimal latency. We implemented a sophisticated matchmaking algorithm that pairs players of similar skill levels, ensuring every game feels competitive and fair.",
      },
    ],
  },
};

// Static params from Sanity + fallback slugs
const fallbackSlugs = Object.keys(fallbackData);

export async function generateStaticParams() {
  const sanitySlugs: string[] = await client.fetch(productSlugsQuery);
  const allSlugs = [...new Set([...sanitySlugs, ...fallbackSlugs])];
  return allSlugs.map((slug) => ({ slug }));
}

async function ProductContent({ slug }: { slug: string }) {
  const sanityProduct: Product | null = await client.fetch(productBySlugQuery, { slug });

  if (sanityProduct) {
    const d = transformProductToDetail(sanityProduct);
    return (
      <>
        <ProductDetailHero
          title={d.title}
          description={d.description}
          image={d.image}
          mobileImage={d.mobileImage}
          logo={d.logo}
          tags={d.tags}
        />
        <ProductFeatures
          heading={d.featuresHeading}
          description={d.featuresDescription}
          features={d.features}
        />
        <ProductShowcase
          heading={d.showcaseHeading}
          description={d.showcaseDescription}
          images={d.showcaseImages}
          videoUrl={d.showcaseVideoUrl}
        />
        <ProductHighlights
          heading={d.highlightsHeading}
          description={d.highlightsDescription}
          highlights={d.highlights}
        />
        <ProductOverview
          heading={d.overviewHeading}
          description={d.overviewDescription}
          images={d.overviewImages}
          cards={d.overviewCards}
        />
      </>
    );
  }

  const fb = fallbackData[slug];
  if (!fb) notFound();

  return (
    <>
      <ProductDetailHero
        title={fb.title}
        description={fb.description}
        image={fb.image}
        mobileImage={fb.mobileImage}
        logo={fb.logo}
        tags={fb.tags}
      />
      <ProductFeatures
        heading={fb.featuresHeading}
        description={fb.featuresDescription}
        features={fb.features}
      />
      <ProductShowcase
        heading={fb.showcaseHeading}
        description={fb.showcaseDescription}
        images={fb.showcaseImages}
        videoUrl={fb.showcaseVideoUrl}
      />
      <ProductHighlights
        heading={fb.highlightsHeading}
        description={fb.highlightsDescription}
        highlights={fb.highlights}
      />
      <ProductOverview
        heading={fb.overviewHeading}
        description={fb.overviewDescription}
        images={fb.overviewImages}
        cards={fb.overviewCards}
      />
    </>
  );
}

async function ArticlesSection() {
  const featuredPosts: Post[] = await client.fetch(featuredPostsQuery);
  const featuredArticles = featuredPosts.map(transformPostToArticle);
  return <PopularArticles articles={featuredArticles} />;
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-[#000000]">
      <Navbar />
      <Suspense fallback={<SkeletonProductDetailBody />}>
        <ProductContent slug={slug} />
      </Suspense>
      <BookingSection />
      <TestimonialsWrapper />
      <Suspense fallback={<SkeletonArticlesSection />}>
        <ArticlesSection />
      </Suspense>
      <Footer />
    </div>
  );
}
