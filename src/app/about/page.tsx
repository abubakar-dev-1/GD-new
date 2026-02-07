import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import TrustedBy from "@/components/sections/TrustedBy";
import OurValues from "@/components/about/OurValues";
import TeamSection from "@/components/sections/TeamSection";
import HiringBanner from "@/components/sections/HiringBanner";
import BookingSection from "@/components/home/BookingSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#090C08]">
      <Navbar />

      <AboutHeroSection />
      <TrustedBy />
      <OurValues />
      <TeamSection />
      <HiringBanner />
      <BookingSection />

      <Footer />
    </div>
  );
}
