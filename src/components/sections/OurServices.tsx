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

interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  mobileImage: string;
  icon: React.ReactNode | string | null;
}

const defaultServices: ServiceItem[] = [
  {
    id: "1",
    slug: "software-development",
    title: "Software Development",
    description:
      "Architecting robust, scalable, and secure software solutions tailored to your unique business challenges.",
    image: "/services/image 52.png",
    mobileImage: "/services/mobile_image 52.png",
    icon: <CodeIcon />,
  },
  {
    id: "2",
    slug: "chat-bot-development",
    title: "Chat Bot Development",
    description:
      "Creating intelligent, conversational AI chatbots that enhance customer engagement, automate support, and drive sales 24/7.",
    image: "/services/image 51(5).png",
    mobileImage: "/services/mobile_image 51(3).png",
    icon: "/services/Frame.svg",
  },
  {
    id: "3",
    slug: "ai-development",
    title: "AI Dev",
    description:
      "Leveraging the power of Artificial Intelligence and Machine Learning to unlock predictive insights, automate complex processes.",
    image: "/services/image 51(4).png",
    mobileImage: "/services/mobile_image 51(4).png",
    icon: "/services/Frame(1).svg",
  },
  {
    id: "4",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Building beautiful, high-performance native and cross-platform mobile applications for iOS and Android.",
    image: "/services/image 51(2).png",
    mobileImage: "/services/mobile_image 51(2).png",
    icon: "/services/Frame(2).svg",
  },
  {
    id: "5",
    slug: "web-development",
    title: "Web Dev",
    description:
      "Developing responsive, fast, and feature-rich web applications and websites that serve as the digital cornerstone of your brand.",
    image: "/services/image 51(1).png",
    mobileImage: "/services/mobile_image 51(1).png",
    icon: "/services/Frame(3).svg",
  },
  {
    id: "6",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Crafting intuitive and visually stunning user interfaces and experiences that prioritize usability and drive engagement.",
    image: "/services/image 51(3).png",
    mobileImage: "/services/mobile_image 51.png",
    icon: "/services/iconoir_design-nib-solid.svg",
  },
  {
    id: "7",
    slug: "devops",
    title: "DevOps",
    description:
      "Streamlining your development lifecycle with our DevOps expertise, ensuring rapid, reliable, and continuous delivery of your software.",
    image: "/services/image 51.png",
    mobileImage: "/services/mobile_image 51.png",
    icon: "/services/Frame(4).svg",
  },
];

/**
 * Generates a dynamic CSS Grid layout that repeats for any number of services.
 *
 * Pattern per 7-item cycle (6-column grid):
 *   Row 1: 2 wide cards (3 cols each)
 *   Row 2: 2 regular cards (2 cols) + 1 tall card (2 cols, spans 2 rows)
 *   Row 3: 2 regular cards (2 cols) + tall card continues
 *
 * Remainders fill gracefully:
 *   1 → full width | 2 → 2 half | 3 → 3 equal
 *   4 → 2 rows of 2 half | 5 → 2 half + 3 equal | 6 → 2 rows of 3 equal
 */
function generateGridLayout(count: number) {
  const CYCLE = 7;
  const fullCycles = Math.floor(count / CYCLE);
  const remainder = count % CYCLE;

  const areas: string[] = [];
  const rowHeights: string[] = [];
  const cardAreas: string[] = [];

  for (let c = 0; c < fullCycles; c++) {
    const b = c * CYCLE;
    const s = (i: number) => `s${b + i}`;

    areas.push(
      `"${s(0)} ${s(0)} ${s(0)} ${s(1)} ${s(1)} ${s(1)}"`,
      `"${s(2)} ${s(2)} ${s(3)} ${s(3)} ${s(6)} ${s(6)}"`,
      `"${s(4)} ${s(4)} ${s(5)} ${s(5)} ${s(6)} ${s(6)}"`
    );
    rowHeights.push("302px", "302px", "302px");
    for (let i = 0; i < 7; i++) cardAreas.push(s(i));
  }

  const b = fullCycles * CYCLE;
  const s = (i: number) => `s${b + i}`;

  if (remainder === 1) {
    areas.push(`"${s(0)} ${s(0)} ${s(0)} ${s(0)} ${s(0)} ${s(0)}"`);
    rowHeights.push("302px");
    cardAreas.push(s(0));
  } else if (remainder === 2) {
    areas.push(`"${s(0)} ${s(0)} ${s(0)} ${s(1)} ${s(1)} ${s(1)}"`);
    rowHeights.push("302px");
    cardAreas.push(s(0), s(1));
  } else if (remainder === 3) {
    areas.push(`"${s(0)} ${s(0)} ${s(1)} ${s(1)} ${s(2)} ${s(2)}"`);
    rowHeights.push("302px");
    cardAreas.push(s(0), s(1), s(2));
  } else if (remainder === 4) {
    areas.push(
      `"${s(0)} ${s(0)} ${s(0)} ${s(1)} ${s(1)} ${s(1)}"`,
      `"${s(2)} ${s(2)} ${s(2)} ${s(3)} ${s(3)} ${s(3)}"`
    );
    rowHeights.push("302px", "302px");
    cardAreas.push(s(0), s(1), s(2), s(3));
  } else if (remainder === 5) {
    areas.push(
      `"${s(0)} ${s(0)} ${s(0)} ${s(1)} ${s(1)} ${s(1)}"`,
      `"${s(2)} ${s(2)} ${s(3)} ${s(3)} ${s(4)} ${s(4)}"`
    );
    rowHeights.push("302px", "302px");
    cardAreas.push(s(0), s(1), s(2), s(3), s(4));
  } else if (remainder === 6) {
    areas.push(
      `"${s(0)} ${s(0)} ${s(1)} ${s(1)} ${s(2)} ${s(2)}"`,
      `"${s(3)} ${s(3)} ${s(4)} ${s(4)} ${s(5)} ${s(5)}"`
    );
    rowHeights.push("302px", "302px");
    cardAreas.push(s(0), s(1), s(2), s(3), s(4), s(5));
  }

  return {
    gridTemplateAreas: areas.join(" "),
    gridTemplateRows: rowHeights.join(" "),
    cardAreas,
  };
}

