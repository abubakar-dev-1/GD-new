"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export interface OverviewCard {
  icon: string;
  text: string;
}

interface ProductOverviewProps {
  heading?: string;
  description?: string;
  images?: string[];
  cards?: OverviewCard[];
}

export default function ProductOverview({
  heading = "Product Overview",
  description = "We are a collective of strategists, creatives, and engineers united by a passion for building brands that matter.",
  images = [],
  cards = [],
}: ProductOverviewProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = cards.length;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 360 + 16; // card width + gap
    const newIndex =
      direction === "right"
        ? Math.min(activeIndex + 1, totalCards - 1)
        : Math.max(activeIndex - 1, 0);
    setActiveIndex(newIndex);
    scrollRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "#000", fontFamily: "Inter, sans-serif" }}
    >
      <div className="flex flex-col gap-[32px] items-center w-full max-w-[1280px] overflow-hidden">
        {/* Header */}
        <div className="flex flex-col gap-[16px] items-center text-center">
          <h2 className="text-[#FFFFFF] text-[40px] lg:text-[64px] font-bold lg:font-semibold leading-normal lg:leading-[58px] max-w-[648px]">
            {heading}
          </h2>
          <p className="text-[#FFFFFF] text-[16px] font-normal leading-[24px] max-w-[592px]">
            {description}
          </p>
        </div>

        {/* Text Cards Mode */}
        {cards.length > 0 && (
          <div className="flex flex-col gap-[48px] w-full">
            {/* Scrollable text cards with edge gradients on mobile */}
            <div className="relative w-full">
              {/* Left gradient - mobile only */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[146px] z-10 pointer-events-none lg:hidden"
                style={{
                  background:
                    "linear-gradient(90deg, #000000 0%, rgba(0,0,0,0) 86.667%)",
                }}
              />

              {/* Right gradient - mobile only */}
              <div
                className="absolute right-0 top-0 bottom-0 w-[146px] z-10 pointer-events-none lg:hidden"
                style={{
                  background:
                    "linear-gradient(270deg, #000000 0%, rgba(0,0,0,0) 86.667%)",
                }}
              />

              <div
                ref={scrollRef}
                className="w-full overflow-x-auto scrollbar-hide"
              >
                <div className="flex gap-[16px] items-stretch">
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className="shrink-0 w-[360px] bg-[#191919] rounded-[28px] p-[32px] flex flex-col gap-[32px]"
                    >
                      <div className="pb-[16px]">
                        <Image
                          src={card.icon}
                          alt=""
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-[#FFFFFF] text-[16px] font-normal leading-[24px]">
                        {card.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pagination - desktop only */}
            <div className="hidden lg:flex items-center justify-between w-full">
              {/* Dots */}
              <div className="flex gap-[8px]">
                {cards.map((_, index) => (
                  <div
                    key={index}
                    className={`w-[8px] h-[8px] rounded-full transition-colors ${
                      index === activeIndex ? "bg-white" : "bg-[#555]"
                    }`}
                  />
                ))}
              </div>

              {/* Arrow buttons */}
              <div className="flex gap-[24px]">
                <button
                  onClick={() => scroll("left")}
                  className="w-[48px] h-[48px] rounded-full border border-white flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
                  aria-label="Previous"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-[48px] h-[48px] rounded-full border border-white flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Next"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Image Cards Mode */}
        {cards.length === 0 && images.length > 0 && (
          <div className="relative w-full">
            {/* Left gradient */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[80px] lg:w-[146px] z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, #000000 0%, rgba(0,0,0,0) 86.667%)",
              }}
            />

            {/* Right gradient */}
            <div
              className="absolute right-0 top-0 bottom-0 w-[80px] lg:w-[146px] z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(270deg, #000000 0%, rgba(0,0,0,0) 86.667%)",
              }}
            />

            {/* Scrollable image cards */}
            <div className="w-full overflow-x-auto scrollbar-hide">
              <div className="flex gap-[16px] lg:gap-[32px] items-start justify-center px-[40px] lg:px-0">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="shrink-0 bg-[#191919] border border-[#444] rounded-[20px] lg:rounded-[28px] p-[4px] lg:p-[5.6px]"
                  >
                    <div className="relative w-[300px] h-[175px] lg:w-[492px] lg:h-[287px] rounded-[18px] lg:rounded-[28px] overflow-hidden border border-[#444]">
                      <Image
                        src={src}
                        alt={`${heading} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
