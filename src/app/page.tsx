import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/link-button";
import TrustedBy from "@/components/sections/TrustedBy";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import OurProjects from "@/components/sections/OurProjects";
import TeamSection from "@/components/sections/TeamSection";
import HiringBanner from "@/components/sections/HiringBanner";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
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
          <div className="flex flex-col items-center text-center max-w-[932px] mx-auto px-4">
            <h1
              className="text-[72px] font-[500] leading-normal text-[#FFF] mb-6"
              style={{ fontFamily: "Inter" }}
            >
              Building the Future of Digital Experiences
            </h1>
            <p
              className="text-[16px] font-[400] leading-[24px] text-[#FFF] mb-8 max-w-[540px]"
              style={{ fontFamily: "Inter" }}
            >
              We partner with visionary brands to architect, build, and scale
              world-class software solutions. From complex enterprise platforms
              to captivating mobile apps, we turn ambitious ideas into
              market-leading realities.
            </p>
            <div className="flex gap-4">
              <Button href="/start-project" variant="primary">
                Start a Project
              </Button>
              <Button href="/services" variant="secondary">
                Explore Our Services
              </Button>
            </div>
          </div>
        </main>
      </div>

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Our Projects Section */}
      <OurProjects />

      {/* Team Section */}
      <TeamSection />

      {/* Hiring Banner */}
      <HiringBanner />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
}
