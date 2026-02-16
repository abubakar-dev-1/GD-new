"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

export interface TestimonialItem {
  id: number;
  company: string;
  companyLogo: string;
  rating: number;
  quote: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
}

const defaultTestimonials: TestimonialItem[] = [
  {
    id: 1,
    company: "Upwork",
    companyLogo: "/Frame(1).svg",
    rating: 4,
    quote:
      '"The team at GD is in a league of their own. They didn\'t just build a product for us; they became a true strategic partner. Their technical expertise and commitment to quality were evident at every stage, leading to a final product that exceeded all our expectations."',
    author: {
      name: "Micheal Shephard",
      title: "CEO, Indelible Security",
      image: "/images/Avatar Image.svg",
    },
  },
  {
    id: 2,
    company: "Fiverr",
    companyLogo: "/Frame.svg",
    rating: 5,
    quote:
      '"The team at GD is in a league of their own. They didn\'t just build a product for us; they became a true strategic partner. Their technical expertise and commitment to quality were evident at every stage, leading to a final product that exceeded all our expectations."',
    author: {
      name: "Micheal Shephard",
      title: "CEO, Indelible Security",
      image: "/images/Avatar Image.svg",
    },
  },
  {
    id: 3,
    company: "Freelancer",
    companyLogo: "/Frame(2).svg",
    rating: 4,
    quote:
      '"The team at GD is in a league of their own. They didn\'t just build a product for us; they became a true strategic partner. Their technical expertise and commitment to quality were evident at every stage, leading to a final product that exceeded all our expectations."',
    author: {
      name: "Micheal Shephard",
      title: "CEO, Indelible Security",
      image: "/images/Avatar Image.svg",
    },
  },
  {
    id: 4,
    company: "Upwork",
    companyLogo: "/Frame(1).svg",
    rating: 4,
    quote:
      '"The team at GD is in a league of their own. They didn\'t just build a product for us; they became a true strategic partner. Their technical expertise and commitment to quality were evident at every stage, leading to a final product that exceeded all our expectations."',
    author: {
      name: "Micheal Shephard",
      title: "CEO, Indelible Security",
      image: "/images/Avatar Image.svg",
    },
  },
  {
    id: 5,
    company: "Fiverr",
    companyLogo: "/Frame.svg",
    rating: 5,
    quote:
      '"The team at GD is in a league of their own. They didn\'t just build a product for us; they became a true strategic partner. Their technical expertise and commitment to quality were evident at every stage, leading to a final product that exceeded all our expectations."',
    author: {
      name: "Micheal Shephard",
      title: "CEO, Indelible Security",
      image: "/images/Avatar Image.svg",
    },
  },
];

