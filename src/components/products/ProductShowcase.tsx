"use client";

import Image from "next/image";

interface ProductShowcaseProps {
  heading?: string;
  description?: string;
  images?: string[];
  videoUrl?: string;
}

export default function ProductShowcase({
  heading = "Redefining a Classic",
  description = "Our client aimed to capture the thriving mobile card game market with an app that felt both authentic and innovative. The core challenge was to create a highly polished, scalable, and engaging multiplayer experience that would appeal to a global audience while respecting the traditions of the beloved card game.",
  images = [],
  videoUrl,
}: ProductShowcaseProps) {
  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "#000", fontFamily: "Inter, sans-serif" }}
    >
      <div className="flex flex-col gap-[48px] lg:gap-[80px] items-start w-full max-w-[1280px]">
        {/* Header */}
        <div className="flex flex-col gap-[24px] max-w-[768px]">
          <h2 className="text-[#FFFFFF] text-[40px] lg:text-[64px] font-semibold leading-[48px] lg:leading-[58px]">
            {heading}
          </h2>
          <p className="text-[#FFFFFF] text-[16px] font-normal leading-[24px]">
            {description}
          </p>
        </div>

        {/* Media Area */}
        {videoUrl ? (
          <div className="w-full flex justify-center">
            <div className="w-full rounded-[28px] overflow-hidden">
              <video
                src={videoUrl}
                controls
                className="w-full h-auto rounded-[28px]"
                playsInline
              />
            </div>
          </div>
        ) : images.length === 1 ? (
          /* Single image — full-width display */
          <div className="relative w-full aspect-[2880/1488] rounded-[28px] overflow-hidden">
            <Image
              src={images[0]}
              alt={`${heading} screenshot`}
              fill
              className="object-cover"
            />
          </div>
        ) : images.length > 1 ? (
          /* Multiple images — glassmorphism cards */
          <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex gap-[16px] lg:gap-[32px] items-center justify-center px-0 lg:px-[128px] py-[10px]">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="shrink-0 rounded-[28px] lg:rounded-[37px] p-[10px] lg:p-[13px]"
                  style={{
                    background: "rgba(26, 26, 26, 0.85)",
                    backdropFilter: "blur(9px)",
                    boxShadow:
                      "0px 7px 7px 0px rgba(0,0,0,0.25), inset 0px 0px 37px 0px rgba(255,255,255,0.25)",
                  }}
                >
                  <div className="relative w-[260px] h-[260px] lg:w-[373px] lg:h-[373px] rounded-[20px] lg:rounded-[26px] overflow-hidden">
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
        ) : null}
      </div>
    </section>
  );
}