/** Index 1 in each 7-cycle gets content at top for visual variety */
function getContentPosition(index: number): "top" | "bottom" {
  return index % 7 === 1 ? "top" : "bottom";
}

function ServiceIcon({ icon }: { icon: React.ReactNode | string | null }) {
  if (!icon) return null;
  if (typeof icon === "string") {
    return <Image src={icon} alt="" width={24} height={24} />;
  }
  return <>{icon}</>;
}

function ServiceCard({
  service,
  gridArea,
  contentPosition,
}: {
  service: ServiceItem;
  gridArea: string;
  contentPosition: "top" | "bottom";
}) {
  const isContentAtBottom = contentPosition === "bottom";

  return (
    <Link href={`/services/${service.slug}`} style={{ gridArea }}>
    <ImageCard
      image={service.image}
      alt={service.title}
      gradientDirection="vertical"
      className="h-full"
    >
      <div
        className={`flex flex-col items-start p-[20px] lg:p-[32px] gap-[16px] h-full self-stretch justify-end ${
          isContentAtBottom ? "" : "lg:justify-start"
        }`}
        style={{ flex: "1 0 0" }}
      >
        {/* Icon */}
        <div className="w-[40px] h-[40px] rounded-[8px] bg-[#191919]/60 backdrop-blur-sm flex items-center justify-center">
          <ServiceIcon icon={service.icon} />
        </div>

        {/* Title and Description */}
        <div className="flex flex-col items-start gap-[8px] lg:gap-[16px] self-stretch">
          <h3 className="text-[#FFF] text-[24px] lg:text-[20px] font-medium lg:font-semibold leading-[28px] lg:leading-[24px]">
            {service.title}
          </h3>
          <p className="text-[#ADADAD] text-[16px] lg:text-[14px] font-normal leading-[24px] lg:leading-[20px]">
            <span className="lg:hidden">Performance & Personalisation</span>
            <span className="hidden lg:inline">{service.description}</span>
          </p>
        </div>
      </div>
    </ImageCard>
    </Link>
  );
}

export default function OurServices({ services }: { services?: ServiceItem[] }) {
  const items = services && services.length > 0 ? services : defaultServices;
  const layout = generateGridLayout(items.length);

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
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-[16px] w-full">
          <div className="flex flex-col gap-[8px]">
            <h2
              className="text-[#FFFFFF] text-[40px] lg:text-[48px] font-[700] lg:font-normal leading-normal lg:leading-[58px]"
              style={{ fontFamily: "Microsoft Sans Serif, Inter, sans-serif" }}
            >
              Our Services
            </h2>
            <p className="text-[#FFF] lg:text-[#ADADAD] text-[16px] font-normal leading-[24px] max-w-[500px]">
              From foundational strategy to flawless execution, this is how we
              engineer excellence.
            </p>
          </div>

          <Link
            href="/services"
            className="flex items-center h-[40px] lg:h-[44px] gap-[12px] px-[16px] lg:px-[24px] py-[8px] rounded-[40px] border border-[#F3F4F6] lg:border-[#333] hover:border-[#D0FF71] transition-colors"
          >
            <span className="text-[#FFF] text-[14px] font-medium">
              View Services
            </span>
          </Link>
        </div>

        {/* Services Grid - Mobile */}
        <div className="grid grid-cols-1 gap-[16px] w-full lg:hidden">
          {items.map((service) => (
            <Link key={service.id} href={`/services/${service.slug}`} className="h-[280px]">
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
                  <div className="w-[48px] h-[48px] rounded-[8px] bg-[#65783F] flex items-center justify-center">
                    <ServiceIcon icon={service.icon} />
                  </div>

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
            </Link>
          ))}
        </div>

        {/* Desktop Grid - Dynamic repeating pattern */}
        <div
          className="hidden lg:grid w-full gap-[16px]"
          style={{
            gridTemplateColumns: "repeat(6, 1fr)",
            gridTemplateRows: layout.gridTemplateRows,
            gridTemplateAreas: layout.gridTemplateAreas,
          }}
        >
          {items.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              gridArea={layout.cardAreas[index]}
              contentPosition={getContentPosition(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
