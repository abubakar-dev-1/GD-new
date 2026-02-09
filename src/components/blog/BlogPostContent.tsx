"use client";

import Image from "next/image";
import { InlineWidget } from "react-calendly";
import PortableTextRenderer from "@/components/blog/PortableTextRenderer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogPostContent({ body }: { body: any[] }) {
  return (
    <section
      className="w-full flex justify-center px-[20px] lg:px-[10px] pb-[60px] lg:pb-[100px]"
      style={{ backgroundColor: "#000" }}
    >
      <div
        className="w-full max-w-[1440px] flex flex-col lg:flex-row items-start gap-[40px] lg:gap-[64px]"
      >
        {/* Left Column - Article Content */}
        <article
          className="flex flex-col items-start gap-[24px] lg:gap-[32px] flex-1 min-w-0 lg:max-w-[776px]"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          {/* Dynamic content from Sanity */}
          <PortableTextRenderer body={body} />

          {/* Share This Post */}
          <div
            className="flex flex-col justify-center items-center gap-[24px] w-full pt-[24px] pb-[40px]"
            style={{ borderBottom: "1px solid #333" }}
          >
            <span
              className="text-[#FFF] text-[16px] font-[500] leading-[24px]"
              style={{ fontFamily: "Inter" }}
            >
              Share this post
            </span>
            <div className="flex items-center gap-[24px]">
              {/* Copy Link */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
                className="hover:opacity-80 transition-opacity"
                aria-label="Copy link"
              >
                <Image src="/blog/Frame.svg" alt="Copy link" width={24} height={24} />
              </button>
              {/* LinkedIn */}
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <Image src="/blog/Frame(1).svg" alt="LinkedIn" width={24} height={24} />
              </a>
              {/* X / Twitter */}
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="X">
                <Image src="/blog/ri_twitter-x-line.svg" alt="X" width={24} height={24} />
              </a>
              {/* Dribbble */}
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Dribbble">
                <Image src="/blog/Frame(2).svg" alt="Dribbble" width={24} height={24} />
              </a>
            </div>
          </div>
        </article>

        {/* Right Column - Booking Widget */}
        <aside className="w-full lg:w-[400px] lg:sticky lg:top-[100px] flex-shrink-0">
          <div
            className="flex flex-col items-center gap-[24px] p-[24px] rounded-[20px] overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/calendly_image 96.png')",
            }}
          >
            {/* Title */}
            <h3
              className="text-[#FFF] text-[24px] font-[700] leading-[32px] text-center"
              style={{ fontFamily: "Inter" }}
            >
              Ready to build something exceptional?
            </h3>
            {/* Subtitle */}
            <p
              className="text-[#FFF] text-[14px] font-[400] leading-[20px] text-center"
              style={{ fontFamily: "Inter" }}
            >
              Schedule a free, no-obligation consultation with our strategy
              team today.
            </p>
            {/* Calendly Widget */}
            <div className="w-full rounded-[12px] overflow-hidden bg-white border-l-[4px] border-l-[#D0FF71]">
              <InlineWidget
                url="https://calendly.com/muhammadahmad8063/30min"
                styles={{
                  height: "500px",
                  width: "100%",
                  minWidth: "280px",
                }}
                pageSettings={{
                  backgroundColor: "ffffff",
                  hideEventTypeDetails: true,
                  hideLandingPageDetails: true,
                  primaryColor: "D0FF71",
                  textColor: "000000",
                }}
              />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
