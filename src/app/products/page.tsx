import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Testimonials from "@/components/sections/Testimonials";
import BookingSection from "@/components/home/BookingSection";
import { client } from "../../../sanity/lib/client";
import { productsQuery } from "../../../sanity/lib/queries";
import { Product } from "@/types/product";
import { transformProductToCard } from "@/lib/sanity-helpers";
import { SkeletonProductsSection } from "@/components/ui/Skeleton";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the products built by Gamma Developers — from AI-powered platforms to mobile games. See what we ship and how it can work for you.",
  alternates: { canonical: "/products" },
};

async function ProductsSection() {
  const products: Product[] = await client.fetch(productsQuery);
  const productCards = products.map(transformProductToCard);
  return <FeaturedProducts products={productCards} />;
}

export default function ProductsPage() {
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
        <main className="flex min-h-[calc(60vh-60px)] items-center justify-center">
          <div className="flex flex-col items-center text-center max-w-[400px] lg:max-w-[932px] mx-auto px-[20px] lg:px-4 py-[60px] lg:py-[100px]">
            <h1
              className="text-[40px] font-[700] lg:text-[72px] lg:font-[500] leading-normal text-[#FFF] mb-6"
              style={{ fontFamily: "Inter" }}
            >
              Our Products
            </h1>
            <p
              className="text-[16px] font-[400] leading-[24px] text-[#FFF] mb-2 max-w-[400px] lg:max-w-[540px]"
              style={{ fontFamily: "Inter" }}
            >
              The platforms, apps, and experiences we&apos;ve built — crafted with the
              same precision and creativity we bring to every client engagement.
            </p>
          </div>
        </main>
      </div>

      {/* Products Listing */}
      <Suspense fallback={<SkeletonProductsSection />}>
        <ProductsSection />
      </Suspense>

      {/* Testimonials */}
      <Testimonials />

      {/* Booking Section */}
      <BookingSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
