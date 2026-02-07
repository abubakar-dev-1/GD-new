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
          {/* Background Image - Desktop */}
          <div className="absolute inset-0 hidden lg:block">
            <Image
              src="/images/image 59.png"
              alt="About Us Background"
              fill
              className="object-cover"
            />
          </div>

          {/* Background Image - Mobile */}
          <div className="absolute inset-0 lg:hidden">
            <Image
              src="/images/damu un gur.png"
              alt="About Us Background"
              fill
              className="object-cover"
            />
          </div>

          {/* Gradient Overlay - Desktop only */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(25, 25, 25, 0.95) 0%, rgba(25, 25, 25, 0.7) 50%, rgba(25, 25, 25, 0.3) 100%)",
            }}
          />

          {/* Content - Mobile */}
          <div
            className="relative z-10 flex lg:hidden flex-col items-start gap-[80px] px-[24px] py-[48px] w-full flex-1"
            style={{ fontFamily: "Inter" }}
          >
            {/* Top group - Title + Description */}
            <div className="flex flex-col items-start gap-[24px]">
              <h1 className="text-[#FFF] text-[40px] font-[700] leading-normal">
                About Us
              </h1>
              <p className="text-[#FFF] text-[16px] font-[400] leading-[24px]">
                You have the vision. We have the expert team to make it a reality.
                Let&apos;s talk about your project, your goals, and how we can partner to
                create a product that delivers real impact.
              </p>
            </div>

            {/* Bottom group - Button + Sub-text */}
            <div className="flex flex-col items-start gap-[8px]">
              <Link
                href="/contact"
                className="flex items-center h-[44px] gap-[12px] pl-[24px] pr-[32px] py-[8px] rounded-[40px] bg-[#D0FF71] hover:bg-[#c5f55e] transition-colors whitespace-nowrap"
              >
                <span className="w-[8px] h-[8px] rounded-full bg-[#000000]" />
                <span className="text-[#000000] text-[14px] font-[500] leading-[16px]">
                  Schedule Your Free Consultation
                </span>
              </Link>
              <p className="text-[#D2D2D2] text-[16px] font-[400] leading-[24px]">
                No commitment, just a strategic conversation.
              </p>
            </div>
          </div>

          {/* Content - Desktop */}
          <div
            className="relative z-10 hidden lg:flex flex-col items-start gap-[32px] p-[48px] max-w-[440px]"
            style={{ fontFamily: "Inter" }}
          >
            <h1 className="text-[#FFF] text-[64px] font-[600] leading-[58px]">
              About Us
            </h1>
            <p className="text-[#FFF] text-[16px] font-[400] leading-[24px]">
              You have the vision. We have the expert team to make it a reality.
              Let&apos;s talk about your project, your goals, and how we can partner to
              create a product that delivers real impact.
            </p>
            <Link
              href="/contact"
              className="flex items-center h-[44px] gap-[12px] pl-[24px] pr-[32px] py-[8px] rounded-[40px] bg-[#D0FF71] hover:bg-[#c5f55e] transition-colors whitespace-nowrap"
            >
              <span className="w-[8px] h-[8px] rounded-full bg-[#000000]" />
              <span className="text-[#000000] text-[14px] font-[500] leading-[16px]">
                Schedule Your Free Consultation
              </span>
            </Link>
            <p className="text-[#D2D2D2] text-[16px] font-[400] leading-[24px]">
              No commitment, just a strategic conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
