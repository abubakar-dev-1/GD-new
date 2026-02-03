"use client";

import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  image: string;
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
    link: "/projects/hiretics",
  },
  {
    id: "2",
    title: "Taash Royale",
    tags: ["React native", "Game Dev", "UI/UX"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    image: "/image.png",
    logo: "/image 99.png",
    link: "/projects/taash-royale",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="relative w-full max-w-[1280px] h-auto lg:h-[465px] rounded-[16px] border border-[#333] overflow-hidden"
      style={{ fontFamily: "Inter" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]" />
        )}
      </div>

      {/* Gradient Overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(25, 25, 25, 0.95) 0%, rgba(25, 25, 25, 0.7) 50%, rgba(25, 25, 25, 0.3) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-start justify-between h-full p-[24px] md:p-[48px]">
        {/* Left Side - Text Content */}
        <div className="flex flex-col items-start justify-between h-full gap-[24px]">
          {/* Title */}
          <h3 className="text-white text-[32px] md:text-[40px] font-semibold leading-tight">
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

          {/* Description */}
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
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <span className="w-[8px] h-[8px] rounded-full bg-[#000000]" />
            <span className="text-[#000000] text-[14px] font-medium leading-[16px] text-center">
              Learn More
            </span>
          </Link>
        </div>

        {/* Right Side - Logo (if provided) */}
        {project.logo && (
          <div className="hidden lg:flex items-center justify-center">
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
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section className="w-full flex justify-center py-[80px] px-[10px]">
      <div
        className="flex flex-col items-center justify-center w-full max-w-[1420px] gap-[10px]"
        style={{ fontFamily: "Inter" }}
      >
        {/* Header */}
        <div className="flex flex-col items-start w-full max-w-[1280px] gap-[16px] mb-[40px]">
          <h2
            className="text-[#FFFFFF] text-[48px] md:text-[64px] font-normal leading-[58px]"
            style={{ fontFamily: "Microsoft Sans Serif, Inter, sans-serif" }}
          >
            Featured Products
          </h2>
          <p
            className="text-[#FFFFFF] text-[18px] font-normal leading-[150%] max-w-[620px]"
            style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col items-center gap-[32px] w-full">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
