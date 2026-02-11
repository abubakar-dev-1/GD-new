import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import OurServices from "@/components/sections/OurServices";
import Testimonials from "@/components/sections/Testimonials";
import BookingSection from "@/components/home/BookingSection";
import { client } from "../../../sanity/lib/client";
import { servicesQuery } from "../../../sanity/lib/queries";
import { Service } from "@/types/service";
import { transformServiceToCard } from "@/lib/sanity-helpers";

export const revalidate = 60;

export default async function ServicesPage() {
  const sanityServices: Service[] = await client.fetch(servicesQuery);
  const serviceCards = sanityServices.map(transformServiceToCard);

  return (
    <div className="min-h-screen bg-[#090C08]">
      <Navbar />
      <ServicesHeroSection />
      <OurServices services={serviceCards} />
      <Testimonials />
      <BookingSection />
      <Footer />
    </div>
  );
}
