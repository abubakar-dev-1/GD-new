import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsHeroSection from "@/components/projects/ProjectsHeroSection";
import ProjectsListing from "@/components/projects/ProjectsListing";
import OurProcess from "@/components/about/OurProcess";
import TrustedBy from "@/components/sections/TrustedBy";
import Testimonials from "@/components/sections/Testimonials";
import BookingSection from "@/components/home/BookingSection";

const processSteps = [
  {
    number: "01",
    title: "Design & Discovery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet.",
    icon: "/iconoir_design-nib-solid.svg",
  },
  {
    number: "02",
    title: "Develop & Build",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet.",
    icon: "/brackets.svg",
  },
  {
    number: "03",
    title: "Launch & Grow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet.",
    icon: "/Frame_rocket.svg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#090C08]">
      <Navbar />
      <ProjectsHeroSection />
      <ProjectsListing />
      <TrustedBy />
      <Testimonials />
      <OurProcess steps={processSteps} />
      <BookingSection />
      <Footer />
    </div>
  );
}
