import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/contact/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a project in mind? Get in touch with Gamma Developers to discuss your goals and how we can partner to build a product that delivers real impact.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#090C08]">
      {/* Hero Section with Background */}
      <div
        className="bg-cover bg-center bg-no-repeat min-h-screen"
        style={{
          backgroundImage: "url('/images/image 59.png')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Navbar />

        {/* Contact Section */}
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
