import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import OurServices from "@/components/sections/OurServices";
import Testimonials from "@/components/sections/Testimonials";
import BookingSection from "@/components/home/BookingSection";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#090C08]">
      <Navbar />
      <ServicesHeroSection />
      <OurServices />
      <Testimonials />
      <BookingSection />
      <Footer />
    </div>
  );
}
