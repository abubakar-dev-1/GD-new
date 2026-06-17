//homepage.tsx
import { Suspense } from "react";
import Footer from "@/components/layout/Footer";
import AiHero from "@/components/sections/AiHero";
import TrustedBy from "@/components/sections/TrustedBy";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import OurServices from "@/components/sections/OurServices";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import OurProjects from "@/components/sections/OurProjects";
import TeamSection from "@/components/sections/TeamSection";
import HiringBanner from "@/components/sections/HiringBanner";
import Testimonials from "@/components/sections/Testimonials";
import PopularArticles from "@/components/sections/PopularArticles";
import BookingSection from "@/components/home/BookingSection";
import { client } from "../../sanity/lib/client";
import { featuredPostsQuery, featuredProjectsQuery, productsQuery, servicesQuery } from "../../sanity/lib/queries";
import { Post } from "@/types/blog";
import { Product } from "@/types/product";
import { Project } from "@/types/project";
import { Service } from "@/types/service";
import { transformPostToArticle, transformProductToCard, transformProjectToCard, transformServiceToCard } from "@/lib/sanity-helpers";
import {
  SkeletonProjectsSection,
  SkeletonServicesSection,
  SkeletonProductsSection,
  SkeletonArticlesSection,
} from "@/components/ui/Skeleton";

export const revalidate = 60;

async function ProjectsSection() {
  const projects: Project[] = await client.fetch(featuredProjectsQuery);
  const projectCards = projects.map(transformProjectToCard);
  return <OurProjects projects={projectCards} />;
}

async function ServicesSection() {
  const services: Service[] = await client.fetch(servicesQuery);
  const serviceCards = services.map(transformServiceToCard);
  return <OurServices services={serviceCards} />;
}

async function ProductsSection() {
  const products: Product[] = await client.fetch(productsQuery);
  const productCards = products.map(transformProductToCard);
  return <FeaturedProducts products={productCards} />;
}

async function ArticlesSection() {
  const posts: Post[] = await client.fetch(featuredPostsQuery);
  const articles = posts.map(transformPostToArticle);
  return <PopularArticles articles={articles} />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* AI-first hero — neural field, beams, glass, generative terminal */}
      <AiHero />

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Our Projects Section */}
      <Suspense fallback={<SkeletonProjectsSection />}>
        <ProjectsSection />
      </Suspense>

      {/* Our Services Section */}
      <Suspense fallback={<SkeletonServicesSection />}>
        <ServicesSection />
      </Suspense>

      {/* Featured Products Section */}
      <Suspense fallback={<SkeletonProductsSection />}>
        <ProductsSection />
      </Suspense>

      {/* Team Section */}
      <TeamSection />

      {/* Hiring Banner */}
      <HiringBanner />

      {/* Popular Articles Section */}
      <Suspense fallback={<SkeletonArticlesSection />}>
        <ArticlesSection />
      </Suspense>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Booking Section */}
      <BookingSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
