"use client";

import { InlineWidget } from "react-calendly";

export default function BookingSection() {
  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "var(--global-bg)" }}
    >
      {/* Background Image Container - matches max-w-[1440px] like other sections */}
      <div
        className="relative w-full max-w-[1440px] flex flex-col items-center gap-[32px] min-[375px]:gap-[48px] lg:gap-[64px] py-[32px] min-[375px]:py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[48px] rounded-[24px] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/calendly_image 96.png')",
        }}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-[16px] text-center">
          {/* Title - Inter, 40px, 700, 48px line-height, max-width 578px */}
          <h2
            className="text-[#FFF] text-[28px] min-[375px]:text-[40px] font-[700] leading-[36px] min-[375px]:leading-[48px] text-center max-w-[578px]"
            style={{ fontFamily: "Inter" }}
          >
            Ready to build something exceptional?
          </h2>
          {/* Subtitle - Inter, 16px, 400, 24px line-height, max-width 612px */}
          <p
            className="text-[#FFF] text-[16px] font-[400] leading-[24px] text-center max-w-[612px]"
            style={{ fontFamily: "Inter" }}
          >
            Let&apos;s discuss how our expertise can transform your idea into a powerful digital
            solution. Schedule a free, no-obligation consultation with our strategy team
            today.
          </p>
        </div>

        {/* Calendly Widget Container with green left border accent */}
        <div className="w-full max-w-[1100px] rounded-[16px] overflow-hidden bg-white border-l-[4px] border-l-[#D0FF71]">
          <InlineWidget
            url="https://calendly.com/muhammadahmad8063/30min"
            styles={{
              height: "680px",
              width: "100%",
              minWidth: "280px",
            }}
            pageSettings={{
              backgroundColor: "ffffff",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "D0FF71",
              textColor: "000000",
            }}
          />
        </div>
      </div>
    </section>
  );
}
