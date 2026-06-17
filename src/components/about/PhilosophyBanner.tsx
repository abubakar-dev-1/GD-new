"use client";

import Image from "next/image";

const defaultImage = "/image 98.png";
const defaultHighlight = "Transparency, integrity, and professionalism";
const defaultText =
  " are the pillars of our business philosophy. We prioritize clear communication and honest advice, ensuring that you're empowered to make informed decisions throughout the buying or selling process";

interface PhilosophyBannerProps {
  image?: string;
  highlight?: string;
  text?: string;
}

export default function PhilosophyBanner({
  image = defaultImage,
  highlight = defaultHighlight,
  text = defaultText,
}: PhilosophyBannerProps) {
  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "#000" }}
    >
      <div className="w-full max-w-[1440px]">
        <div className="relative w-full flex rounded-[28px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={image}
              alt="Our Philosophy"
              fill
              className="object-cover"
            />
          </div>

          {/* Dark green overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(41, 61, 0, 0.40)" }}
          />

          {/* Content */}
          <div className="relative z-10 w-full p-[24px] lg:p-[48px]">
            <p
              className="text-[24px] lg:text-[56px] font-[500] lg:font-[700] leading-[28px] lg:leading-[64px]"
              style={{
                fontFamily: "Inter",
                color: "rgba(255, 255, 255, 0.60)",
              }}
            >
              <span className="text-[#D0FF71]">{highlight}</span>
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