export default function Testimonials({ testimonials: sanityTestimonials }: { testimonials?: TestimonialItem[] }) {
  // Merge defaults with Sanity testimonials, deduplicating by id (Sanity wins)
  const sanityItems = sanityTestimonials ?? [];
  const sanityIds = new Set(sanityItems.map((t) => t.id));
  const testimonials = [
    ...defaultTestimonials.filter((t) => !sanityIds.has(t.id)),
    ...sanityItems,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Reset index when switching between mobile/desktop
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  const maxIndex = isMobile
    ? testimonials.length - 1
    : Math.max(0, testimonials.length - 3);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const totalSlides = maxIndex + 1;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  // Mobile: translate by 100% per card, Desktop: translate by 33.333% per card
  const translateX = isMobile
    ? currentIndex * 100
    : currentIndex * (100 / 3);

  return (
    <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px]" style={{ backgroundColor: "var(--global-bg)" }}>
      <div className="flex flex-col items-center justify-center w-full max-w-[1440px] gap-[10px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-8 lg:mb-12">
          <h2
            className="text-[#FFF] text-[32px] min-[375px]:text-[40px] lg:text-[64px] font-[600] leading-[40px] min-[375px]:leading-[48px] lg:leading-[58px] text-center w-full lg:w-[648px]"
            style={{ fontFamily: "Inter" }}
          >
            Testimonials
          </h2>
          <p
            className="text-[#FFF] text-[16px] font-[400] leading-[24px] text-center w-full lg:w-[592px]"
            style={{ fontFamily: "Inter" }}
          >
            We are a collective of strategists, creatives, and engineers united
            by a passion for building brands that matter.
          </p>
        </div>

        {/* Testimonial Cards Carousel */}
        <div
          className="w-full overflow-hidden mb-8 lg:mb-12"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${translateX}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full lg:w-1/3 flex-shrink-0 px-[6px] min-[375px]:px-[16px]"
              >
                <div
                  className="flex flex-col items-start w-full p-[16px] min-[375px]:p-[32px] gap-[20px] min-[375px]:gap-[32px] rounded-[28px] bg-[#191919] border border-[#777] lg:border-0 h-full"
                >
                  {/* Mobile: Logo + Stars in same row, Desktop: separate */}
                  <div className="flex items-center justify-between w-full lg:hidden">
                    {/* Company Logo */}
                    <div className="h-[40px] flex items-center">
                      <Image
                        src={testimonial.companyLogo}
                        alt={testimonial.company}
                        width={80}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    {/* Star Rating */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 0L12.2451 7.40983H20L13.8779 11.9803L16.1229 19.3902L10 14.8197L3.87705 19.3902L6.12205 11.9803L0 7.40983H7.75486L10 0Z"
                            fill={index < testimonial.rating ? "#D0FF71" : "#333"}
                          />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Desktop: Company Logo separate */}
                  <div className="hidden lg:flex h-[40px] items-center">
                    <Image
                      src={testimonial.companyLogo}
                      alt={testimonial.company}
                      width={80}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  {/* Desktop: Star Rating separate */}
                  <div className="hidden lg:flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0L12.2451 7.40983H20L13.8779 11.9803L16.1229 19.3902L10 14.8197L3.87705 19.3902L6.12205 11.9803L0 7.40983H7.75486L10 0Z"
                          fill={index < testimonial.rating ? "#D0FF71" : "#333"}
                        />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p
                    className="text-[#FFF] text-[16px] font-[400] leading-[24px] self-stretch"
                    style={{ fontFamily: "Inter" }}
                  >
                    {testimonial.quote}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-[48px] h-[48px] rounded-full overflow-hidden bg-[#333]">
                      <Image
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p
                        className="text-[#FFF] text-[14px] font-[600] leading-[20px]"
                        style={{ fontFamily: "Inter" }}
                      >
                        {testimonial.author.name}
                      </p>
                      <p
                        className="text-[#999] text-[12px] font-[400] leading-[16px]"
                        style={{ fontFamily: "Inter" }}
                      >
                        {testimonial.author.title}
                      </p>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button
                    className="h-[40px] lg:h-[44px] px-[16px] lg:px-[24px] py-[8px] rounded-[40px] border border-[#FFF] text-[#FFF] text-[14px] font-[500] leading-[16px] hover:bg-[#FFF] hover:text-[#000] transition-colors"
                    style={{ fontFamily: "Inter" }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between w-full max-w-[1280px]">
          {/* Arrow Left - Mobile */}
          <button
            onClick={prevSlide}
            className="lg:hidden w-[40px] h-[40px] rounded-full border border-[#FFF] flex items-center justify-center text-[#FFF] active:bg-[#FFF] active:text-[#000] transition-colors"
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="transition-opacity"
                aria-label={`Go to slide ${index + 1}`}
              >
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="4"
                    cy="4"
                    r="4"
                    fill={index === currentIndex ? "#D0FF71" : "#777777"}
                  />
                </svg>
              </button>
            ))}
          </div>

          {/* Arrow Right - Mobile */}
          <button
            onClick={nextSlide}
            className="lg:hidden w-[40px] h-[40px] rounded-full border border-[#FFF] flex items-center justify-center text-[#FFF] active:bg-[#FFF] active:text-[#000] transition-colors"
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Arrow Navigation - Desktop */}
          <div className="hidden lg:flex gap-4">
            <button
              onClick={prevSlide}
              className="w-[48px] h-[48px] rounded-full border border-[#FFF] flex items-center justify-center text-[#FFF] hover:bg-[#FFF] hover:text-[#000] transition-colors"
              aria-label="Previous testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-[48px] h-[48px] rounded-full border border-[#FFF] flex items-center justify-center text-[#FFF] hover:bg-[#FFF] hover:text-[#000] transition-colors"
              aria-label="Next testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
