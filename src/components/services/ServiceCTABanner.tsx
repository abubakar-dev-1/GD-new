"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServiceCTABanner() {
  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "#000" }}
    >
      <div className="w-full max-w-[1440px]">
        <div className="relative w-full flex rounded-[28px] overflow-hidden bg-[#191919]">
          {/* Background Image - Desktop */}
          <div className="absolute inset-0 hidden lg:block">
            <Image
              src="/images/career_image 59.png"
              alt="CTA Background"
              fill
              className="object-cover"
            />
          </div>

          {/* Background Image - Mobile */}
          <div className="absolute inset-0 lg:hidden">
            <Image
              src="/images/damu un gur.png"
              alt="CTA Background"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="relative z-10 flex flex-col items-start gap-[24px] lg:gap-[32px] p-[16px] min-[375px]:p-[24px] lg:p-[48px] max-w-[724px]"
            style={{ fontFamily: "Inter" }}
          >
            <h2 className="text-[#FFF] text-[32px] lg:text-[40px] font-[700] leading-[38px] lg:leading-[48px]">
              Ready to build something exceptional?
            </h2>
            <p className="text-[#FFF] text-[16px] font-[400] leading-[24px] max-w-[612px]">
              Let&apos;s discuss how our expertise can transform your idea into a
              powerful digital solution. Schedule a free, no-obligation consultation
              with our strategy team today.
            </p>
            <div className="flex flex-col items-start gap-[8px]">
              <Link
                href="/contact"
                className="flex items-center h-auto min-h-[44px] gap-[8px] min-[375px]:gap-[12px] pl-[16px] min-[375px]:pl-[24px] pr-[20px] min-[375px]:pr-[32px] py-[8px] rounded-[40px] bg-[#D0FF71] hover:bg-[#c5f55e] transition-colors"
              >
                <span className="w-[8px] h-[8px] rounded-full bg-[#000000] flex-shrink-0" />
                <span className="text-[#000000] text-[14px] font-[500] leading-[16px]">
                  Schedule Your Free Consultation
                </span>
              </Link>
              <p className="text-[#D2D2D2] text-[14px] lg:text-[16px] font-[400] leading-[20px] lg:leading-[24px]">
                No commitment, just a strategic conversation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
