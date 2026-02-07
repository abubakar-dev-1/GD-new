import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import TrustedBy from "@/components/sections/TrustedBy";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#090C08]">
      <Navbar />

      <AboutHeroSection />
      <TrustedBy />

      <Footer />
    </div>
  );
}
