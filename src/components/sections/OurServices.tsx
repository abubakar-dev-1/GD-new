"use client";

import Image from "next/image";
import Link from "next/link";
import ImageCard from "@/components/ui/ImageCard";

// Only keeping CodeIcon as inline SVG since there's no file for it
const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 18L22 12L16 6" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 6L2 12L8 18" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode | string;
  gridArea: string;
  contentPosition: "top" | "bottom";
}

const services: Service[] = [
  {
    id: "1",
    title: "Software Development",
    description:
      "Architecting robust, scalable, and secure software solutions tailored to your unique business challenges.",
    image: "/services/image 52.png",
    icon: <CodeIcon />,
    gridArea: "software",
    contentPosition: "bottom",
  },
  {
    id: "2",
    title: "Chat Bot Development",
    description:
      "Creating intelligent, conversational AI chatbots that enhance customer engagement, automate support, and drive sales 24/7.",
    image: "/services/image 51(5).png",
    icon: "/services/Frame.svg",
    gridArea: "chatbot",
    contentPosition: "top",
  },
  {
    id: "3",
    title: "AI Dev",
    description:
      "Leveraging the power of Artificial Intelligence and Machine Learning to unlock predictive insights, automate complex processes.",
    image: "/services/image 51(4).png",
    icon: "/services/Frame(1).svg",
    gridArea: "ai",
    contentPosition: "bottom",
  },
  {
    id: "4",
    title: "Mobile App Development",
    description:
      "Building beautiful, high-performance native and cross-platform mobile applications for iOS and Android.",
    image: "/services/image 51(2).png",
    icon: "/services/Frame(2).svg",
    gridArea: "mobile",
    contentPosition: "bottom",
  },
  {
    id: "5",
    title: "Web Dev",
    description:
      "Developing responsive, fast, and feature-rich web applications and websites that serve as the digital cornerstone of your brand.",
    image: "/services/image 51(1).png",
    icon: "/services/Frame(3).svg",
    gridArea: "web",
    contentPosition: "bottom",
  },
  {
    id: "6",
    title: "UI/UX Design",
    description:
      "Crafting intuitive and visually stunning user interfaces and experiences that prioritize usability and drive engagement.",
    image: "/services/image 51(3).png",
    icon: "/services/iconoir_design-nib-solid.svg",
    gridArea: "uiux",
    contentPosition: "bottom",
  },
  {
    id: "7",
    title: "DevOps",
    description:
      "Streamlining your development lifecycle with our DevOps expertise, ensuring rapid, reliable, and continuous delivery of your software.",
    image: "/services/image 51.png",
    icon: "/services/Frame(4).svg",
    gridArea: "devops",
    contentPosition: "bottom",
  },
];

function ServiceCard({ service }: { service: Service }) {
  const isContentAtBottom = service.contentPosition === "bottom";

  return (
    <ImageCard
      image={service.image}
      alt={service.title}
      gradientDirection="vertical"
      className="h-full"
      style={{ gridArea: service.gridArea }}
    >
      <div
        className={`flex flex-col items-start p-[32px] gap-[16px] h-full self-stretch ${
          isContentAtBottom ? "justify-end" : ""
        }`}
        style={{ flex: "1 0 0" }}
      >
        {/* Icon */}
        <div className="w-[40px] h-[40px] rounded-[8px] bg-[#191919]/60 backdrop-blur-sm flex items-center justify-center">
          {typeof service.icon === "string" ? (
            <Image src={service.icon} alt="" width={24} height={24} />
          ) : (
            service.icon
          )}
        </div>

        {/* Title and Description */}
        <div className="flex flex-col items-start gap-[16px] self-stretch">
          <h3 className="text-[#FFF] text-[20px] font-semibold leading-[24px]">
            {service.title}
          </h3>
          <p className="text-[#ADADAD] text-[14px] font-normal leading-[20px]">
            {service.description}
          </p>
        </div>
      </div>
    </ImageCard>
  );
}

export default function OurServices() {
  return (
    <section
      className="w-full flex justify-center py-[80px] px-[10px]"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.58) 100%)",
        backgroundColor: "var(--global-bg)",
      }}
    >
      <div className="flex flex-col items-center w-full max-w-[1440px] px-[80px] gap-[21px]">
        {/* Header */}
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col gap-[8px]">
            <h2
              className="text-[#FFFFFF] text-[48px] font-normal leading-[58px]"
              style={{ fontFamily: "Microsoft Sans Serif, Inter, sans-serif" }}
            >
              Our Services
            </h2>
            <p className="text-[#ADADAD] text-[16px] font-normal leading-[24px] max-w-[500px]">
              From foundational strategy to flawless execution, this is how we
              engineer excellence.
            </p>
          </div>

          {/* View Services Button */}
          <Link
            href="/services"
            className="flex items-center h-[44px] gap-[12px] px-[24px] py-[8px] rounded-[40px] border border-[#333] hover:border-[#D0FF71] transition-colors"
          >
            <span className="text-[#FFF] text-[14px] font-medium">
              View Services
            </span>
          </Link>
        </div>

        {/* Services Grid */}
        <div
          className="w-full gap-[16px]"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gridTemplateRows: "302px 302px 302px",
            gridTemplateAreas: `
              "software software software chatbot chatbot chatbot"
              "ai ai mobile mobile devops devops"
              "web web uiux uiux devops devops"
            `,
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
