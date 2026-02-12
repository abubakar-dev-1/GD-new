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
      <div className="flex flex-col gap-[48px] lg:gap-[80px] items-center w-full max-w-[1280px]">
        {/* Header */}
        <div className="flex flex-col gap-[24px] items-center text-center max-w-[768px]">
          <h2 className="text-[#FFFFFF] text-[32px] lg:text-[64px] font-semibold leading-[38px] lg:leading-[58px]">
            {heading}
          </h2>
          <p
            className="text-[#FFFFFF] text-[16px] lg:text-[18px] font-normal leading-[24px] lg:leading-[1.5]"
            style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}
          >
            {description}
          </p>
        </div>

        {/* Highlight Cards */}
        {highlights.length > 0 && (
          <div className="flex flex-col gap-[24px] lg:gap-[32px] w-full">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-[24px] lg:gap-[64px] items-center bg-[#191919] rounded-[28px] p-[16px] lg:p-[24px] w-full"
              >
                {/* Image */}
                <div className="relative w-full lg:flex-1 aspect-[1912/880] rounded-[20px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-[16px] justify-center lg:flex-1">
                  <h3 className="text-[#FFFFFF] text-[20px] lg:text-[24px] font-medium leading-[26px] lg:leading-[28px]">
                    {item.title}
                  </h3>
                  <p
                    className="text-[#FFFFFF] text-[14px] lg:text-[16px] font-normal leading-[1.5]"
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
