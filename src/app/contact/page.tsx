import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/contact/ContactSection";

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
