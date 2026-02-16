"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface RelatedProject {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface RelatedProjectsProps {
  projects?: RelatedProject[];
}

const defaultProjects: RelatedProject[] = [
  {
    title: "Prestige",
    description:
      "we transform ideas into powerful apps, sleek designs, and intelligent software solutions",
    image: "/portfolio/image 36.png",
    link: "/projects/prestige",
  },
  {
    title: "Hiretics",
    description:
      "we transform ideas into powerful apps, sleek designs, and intelligent software solutions",
    image: "/hiretics landing page 1.png",
    link: "/projects/hiretics",
  },
  {
    title: "Nova",
    description:
      "we transform ideas into powerful apps, sleek designs, and intelligent software solutions",
    image: "/portfolio/image 31.png",
    link: "/projects/nova",
  },
];

function RelatedProjectCard({ project }: { project: RelatedProject }) {
  return (
    <Link href={project.link} className="block bg-[#191919] border border-[#444] rounded-[20px] lg:rounded-[30px] p-[6px] lg:p-[8px] overflow-hidden h-[360px] lg:h-[484px]">
      <div className="relative w-full h-full border border-[#444] rounded-[16px] lg:rounded-[28px] overflow-hidden">
        {/* Image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />

        {/* Gradient overlay + content */}
        <div
          className="absolute bottom-0 left-0 right-0 flex items-end p-[20px] lg:p-[32px] rounded-b-[16px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(25,25,25,0) 0%, #191919 80%)",
            height: "230px",
          }}
        >
          <div className="flex items-end justify-between w-full gap-[16px]">
            {/* Text */}
            <div className="flex flex-col gap-[8px] lg:gap-[16px] flex-1 min-w-0 max-w-[460px]">
              <h3 className="text-white text-[24px] lg:text-[32px] font-bold leading-[30px] lg:leading-[38px]">
                {project.title}
              </h3>
              <p className="text-white text-[14px] lg:text-[16px] font-normal leading-[22px] lg:leading-[24px] line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* View button */}
            <span
              className="flex items-center shrink-0 h-[40px] lg:h-[44px] gap-[12px] pl-[20px] pr-[24px] lg:pl-[24px] lg:pr-[32px] py-[8px] rounded-[40px] bg-white hover:bg-gray-100 transition-colors"
            >
              <span className="w-[6px] h-[8px] border-l-[6px] border-y-[4px] border-y-transparent border-l-black" />
              <span className="text-black text-[13px] lg:text-[14px] font-medium leading-[16px]">
                View
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function RelatedProjects({
  projects = defaultProjects,
}: RelatedProjectsProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;

    const updateButtons = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateButtons();
    api.on("select", updateButtons);
    api.on("reInit", updateButtons);

    return () => {
      api.off("select", updateButtons);
    };
  }, [api]);

  return (
    <section
      className="w-full flex justify-center py-[48px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px]"
      style={{ fontFamily: "Inter, sans-serif", backgroundColor: "var(--global-bg)" }}
    >
      <div className="flex flex-col gap-[24px] lg:gap-[32px] w-full max-w-[1280px] overflow-hidden">
        {/* Header */}
        <div className="flex items-start lg:items-center justify-between gap-[16px]">
          <div className="flex flex-col gap-[12px] lg:gap-[16px]">
            <h2 className="text-white text-[32px] lg:text-[64px] font-semibold leading-[38px] lg:leading-[58px]">
              Related Projects
            </h2>
            <p className="text-[#888] text-[14px] lg:text-[16px] font-normal leading-[22px] lg:leading-[24px] max-w-[400px]">
              The Drewl Hall of Fame: Featuring brands from around the world and
              projects of all shapes and sizes.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden lg:flex items-center shrink-0 h-[44px] px-[24px] py-[8px] rounded-[40px] border border-[#F3F4F6] hover:bg-[#191919] transition-colors"
          >
            <span className="text-white text-[14px] font-medium leading-[16px]">
              View Products
            </span>
          </Link>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: false }}
          className="w-full"
        >
          <CarouselContent className="-ml-[16px] lg:-ml-[32px]">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="pl-[16px] lg:pl-[32px] basis-[85%] lg:basis-[60.5%]"
              >
                <RelatedProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-[16px] lg:gap-[24px]">
          <button
            onClick={() => api?.scrollPrev()}
            disabled={!canScrollPrev}
            className="flex items-center justify-center size-[40px] lg:size-[48px] rounded-full border border-[#777] hover:border-white disabled:opacity-40 disabled:hover:border-[#777] transition-colors"
            aria-label="Previous projects"
          >
            <ChevronLeft className="size-[20px] lg:size-[24px] text-white" />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            disabled={!canScrollNext}
            className="flex items-center justify-center size-[40px] lg:size-[48px] rounded-full border border-[#F3F4F6] hover:bg-[#191919] disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
            aria-label="Next projects"
          >
            <ChevronRight className="size-[20px] lg:size-[24px] text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
