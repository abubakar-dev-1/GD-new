import { Suspense } from "react";
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
import { SkeletonServicesSection } from "@/components/ui/Skeleton";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Services",
  description:
    "From custom software and mobile apps to AI platforms and enterprise systems — explore the services Gamma Developers offers to bring your product to life.",
  alternates: { canonical: "/services" },
};

async function ServicesSection() {
  const sanityServices: Service[] = await client.fetch(servicesQuery);
  const serviceCards = sanityServices.map(transformServiceToCard);
  return <OurServices services={serviceCards} />;
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#090C08]">
      <Navbar />
      <ServicesHeroSection />
      <Suspense fallback={<SkeletonServicesSection />}>
        <ServicesSection />
      </Suspense>
      <Testimonials />
      <BookingSection />
      <Footer />
    </div>
  );
}
