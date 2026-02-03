"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
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

const testimonials: Testimonial[] = [
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
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.ceil(testimonials.length / 3) - 1 : prev - 1
    );
  };

  const totalSlides = Math.ceil(testimonials.length / 3);

  return (
    <section className="w-full flex justify-center py-[80px]" style={{ backgroundColor: "var(--global-bg)" }}>
      <div className="flex flex-col items-center justify-center w-full max-w-[1440px] px-[48px] gap-[10px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <h2
            className="text-[#FFF] text-[64px] font-[600] leading-[58px] text-center w-[648px]"
            style={{ fontFamily: "Inter" }}
          >
            Testimonials
          </h2>
          <p
            className="text-[#FFF] text-[16px] font-[400] leading-[24px] text-center w-[592px]"
            style={{ fontFamily: "Inter" }}
          >
            We are a collective of strategists, creatives, and engineers united
            by a passion for building brands that matter.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="flex gap-[32px] w-full justify-center mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-start w-[450px] p-[32px] gap-[32px] rounded-[28px] bg-[#191919]"
            >
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
                className="h-[44px] px-[24px] py-[8px] rounded-[40px] border border-[#FFF] text-[#FFF] text-[14px] font-[500] leading-[16px] hover:bg-[#FFF] hover:text-[#000] transition-colors"
                style={{ fontFamily: "Inter" }}
              >
                Read More
              </button>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between w-full max-w-[1440px] px-[48px]">
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

          {/* Arrow Navigation */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-[48px] h-[48px] rounded-full border border-[#FFF] flex items-center justify-center text-[#FFF] hover:bg-[#FFF] hover:text-[#000] transition-colors"
              aria-label="Previous testimonials"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-[48px] h-[48px] rounded-full border border-[#FFF] flex items-center justify-center text-[#FFF] hover:bg-[#FFF] hover:text-[#000] transition-colors"
              aria-label="Next testimonials"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
