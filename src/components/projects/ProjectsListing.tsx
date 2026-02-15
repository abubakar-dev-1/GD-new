"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  countryFlag?: string;
  category: string;
  link: string;
}

const categories = [
  "App dev",
  "Web Dev",
  "UI/UX",
  "Chat Bot",
  "AI Dev",
  "DevOps",
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.link}
      className="flex flex-col justify-center lg:justify-start px-[16px] py-[20px] lg:p-[24px] gap-[16px] lg:gap-[24px] rounded-[28px] bg-[#191919] overflow-hidden self-stretch"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Project Image */}
      <div
        className="relative w-full rounded-[16px] lg:rounded-[20px] overflow-hidden bg-[#2a2a2a] flex-shrink-0"
        style={{ aspectRatio: "146/83" }}
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

      {/* Project Title */}
      <h3 className="text-[#FFFFFF] text-[24px] lg:text-[32px] font-medium leading-[28px] lg:leading-[38px]">
        {project.title}
      </h3>

      {/* Project Description */}
      <p className="text-[#FFFFFF] text-[16px] font-normal leading-[24px] line-clamp-2 lg:line-clamp-3">
        {project.description}
      </p>

      {/* Bottom Row: Tags + Flag + Button */}
      <div className="flex flex-wrap items-center justify-between gap-[16px]">
        {/* Tags and Flag */}
        <div className="flex flex-wrap items-center gap-[6px] lg:gap-[8px]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-[12px] py-[4px] rounded-[16px] bg-[#444444] text-[#FFFFFF] text-[12px] lg:text-[13px] font-normal leading-[18px] lg:leading-[20px]"
              style={{
                boxShadow:
                  "0 8px 8px -4px rgba(0, 0, 0, 0.02), 0 4px 4px -2px rgba(0, 0, 0, 0.03)",
              }}
            >
              {tag}
            </span>
          ))}
          {project.countryFlag && (
            <div className="w-[24px] h-[24px] rounded-full overflow-hidden bg-[#333] flex items-center justify-center">
              <span className="text-[14px]">{project.countryFlag}</span>
            </div>
          )}
        </div>

        {/* View Case Study Button */}
        <span
          className="flex items-center h-[40px] lg:h-[44px] gap-[12px] px-[16px] lg:pl-[24px] lg:pr-[32px] py-[6px] lg:py-[8px] rounded-[40px] bg-[#FFFFFF] hover:bg-gray-100 transition-colors"
        >
          <span className="w-[8px] h-[8px] rounded-full bg-[#000000]" />
          <span className="text-[#000000] text-[12px] lg:text-[14px] font-medium leading-[16px]">
            View Case Study
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function ProjectsListing({
  projects = [],
}: {
  projects?: Project[];
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? projects.filter((p) => p.category === activeCategory)
    : projects;

  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "var(--global-bg)" }}
    >
      <div
        className="flex flex-col items-start w-full max-w-[1440px] gap-[21px]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {/* Header */}
        <div className="flex flex-col items-start gap-[16px] w-full">
          {/* Title */}
          <h2 className="text-[#FFFFFF] text-[40px] lg:text-[64px] font-[700] lg:font-[600] leading-normal lg:leading-[58px]">
            Our Projects
          </h2>

          {/* Description */}
          <p
            className="text-[#D2D2D2] text-[16px] font-[400] leading-[24px] max-w-[400px]"
            style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}
          >
            The Drew! Hall of Fame: Featuring brands from around the world and
            projects of all shapes and sizes.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-[8px]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(
                    activeCategory === category ? null : category
                  )
                }
                className={`flex items-center gap-[8px] px-[16px] py-[8px] rounded-[40px] text-[14px] font-[500] leading-[16px] transition-colors ${
                  activeCategory === category
                    ? "bg-[#D0FF71] text-[#000]"
                    : "bg-transparent text-[#FFF] border border-[#444]"
                }`}
              >
                {activeCategory === category && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {category}
                {activeCategory === category && (
                  <span className="w-[8px] h-[8px] rounded-full bg-[#22C55E]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] lg:gap-[24px] w-full">
          {filtered.length > 0 ? (
            filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="text-[#D2D2D2] text-[16px] col-span-2">
              No projects found. Check back soon!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
