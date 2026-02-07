"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutHeroSection() {
  return (
    <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]" style={{ backgroundColor: "#000" }}>
      <div className="w-full max-w-[1440px]">
        {/* Hero Card */}
        <div
          className="relative w-full flex rounded-[28px] overflow-hidden bg-[#191919]"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/image 59.png"
              alt="About Us Background"
              fill
              className="object-cover"
            />
          </div>

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(25, 25, 25, 0.95) 0%, rgba(25, 25, 25, 0.7) 50%, rgba(25, 25, 25, 0.3) 100%)",
            }}
          />

          {/* Content */}
          <div
            className="relative z-10 flex flex-col items-start gap-[24px] lg:gap-[32px] p-[24px] lg:p-[48px] w-full max-w-[400px] lg:max-w-[440px]"
            style={{ fontFamily: "Inter" }}
          >
            {/* Title - Inter, 64px, 600, 58px line-height */}
            <h1
              className="text-[#FFF] text-[40px] lg:text-[64px] font-[600] leading-[48px] lg:leading-[58px]"
            >
              About Us
            </h1>

            {/* Description - Inter, 16px, 400, 24px line-height, color #FFF */}
            <p
              className="text-[#FFF] text-[16px] font-[400] leading-[24px]"
            >
              You have the vision. We have the expert team to make it a reality.
              Let&apos;s talk about your project, your goals, and how we can partner to
              create a product that delivers real impact.
            </p>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="flex items-center h-[44px] gap-[12px] pl-[24px] pr-[32px] py-[8px] rounded-[40px] bg-[#D0FF71] hover:bg-[#c5f55e] transition-colors whitespace-nowrap"
            >
              <span className="w-[8px] h-[8px] rounded-full bg-[#000000]" />
              <span className="text-[#000000] text-[14px] font-[500] leading-[16px]">
                Schedule Your Free Consultation
              </span>
            </Link>

            {/* Sub-text - Inter, 16px, 400, 24px line-height, color #D2D2D2 */}
            <p
              className="text-[#D2D2D2] text-[16px] font-[400] leading-[24px]"
            >
              No commitment, just a strategic conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
