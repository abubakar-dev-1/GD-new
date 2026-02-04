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
  mobileImage: string;
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
    mobileImage: "/services/mobile_image 52.png",
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
    mobileImage: "/services/mobile_image 51(3).png",
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
    mobileImage: "/services/mobile_image 51(4).png",
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
    mobileImage: "/services/mobile_image 51(2).png",
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
    mobileImage: "/services/mobile_image 51(1).png",
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
    mobileImage: "/services/mobile_image 51.png",
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
    mobileImage: "/services/mobile_image 51.png",
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
      {/* Mobile: p-20px gap-16px justify-end always, Desktop: p-32px gap-16px conditional */}
      <div
        className={`flex flex-col items-start p-[20px] lg:p-[32px] gap-[16px] h-full self-stretch justify-end ${
          isContentAtBottom ? "" : "lg:justify-start"
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
        <div className="flex flex-col items-start gap-[8px] lg:gap-[16px] self-stretch">
          {/* Mobile: 24px/500/28px, Desktop: 20px/600/24px */}
          <h3 className="text-[#FFF] text-[24px] lg:text-[20px] font-medium lg:font-semibold leading-[28px] lg:leading-[24px]">
            {service.title}
          </h3>
          {/* Mobile: short subtitle, Desktop: full description */}
          <p className="text-[#ADADAD] text-[16px] lg:text-[14px] font-normal leading-[24px] lg:leading-[20px]">
            <span className="lg:hidden">Performance & Personalisation</span>
            <span className="hidden lg:inline">{service.description}</span>
          </p>
        </div>
      </div>
    </ImageCard>
  );
}

export default function OurServices() {
  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.58) 100%)",
        backgroundColor: "var(--global-bg)",
      }}
    >
      <div className="flex flex-col items-start w-full max-w-[1440px] gap-[21px]">
        {/* Header - Mobile: stacked, Desktop: row */}
        <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-[16px] w-full">
          <div className="flex flex-col gap-[8px]">
            {/* Title - Mobile: 40px/700/normal, Desktop: 48px/400/58px */}
            <h2
              className="text-[#FFFFFF] text-[40px] lg:text-[48px] font-[700] lg:font-normal leading-normal lg:leading-[58px]"
              style={{ fontFamily: "Microsoft Sans Serif, Inter, sans-serif" }}
            >
              Our Services
            </h2>
            {/* Description - Mobile: 16px/400/24px #FFF, Desktop: #ADADAD */}
            <p className="text-[#FFF] lg:text-[#ADADAD] text-[16px] font-normal leading-[24px] max-w-[500px]">
              From foundational strategy to flawless execution, this is how we
              engineer excellence.
            </p>
          </div>

          {/* View Services Button - Mobile: h-40px py-8px px-16px border-#F3F4F6, Desktop: h-44px px-24px border-#333 */}
          <Link
            href="/services"
            className="flex items-center h-[40px] lg:h-[44px] gap-[12px] px-[16px] lg:px-[24px] py-[8px] rounded-[40px] border border-[#F3F4F6] lg:border-[#333] hover:border-[#D0FF71] transition-colors"
          >
            <span className="text-[#FFF] text-[14px] font-medium">
              View Services
            </span>
          </Link>
        </div>

        {/* Services Grid - Mobile: single column, Desktop: complex grid */}
        <div className="grid grid-cols-1 gap-[16px] w-full lg:hidden">
          {services.map((service) => (
            <div key={service.id} className="h-[280px]">
              <ImageCard
                image={service.mobileImage}
                alt={service.title}
                gradientDirection="vertical"
                className="h-full"
              >
                <div
                  className="flex flex-col items-start p-[20px] gap-[16px] h-full self-stretch justify-end"
                  style={{ flex: "1 0 0" }}
                >
                  {/* Icon - Mobile: 48x48 with #65783F background */}
                  <div className="w-[48px] h-[48px] rounded-[8px] bg-[#65783F] flex items-center justify-center">
                    {typeof service.icon === "string" ? (
                      <Image src={service.icon} alt="" width={24} height={24} />
                    ) : (
                      service.icon
                    )}
                  </div>

                  {/* Title and Description */}
                  <div className="flex flex-col items-start gap-[8px] self-stretch">
                    <h3 className="text-[#FFF] text-[24px] font-medium leading-[28px]">
                      {service.title}
                    </h3>
                    <p className="text-[#ADADAD] text-[16px] font-normal leading-[24px]">
                      Performance & Personalisation
                    </p>
                  </div>
                </div>
              </ImageCard>
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div
          className="hidden lg:grid w-full gap-[16px]"
          style={{
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
