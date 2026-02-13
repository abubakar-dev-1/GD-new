"use client";

import Image from "next/image";

export interface Highlight {
  image: string;
  title: string;
  description: string;
}

interface ProductHighlightsProps {
  heading?: string;
  description?: string;
  highlights?: Highlight[];
}

export default function ProductHighlights({
  heading = "A User-Centric Approach",
  description = "Experience the classic card game, reimagined for the digital age. Taash Royale blends timeless strategy with a sleek, modern interface, competitive online multiplayer, and a rewarding progression system.",
  highlights = [],
}: ProductHighlightsProps) {
  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "#000", fontFamily: "Inter, sans-serif" }}
    >
      <div className="flex flex-col gap-[24px] lg:gap-[80px] items-center w-full max-w-[1280px]">
        {/* Header */}
        <div className="flex flex-col gap-[24px] items-center text-center max-w-[768px]">
          <h2 className="text-[#FFFFFF] text-[40px] lg:text-[64px] font-bold lg:font-semibold leading-normal lg:leading-[58px]">
            {heading}
          </h2>
          <p
            className="text-[#FFFFFF] text-[18px] font-normal leading-[1.5]"
            style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}
          >
            {description}
          </p>
        </div>

        {/* Highlight Cards - side by side on desktop, stacked on mobile */}
        {highlights.length > 0 && (
          <div className="flex flex-col lg:flex-row gap-[32px] w-full">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-[32px] items-start justify-center bg-[#191919] rounded-[28px] p-[24px] w-full lg:flex-1"
              >
                {/* Image */}
                <div className="relative w-full aspect-[2880/2048] rounded-[16px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-[16px] justify-center w-full">
                  <h3 className="text-[#FFFFFF] text-[24px] font-medium leading-[28px]">
                    {item.title}
                  </h3>
                  <p
                    className="text-[#FFFFFF] text-[16px] font-normal leading-[1.5]"
                    style={{
                      fontFamily: "var(--font-roboto), Roboto, sans-serif",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
