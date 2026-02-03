"use client";

import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  countryFlag?: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Luxyury Watch Boutiques",
    description:
      "We crafted a bespoke e-commerce platform for a premier luxury watch retailer, integrating immersive 3D product viewers, a personalized clienteling system, and a secure, high-volume transaction engine to elevate the digital shopping experience.",
    image: "/portfolio/image 36.png",
    tags: ["Design", "Website", "UI/UX"],
    countryFlag: "/flags/canada.svg",
    link: "/projects/luxury-watch",
  },
  {
    id: "2",
    title: "Nova",
    description:
      "Nova is a proprietary data analytics suite designed to transform raw information into actionable business intelligence. We developed its powerful dashboard, predictive modeling capabilities, and real-time reporting to empower data-driven decision-making for our enterprise clients.",
    image: "/portfolio/image 31.png",
    tags: ["Design", "Website", "UI/UX"],
    countryFlag: "/flags/canada.svg",
    link: "/projects/nova",
  },
  {
    id: "3",
    title: "Nova",
    description:
      "Nova is a proprietary data analytics suite designed to transform raw information into actionable business intelligence. We developed its powerful dashboard, predictive modeling capabilities, and real-time reporting to empower data-driven decision-making for our enterprise clients.",
    image: "/portfolio/image 31.png",
    tags: ["Design", "Website", "UI/UX"],
    countryFlag: "/flags/canada.svg",
    link: "/projects/nova",
  },
  {
    id: "4",
    title: "Luxyury Watch Boutiques",
    description:
      "We crafted a bespoke e-commerce platform for a premier luxury watch retailer, integrating immersive 3D product viewers, a personalized clienteling system, and a secure, high-volume transaction engine to elevate the digital shopping experience.",
    image: "/portfolio/image 36.png",
    tags: ["Design", "Website", "UI/UX"],
    countryFlag: "/flags/canada.svg",
    link: "/projects/luxury-watch",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="flex flex-col p-[24px] gap-[24px] rounded-[28px] bg-[#2D2D2D] flex-1"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Project Image - height: 327px, border-radius: 20px, aspect-ratio: 146/83 */}
      <div
        className="relative w-full rounded-[20px] overflow-hidden bg-[#2a2a2a]"
        style={{ height: "327px", aspectRatio: "146/83" }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[#666] text-sm">
            Project Image
          </div>
        )}
      </div>

      {/* Project Title - Inter, 32px, weight 500, line-height 38px */}
      <h3 className="text-[#FFFFFF] text-[32px] font-medium leading-[38px]">
        {project.title}
      </h3>

      {/* Project Description - Inter, 16px, weight 400, line-height 24px */}
      <p className="text-[#FFFFFF] text-[16px] font-normal leading-[24px]">
        {project.description}
      </p>

      {/* Bottom Row: Tags + Flag + Button */}
      <div className="flex items-center justify-between mt-auto">
        {/* Tags and Flag */}
        <div className="flex items-center gap-[8px]">
          {/* Tags - padding: 4px 12px, border-radius: 16px, background: #444444 */}
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-[12px] py-[4px] rounded-[16px] bg-[#444444] text-[#FFFFFF] text-[13px] font-normal leading-[20px]"
              style={{
                boxShadow: "0 8px 8px -4px rgba(0, 0, 0, 0.02)",
              }}
            >
              {tag}
            </span>
          ))}
          {project.countryFlag && (
            <div className="w-[24px] h-[24px] rounded-full overflow-hidden bg-[#333] flex items-center justify-center">
              <span className="text-[14px]">🇨🇦</span>
            </div>
          )}
        </div>

        {/* View Case Study Button - height: 44px, padding: 8px 32px 8px 24px, border-radius: 40px, background: #FFF */}
        <Link
          href={project.link}
          className="flex items-center h-[44px] gap-[12px] pl-[24px] pr-[32px] py-[8px] rounded-[40px] bg-[#FFFFFF] hover:bg-gray-100 transition-colors"
        >
          <span className="w-[8px] h-[8px] rounded-full bg-[#000000]" />
          <span className="text-[#000000] text-[14px] font-medium leading-[16px]">
            View Case Study
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function OurProjects() {
  return (
    <section className="w-full flex justify-center py-[80px] px-[10px]" style={{ backgroundColor: "var(--global-bg)" }}>
      <div
        className="flex flex-col items-center w-full max-w-[1440px] gap-[21px]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {/* Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-[1280px] gap-[24px]">
          {/* Left: Title and Description */}
          <div className="flex flex-col gap-[16px]">
            <h2 className="text-[#FFFFFF] text-[48px] md:text-[64px] font-semibold leading-[58px]">
              Our Projects
            </h2>
            <p
              className="text-[#D2D2D2] text-[16px] font-normal leading-[24px] max-w-[400px]"
              style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}
            >
              Discover the stories behind some of our most successful and
              innovative digital experiences.
            </p>
          </div>

          {/* Right: View All Projects Button */}
          <Link
            href="/projects"
            className="flex items-center h-[44px] gap-[12px] pl-[24px] pr-[32px] py-[8px] rounded-[40px] border border-[#444] bg-transparent hover:bg-[#222] transition-colors"
          >
            <span className="text-white text-[14px] font-medium leading-[16px]">
              View All Projects
            </span>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full max-w-[1280px]">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
