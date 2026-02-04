"use client";

import Link from "next/link";

export default function HiringBanner() {
  return (
    <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]" style={{ backgroundColor: "var(--global-bg)" }}>
      <div className="w-full max-w-[1440px] flex flex-col items-start">
        <div
          className="relative flex items-center justify-between w-full p-[32px] rounded-[20px] overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #0a1f0a 0%, #0d2e0d 50%, #0a1f0a 100%)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {/* Green glow effect at bottom center */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center bottom, rgba(80, 200, 80, 0.4) 0%, rgba(50, 150, 50, 0.2) 40%, transparent 70%)",
            }}
          />

          {/* Left Content */}
          <div className="relative z-10 flex flex-col gap-[8px]">
            <h3
              className="text-[#FFF] text-[32px] font-medium leading-[38px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              We&apos;re hiring!
            </h3>
            <p
              className="text-[#FFF] text-[18px] font-normal leading-[150%]"
              style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}
            >
              Be a part of our amazing team
            </p>
          </div>

          {/* Right Button */}
          <Link
            href="/careers"
            className="relative z-10 flex items-center h-[44px] gap-[12px] pl-[24px] pr-[32px] py-[8px] rounded-[40px] bg-[#FFFFFF] hover:bg-gray-100 transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <span className="w-[8px] h-[8px] rounded-full bg-[#000000]" />
            <span className="text-[#000000] text-[14px] font-medium leading-[16px] text-center">
              Open Positions
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
