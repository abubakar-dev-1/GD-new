"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface ProjectDetailHeroProps {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  countryFlag?: string;
}

const defaultProject: ProjectDetailHeroProps = {
  title: "Luxury watch boutique",
  description:
    "In today's rapidly evolving digital landscape, businesses need more than just a functional online presence; they require a strategic and engaging digital experience that resonates with their target audience.",
  images: [
    "/portfolio/image 36.png",
    "/portfolio/image 31.png",
    "/portfolio/image 36.png",
    "/portfolio/image 31.png",
  ],
  tags: ["Design", "Website", "UI/UX"],
  countryFlag: "🇨🇦",
};

export default function ProjectDetailHero({
  title = defaultProject.title,
  description = defaultProject.description,
  images = defaultProject.images,
  tags = defaultProject.tags,
  countryFlag = defaultProject.countryFlag,
}: Partial<ProjectDetailHeroProps>) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Carousel Section */}
      <section className="w-full flex justify-center py-[40px] px-[12px] min-[375px]:px-[20px] lg:px-[10px]">
        <div className="w-full max-w-[1280px] relative">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "center" }}
            className="w-full"
          >
            <CarouselContent className="-ml-0">
              {images.map((src, index) => (
                <CarouselItem key={index} className="pl-0">
                  <div
                    className="relative w-full rounded-[20px] lg:rounded-[28px] overflow-hidden bg-[#191919]"
                    style={{ aspectRatio: "1280 / 580" }}
                  >
                    <Image
                      src={src}
                      alt={`${title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Dot Indicators — overlaid at bottom of carousel */}
            {count > 1 && (
              <div
                className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-center pb-[10px] lg:pb-[12px] rounded-b-[20px] lg:rounded-b-[28px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%)",
                  height: "70px",
                }}
              >
                <div className="flex items-center gap-[12px] lg:gap-[16px] pointer-events-auto">
                  {Array.from({ length: count }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`rounded-full transition-all duration-300 size-[12px] lg:size-[16px] ${
                        index === current ? "bg-white" : "bg-[#595959]"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </Carousel>
        </div>
      </section>

      {/* Project Info Section */}
      <section className="w-full flex justify-center py-[32px] lg:py-[40px] px-[20px] lg:px-0">
        <div className="flex flex-col items-center gap-[24px] lg:gap-[32px] w-full max-w-[1280px]">
          {/* Title */}
          <h1 className="text-white text-[32px] lg:text-[64px] font-semibold leading-[38px] lg:leading-[58px] text-center w-full">
            {title}
          </h1>

          {/* Tags Row */}
          <div className="flex flex-wrap items-center justify-center gap-[6px]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-[12px] py-[4px] rounded-[16px] bg-[#444] text-white text-[13px] font-normal leading-[20px]"
                style={{
                  boxShadow:
                    "0px 8px 8px -4px rgba(0,0,0,0.02), 0px 4px 4px -2px rgba(0,0,0,0.03), 0px 3px 3px -1.5px rgba(27,27,27,0.03), 0px 2px 2px -1px rgba(0,0,0,0.04), 0px 0.5px 1px 0px rgba(0,0,0,0.06), 0px 0px 0px 1px rgba(0,0,0,0.04)",
                }}
              >
                {tag}
              </span>
            ))}
            {countryFlag && (
              <span
                className="h-[28px] rounded-[16px] bg-[#444] flex items-center justify-center px-[12px] py-[4px]"
                style={{
                  boxShadow:
                    "0px 8px 8px -4px rgba(0,0,0,0.02), 0px 4px 4px -2px rgba(0,0,0,0.03), 0px 3px 3px -1.5px rgba(27,27,27,0.03), 0px 2px 2px -1px rgba(0,0,0,0.04), 0px 0.5px 1px 0px rgba(0,0,0,0.06), 0px 0px 0px 1px rgba(0,0,0,0.04)",
                }}
              >
                <span className="text-[14px] leading-[20px]">{countryFlag}</span>
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-white text-[16px] font-normal leading-[32px] text-center w-full max-w-[608px]">
            {description}
          </p>
        </div>
      </section>
    </div>
  );
}
