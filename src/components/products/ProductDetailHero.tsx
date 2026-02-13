"use client";

import Image from "next/image";

interface ProductDetailHeroProps {
  title: string;
  description: string;
  image: string;
  mobileImage: string;
  logo?: string;
  tags?: string[];
}

export default function ProductDetailHero({
  title,
  description,
  image,
  mobileImage,
  logo,
  tags = [],
}: ProductDetailHeroProps) {
  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "#000" }}
    >
      <div className="w-full max-w-[1440px]">
        <div className="relative w-full flex h-[500px] lg:h-auto rounded-[28px] overflow-hidden bg-[#191919] border border-[#333]">
          {/* Background Image - Desktop */}
          <div className="absolute inset-0 hidden lg:block">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          {/* Background Image - Mobile */}
          <div className="absolute inset-0 lg:hidden">
            <Image
              src={mobileImage}
              alt={title}
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Gradient Overlay - Desktop (left to right) */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(25, 25, 25, 0.85) 0%, rgba(25, 25, 25, 0.6) 45%, rgba(25, 25, 25, 0.0) 100%)",
            }}
          />

          {/* Gradient Overlay - Mobile (left to right, matching desktop) */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(90deg, #191919 0%, rgba(25, 25, 25, 0) 100%)",
            }}
          />

          {/* Logo - Top Right (Desktop) */}
          {logo && (
            <div className="absolute top-[32px] right-[32px] z-10 hidden lg:block">
              <Image
                src={logo}
                alt={`${title} logo`}
                width={120}
                height={90}
                className="object-contain"
              />
            </div>
          )}

          {/* Content - Mobile */}
          <div
            className="relative z-10 flex lg:hidden flex-col items-start justify-center gap-[24px] p-[48px] h-[500px] w-full"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <div className="flex flex-col gap-[16px] items-start w-full">
              <h1 className="text-[#FFF] text-[40px] font-bold leading-[48px]">
                {title}
              </h1>

              {/* Platform tags */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-[8px]">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-[8px] px-[12px] py-[4px] rounded-[16px] text-[#FFFFFF] text-[13px] font-normal bg-[#191919] shadow-[0px_8px_8px_-4px_rgba(0,0,0,0.02),0px_4px_4px_-2px_rgba(0,0,0,0.03)]"
                    >
                      <PlatformIcon name={tag} />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <p
              className="text-[#FFFFFF] text-[18px] font-normal leading-[1.5]"
              style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}
            >
              {description}
            </p>
          </div>

          {/* Content - Desktop */}
          <div
            className="relative z-10 hidden lg:flex flex-col items-start justify-center gap-[24px] p-[48px] min-h-[465px] max-w-[550px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <div className="flex flex-col gap-[16px] items-start w-full">
              <h1 className="text-[#FFF] text-[40px] font-bold leading-[48px] max-w-[525px]">
                {title}
              </h1>

              {/* Platform tags */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-[8px]">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-[8px] px-[12px] py-[4px] rounded-[16px] border border-[#444] text-[#FFFFFF] text-[13px] font-normal bg-[#191919] shadow-[0px_8px_8px_-4px_rgba(0,0,0,0.02),0px_4px_4px_-2px_rgba(0,0,0,0.03)]"
                    >
                      <PlatformIcon name={tag} />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <p
              className="text-[#FFFFFF] text-[18px] font-normal leading-[150%] max-w-[525px]"
              style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Renders a small platform icon based on the tag name */
function PlatformIcon({ name }: { name: string }) {
  const lower = name.toLowerCase();

  if (lower.includes("android")) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 10L17.78 10C17.3453 10 17 10.3453 17 10.78V16.22C17 16.6547 17.3453 17 17.78 17H18.22C18.6547 17 19 16.6547 19 16.22V10.78C19 10.3453 18.6547 10 18.22 10H18Z" fill="currentColor"/>
        <path d="M6 10L5.78 10C5.34529 10 5 10.3453 5 10.78V16.22C5 16.6547 5.34529 17 5.78 17H6.22C6.65471 17 7 16.6547 7 16.22V10.78C7 10.3453 6.65471 10 6.22 10H6Z" fill="currentColor"/>
        <path d="M16 10V17.5C16 17.7761 15.7761 18 15.5 18H14.5V20.22C14.5 20.6547 14.1547 21 13.72 21H13.28C12.8453 21 12.5 20.6547 12.5 20.22V18H11.5V20.22C11.5 20.6547 11.1547 21 10.72 21H10.28C9.84529 21 9.5 20.6547 9.5 20.22V18H8.5C8.22386 18 8 17.7761 8 17.5V10H16Z" fill="currentColor"/>
        <path d="M15.65 5.64L16.69 3.91C16.75 3.82 16.72 3.7 16.63 3.63C16.54 3.57 16.42 3.6 16.36 3.69L15.3 5.43C14.59 5.12 13.82 4.95 13 4.95C12.18 4.95 11.41 5.12 10.7 5.43L9.64 3.69C9.58 3.6 9.46 3.57 9.37 3.63C9.28 3.7 9.25 3.82 9.31 3.91L10.35 5.64C8.92 6.42 8 7.83 8 9.5H18C18 7.83 17.08 6.42 15.65 5.64ZM11 8C10.72 8 10.5 7.78 10.5 7.5C10.5 7.22 10.72 7 11 7C11.28 7 11.5 7.22 11.5 7.5C11.5 7.78 11.28 8 11 8ZM15 8C14.72 8 14.5 7.78 14.5 7.5C14.5 7.22 14.72 7 15 7C15.28 7 15.5 7.22 15.5 7.5C15.5 7.78 15.28 8 15 8Z" fill="currentColor"/>
        <path d="M8 10H16V9.5H8V10Z" fill="currentColor"/>
      </svg>
    );
  }

  if (lower.includes("ios") || lower.includes("apple") || lower.includes("iphone")) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.05 20.28C16.07 21.23 15 21.08 13.97 20.63C12.88 20.17 11.88 20.15 10.73 20.63C9.29 21.25 8.53 21.07 7.67 20.28C2.79 15.25 3.51 7.59 9.05 7.31C10.4 7.38 11.34 8.05 12.13 8.11C13.31 7.87 14.44 7.18 15.7 7.27C17.21 7.39 18.35 7.99 19.1 9.07C15.98 10.94 16.72 15.05 19.58 16.2C19 17.7 18.27 19.19 17.04 20.29L17.05 20.28ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3C16.06 5.58 13.43 7.5 12.03 7.25Z" fill="currentColor"/>
      </svg>
    );
  }

  if (lower.includes("windows") || lower.includes("pc")) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12.5V5.81L10.25 4.81V12.5H3ZM10.25 13.5V21.19L3 20.19V13.5H10.25ZM11.25 4.67L21 3V12.5H11.25V4.67ZM21 13.5V21L11.25 19.33V13.5H21Z" fill="currentColor"/>
      </svg>
    );
  }

  if (lower.includes("web")) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z" fill="currentColor"/>
      </svg>
    );
  }

  // Default: generic tag icon
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 7C5.5 6.17 6.17 5.5 7 5.5C7.83 5.5 8.5 6.17 8.5 7C8.5 7.83 7.83 8.5 7 8.5C6.17 8.5 5.5 7.83 5.5 7ZM21.41 11.58L12.41 2.58C12.04 2.21 11.53 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.53 2.21 12.04 2.59 12.42L11.59 21.42C11.96 21.79 12.47 22 13 22C13.53 22 14.04 21.79 14.41 21.41L21.41 14.41C21.79 14.04 22 13.53 22 13C22 12.47 21.79 11.96 21.41 11.58Z" fill="currentColor"/>
    </svg>
  );
}
