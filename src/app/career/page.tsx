import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CareerHeroSection from "@/components/career/CareerHeroSection";

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-[#090C08]">
      <Navbar />

      <CareerHeroSection />

      <Footer />
    </div>
  );
}
