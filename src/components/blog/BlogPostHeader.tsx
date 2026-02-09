"use client";

import Image from "next/image";
import Link from "next/link";

// Social icons
const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="2" y="9" width="4" height="12" stroke="#FFF" strokeWidth="1.5" />
    <circle cx="4" cy="4" r="2" stroke="#FFF" strokeWidth="1.5" />
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4L10.5 12.5L4 20H6L11.5 13.5L16 20H20L13.5 11.5L20 4H18L12.5 10.5L8 4H4Z" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DribbbleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#FFF" strokeWidth="1.5" />
    <path d="M8.56 2.75C12.93 8.78 14.58 12.17 16.59 20.47" stroke="#FFF" strokeWidth="1.5" />
    <path d="M19.13 5.09C15.22 9.14 10.84 10.44 2.18 10.32" stroke="#FFF" strokeWidth="1.5" />
    <path d="M21.75 12.84C16.52 11.55 12.58 12.07 6.88 15.99" stroke="#FFF" strokeWidth="1.5" />
  </svg>
);

const CopyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6.5" y="6.5" width="10" height="10" rx="2" stroke="#FFF" strokeWidth="1.5" />
    <path d="M13.5 6.5V5C13.5 3.89543 12.6046 3 11.5 3H5C3.89543 3 3 3.89543 3 5V11.5C3 12.6046 3.89543 13.5 5 13.5H6.5" stroke="#FFF" strokeWidth="1.5" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function BlogPostHeader() {
  const tags = ["Design", "Design", "Website", "UI/UX"];
  const readTime = "5 Min Read";
  const title = "The Next.JS Framework for the Web";
  const coverImage = "/images/image 54.png";
  const date = "Tuesday 24th , Aug 2025";

  return (
    <section
      className="w-full flex justify-center py-[40px] px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "#000" }}
    >
      <div
        className="w-full max-w-[1440px] flex flex-col items-start gap-[48px]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {/* Back Link */}
        <Link
          href="/blog"
          className="flex items-center gap-[4px] text-[#D0FF71] text-[14px] font-[500] leading-[20px] hover:opacity-80 transition-opacity"
        >
          <ChevronLeftIcon />
          <span>All Posts</span>
        </Link>

        {/* Tags + Read Time Row */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-wrap items-center gap-[8px]">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-[12px] py-[4px] rounded-[16px] bg-[#333] text-[#FFF] text-[13px] font-[400] leading-[20px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[#D0FF71] text-[14px] font-[400] leading-[20px]">
            {readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[#FFF] text-[32px] lg:text-[48px] font-[700] leading-[38px] lg:leading-[56px]">
          {title}
        </h1>

        {/* Cover Image */}
        <div
          className="relative w-full rounded-[20px] overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Date + Social + Copy Link Row */}
        <div className="flex items-center justify-between w-full">
          <span className="text-[#D2D2D2] text-[14px] font-[400] leading-[20px]">
            {date}
          </span>

          <div className="flex items-center gap-[16px]">
            {/* Social Icons */}
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
              <LinkedInIcon />
            </a>
            <a href="#" aria-label="X" className="hover:opacity-80 transition-opacity">
              <XIcon />
            </a>
            <a href="#" aria-label="Dribbble" className="hover:opacity-80 transition-opacity">
              <DribbbleIcon />
            </a>

            {/* Copy Link Button */}
            <button
              className="flex items-center gap-[8px] px-[16px] py-[8px] rounded-[40px] border border-[#444] hover:bg-[#222] transition-colors"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
              }}
            >
              <CopyIcon />
              <span className="text-[#FFF] text-[13px] font-[500] leading-[16px]">
                Copy Link
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
