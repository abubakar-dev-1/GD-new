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

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.link}
      className="flex flex-col justify-center lg:justify-start px-[12px] min-[375px]:px-[16px] py-[16px] min-[375px]:py-[20px] lg:p-[24px] gap-[12px] min-[375px]:gap-[16px] lg:gap-[24px] rounded-[28px] bg-[#191919] overflow-hidden self-stretch"
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

      {/* Project Title - Mobile: 24px/500/28px, Desktop: 32px/500/38px */}
      <h3 className="text-[#FFFFFF] text-[20px] min-[375px]:text-[24px] lg:text-[32px] font-medium leading-[24px] min-[375px]:leading-[28px] lg:leading-[38px]">
        {project.title}
      </h3>

      {/* Project Description - Mobile: line-clamp-2, Desktop: line-clamp-3 */}
      <p className="text-[#FFFFFF] text-[16px] font-normal leading-[24px] line-clamp-2 lg:line-clamp-3">
        {project.description}
      </p>

      {/* Bottom Row: Tags + Flag + Button */}
      <div className="flex flex-wrap items-center justify-between gap-[16px]">
        {/* Tags and Flag - Mobile: gap-6px */}
        <div className="flex flex-wrap items-center gap-[6px] lg:gap-[8px]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-[12px] py-[4px] rounded-[16px] bg-[#444444] text-[#FFFFFF] text-[12px] lg:text-[13px] font-normal leading-[18px] lg:leading-[20px]"
              style={{
                boxShadow: "0 8px 8px -4px rgba(0, 0, 0, 0.02), 0 4px 4px -2px rgba(0, 0, 0, 0.03)",
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

        {/* Button - Mobile: h-40px, px-16px, py-6px */}
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

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Luxyury Watch Boutiques",
    description:
      "We crafted a bespoke e-commerce platform for a premier luxury watch retailer, integrating immersive 3D product viewers, a personalized clienteling system, and a secure, high-volume transaction engine to elevate the digital shopping experience.",
    image: "/images/projects/luxyury-watch.png",
    tags: ["Design", "Website", "UI/UX"],
    countryFlag: "🇨🇦",
    link: "/projects/luxyury-watch-boutiques",
  },
  {
    id: "2",
    title: "Nova",
    description:
      "Nova is a proprietary data analytics suite designed to transform raw information into actionable business intelligence. We developed its powerful dashboard, predictive modeling capabilities, and real-time reporting to empower data-driven decision-making for our enterprise clients.",
    image: "/images/projects/nova.png",
    tags: ["Design", "Website", "UI/UX"],
    countryFlag: "🇨🇦",
    link: "/projects/nova",
  },
  {
    id: "3",
    title: "Nova",
    description:
      "Nova is a proprietary data analytics suite designed to transform raw information into actionable business intelligence. We developed its powerful dashboard, predictive modeling capabilities, and real-time reporting to empower data-driven decision-making for our enterprise clients.",
    image: "/images/projects/nova.png",
    tags: ["Design", "Website", "UI/UX"],
    countryFlag: "🇨🇦",
    link: "/projects/nova",
  },
  {
    id: "4",
    title: "Luxyury Watch Boutiques",
    description:
      "We crafted a bespoke e-commerce platform for a premier luxury watch retailer, integrating immersive 3D product viewers, a personalized clienteling system, and a secure, high-volume transaction engine to elevate the digital shopping experience.",
    image: "/images/projects/luxyury-watch.png",
    tags: ["Design", "Website", "UI/UX"],
    countryFlag: "🇨🇦",
    link: "/projects/luxyury-watch-boutiques",
  },
];

export default function OurProjects({ projects = [] }: { projects?: Project[] }) {
  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "var(--global-bg)" }}
    >
      <div
        className="flex flex-col items-start w-full max-w-[1440px] gap-[21px]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {/* Header - Mobile: stacked, Desktop: row */}
        <div className="flex flex-col items-start gap-[16px] w-full">
          {/* Title - Mobile: 40px/700, Desktop: 64px/600 */}
          <h2 className="text-[#FFFFFF] text-[32px] min-[375px]:text-[40px] lg:text-[64px] font-[700] lg:font-[600] leading-normal lg:leading-[58px]">
            Our Projects
          </h2>

          {/* Description - Mobile: 16px/400/24px, width 388px */}
          <p
            className="text-[#D2D2D2] text-[16px] font-[400] leading-[24px] max-w-[388px] lg:max-w-[400px]"
            style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}
          >
            Discover the stories behind some of our most successful and
            innovative digital experiences.
          </p>

          {/* View Projects Button - Mobile: smaller padding */}
          <Link
            href="/projects"
            className="flex items-center h-[40px] lg:h-[44px] gap-[12px] px-[16px] lg:pl-[24px] lg:pr-[32px] py-[8px] rounded-[40px] border border-[#444] bg-transparent hover:bg-[#222] transition-colors"
          >
            <span className="text-white text-[14px] font-medium leading-[16px]">
              View Projects
            </span>
          </Link>
        </div>

        {/* Projects Grid - Mobile: 1 col, Desktop: 2 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] lg:gap-[24px] w-full">
          {(projects.length > 0 ? projects : defaultProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
