import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/link-button";
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
import { featuredPostsQuery, featuredProjectsQuery, servicesQuery } from "../../sanity/lib/queries";
import { Post } from "@/types/blog";
import { Project } from "@/types/project";
import { Service } from "@/types/service";
import { transformPostToArticle, transformProjectToCard, transformServiceToCard } from "@/lib/sanity-helpers";

export const revalidate = 60;

export default async function Home() {
  const [featuredPosts, featuredProjects, sanityServices]: [Post[], Project[], Service[]] =
    await Promise.all([
      client.fetch(featuredPostsQuery),
      client.fetch(featuredProjectsQuery),
      client.fetch(servicesQuery),
    ]);
  const featuredArticles = featuredPosts.map(transformPostToArticle);
  const projectCards = featuredProjects.map(transformProjectToCard);
  const serviceCards = sanityServices.map(transformServiceToCard);

  return (
    <div className="min-h-screen bg-[#090C08]">
      {/* Hero Section with Background */}
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/image 59.png')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <main className="flex min-h-[calc(100vh-60px)] items-center justify-center">
          <div className="flex flex-col items-center text-center max-w-[400px] lg:max-w-[932px] mx-auto px-[20px] lg:px-4">
            {/* Heading - Mobile: 40px/700, Desktop: 72px/500 */}
            <h1
              className="text-[40px] font-[700] lg:text-[72px] lg:font-[500] leading-normal text-[#FFF] mb-6"
              style={{ fontFamily: "Inter" }}
            >
              Building the Future of Digital Experiences
            </h1>
            {/* Description - Mobile: 16px/400/24px, Desktop: same */}
            <p
              className="text-[16px] font-[400] leading-[24px] text-[#FFF] mb-8 max-w-[400px] lg:max-w-[540px]"
              style={{ fontFamily: "Inter" }}
            >
              we transform ideas into powerful apps, sleek designs, and intelligent software solutions. Whether it&apos;s mobile apps, AI-driven platforms, or enterprise-scale systems, we bring innovation to life with precision and creativity.
            </p>
            <div className="flex gap-4">
              <Button href="/contact" variant="primary">
                Get in touch
              </Button>
              <Button href="/services" variant="secondary">
                View More
              </Button>
            </div>
          </div>
        </main>
      </div>

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Our Projects Section */}
      <OurProjects projects={projectCards} />

      {/* Our Services Section */}
      <OurServices services={serviceCards} />

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Team Section */}
      <TeamSection />

      {/* Hiring Banner */}
      <HiringBanner />

      {/* Popular Articles Section */}
      <PopularArticles articles={featuredArticles} />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Booking Section */}
      <BookingSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
