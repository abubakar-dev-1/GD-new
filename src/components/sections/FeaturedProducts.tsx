"use client";

import Image from "next/image";
import Link from "next/link";
import ImageCard from "@/components/ui/ImageCard";

interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  image: string;
  mobileImage: string;
  logo?: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Hiretics",
    tags: ["Design", "Website", "UI/UX"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    image: "/hiretics landing page 1.png",
    mobileImage: "/mobile_hiretics landing page 1.png",
    link: "/projects/hiretics",
  },
  {
    id: "2",
    title: "Taash Royale",
    tags: ["React native", "Game Dev", "UI/UX"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    image: "/image.png",
    mobileImage: "/mobile_image.png",
    logo: "/image 99.png",
    link: "/projects/taash-royale",
  },
];

function MobileProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="relative w-full rounded-[16px] overflow-hidden border border-[#333]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Background Image - using mobile-specific image */}
      <div className="absolute inset-0">
        <Image
          src={project.mobileImage}
          alt={project.title}
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Gradient Overlay - starts at 40% to show more image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(25, 25, 25, 0.00) 40%, #191919 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start px-[20px] pt-[24px] pb-[24px] gap-[12px]">
        {/* Spacer to show image at top */}
        <div className="h-[180px]" />

        <h3 className="text-white text-[32px] font-semibold leading-tight">
          {project.title}
        </h3>

        {/* Tags - filled background style */}
        <div className="flex flex-wrap gap-[8px]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-[12px] py-[6px] rounded-full bg-[#333333] text-[#FFFFFF] text-[14px] font-normal"
            >
              {tag}
            </span>
          ))}
        </div>

        <p
          className="text-[#FFFFFF] text-[14px] font-normal leading-[150%]"
          style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}
        >
          {project.description}
        </p>

        {/* Learn More Button */}
        <Link
          href={project.link}
          className="flex items-center h-[44px] gap-[12px] pl-[24px] pr-[32px] py-[8px] rounded-[40px] bg-[#D0FF71] hover:bg-[#c5f55e] transition-colors mt-[8px]"
        >
          <span className="w-[8px] h-[8px] rounded-full bg-[#000000]" />
          <span className="text-[#000000] text-[14px] font-medium leading-[16px] text-center">
            Learn More
          </span>
        </Link>
      </div>
    </div>
  );
}

function DesktopProjectCard({ project }: { project: Project }) {
  return (
    <ImageCard
      image={project.image}
      alt={project.title}
      gradientDirection="horizontal"
      showBorder
      className="w-full h-[465px]"
    >
      <div className="flex items-start justify-between h-full p-[48px]">
        {/* Left Side - Text Content */}
        <div className="flex flex-col items-start justify-between h-full gap-[24px]">
          <h3 className="text-white text-[40px] font-semibold leading-tight">
            {project.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-[8px]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-[12px] py-[6px] rounded-full border border-[#444] text-[#D2D2D2] text-[12px] font-medium bg-[#191919]/50 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <p
            className="text-[#FFFFFF] text-[18px] font-normal leading-[150%] max-w-[525px]"
            style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}
          >
            {project.description}
          </p>

          {/* Learn More Button */}
          <Link
            href={project.link}
            className="flex items-center h-[44px] gap-[12px] pl-[24px] pr-[32px] py-[8px] rounded-[40px] bg-[#D0FF71] hover:bg-[#c5f55e] transition-colors"
          >
            <span className="w-[8px] h-[8px] rounded-full bg-[#000000]" />
            <span className="text-[#000000] text-[14px] font-medium leading-[16px] text-center">
              Learn More
            </span>
          </Link>
        </div>

        {/* Right Side - Logo */}
        {project.logo && (
          <div className="flex items-center justify-center">
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              width={200}
              height={150}
              className="object-contain"
            />
          </div>
        )}
      </div>
    </ImageCard>
  );
}

export default function FeaturedProducts() {
  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "var(--global-bg)" }}
    >
      <div className="flex flex-col items-start w-full max-w-[1440px] gap-[10px]">
        {/* Header */}
        <div className="flex flex-col items-start w-full gap-[16px] mb-[40px]">
          {/* Title - Mobile: 40px/700/normal Inter, Desktop: 64px/400/58px */}
          <h2
            className="text-[#FFFFFF] text-[40px] lg:text-[64px] font-bold lg:font-normal leading-normal lg:leading-[58px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Featured Products
          </h2>
          {/* Description - 18px/400/150% Roboto */}
          <p
            className="text-[#FFFFFF] text-[18px] font-normal leading-[150%] max-w-[620px]"
            style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        {/* Mobile Project Cards */}
        <div className="flex flex-col items-start gap-[24px] w-full lg:hidden">
          {projects.map((project) => (
            <MobileProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Desktop Project Cards */}
        <div className="hidden lg:flex flex-col items-start gap-[32px] w-full">
          {projects.map((project) => (
            <DesktopProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
