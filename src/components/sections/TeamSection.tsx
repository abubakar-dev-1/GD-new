"use client";

import React, { useState, useCallback, useEffect } from "react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  quote: string;
  image: string;
  mobileImage: string;
  badge?: string;
  socials: {
    linkedin?: string;
    upwork?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Ghulam Ilyas",
    title: "Chief Executive Officer",
    quote: "A firm believer that great design is not just seen, but felt.",
    image: "/images/image 76.png",
    mobileImage: "/images/mobile_image 76.png",
    socials: {
      linkedin: "#",
      upwork: "#",
      twitter: "#",
    },
  },
  {
    id: "2",
    name: "Ghulam Ilyas",
    title: "Chief Executive Officer",
    quote: "A firm believer that great design is not just seen, but felt.",
    image: "/images/image 76.png",
    mobileImage: "/images/mobile_image 76.png",
    socials: {
      linkedin: "#",
      upwork: "#",
      twitter: "#",
    },
  },
  {
    id: "3",
    name: "Ghulam Ilyas",
    title: "Chief Executive Officer",
    quote: "A firm believer that great design is not just seen, but felt.",
    image: "/images/image 76.png",
    mobileImage: "/images/mobile_image 76.png",
    socials: {
      linkedin: "#",
      upwork: "#",
      twitter: "#",
    },
  },
  {
    id: "4",
    name: "Ghulam Ilyas",
    title: "Chief Executive Officer",
    quote: "A firm believer that great design is not just seen, but felt.",
    image: "/images/image 76.png",
    mobileImage: "/images/mobile_image 76.png",
    socials: {
      linkedin: "#",
      upwork: "#",
      twitter: "#",
    },
  },
];

export default function TeamSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotClick = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api]
  );

  useEffect(() => {
    if (!api) return;

    setScrollSnaps(api.scrollSnapList());

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", () => {
      setScrollSnaps(api.scrollSnapList());
      onSelect();
    });

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]" style={{ backgroundColor: "var(--global-bg)" }}>
      <div className="w-full max-w-[1440px]">
        {/* Header */}
        <div className="mb-12 text-left">
          <h2
            className="text-[40px] lg:text-[64px] font-[700] lg:font-[600] leading-normal lg:leading-[58px] text-white mb-3"
            style={{ fontFamily: "Inter", maxWidth: "572px" }}
          >
            The Minds Behind
            <br />
            the Mission
          </h2>
          <p
            className="text-[#FFF] lg:text-[#D2D2D2] text-[16px] font-normal leading-[24px]"
            style={{ fontFamily: "Inter", maxWidth: "768px" }}
          >
            We are a collective of strategists, creatives, and engineers united
            by a passion for building brands that matter.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {teamMembers.map((member) => (
              <CarouselItem
                key={member.id}
                className="pl-4 basis-1/2 lg:basis-1/3"
              >
                <div className="relative group">
                  {/* Card - flex column with gap: 32px */}
                  <div
                    className="flex flex-col items-start gap-[32px]"
                    style={{ backgroundColor: "transparent" }}
                  >
                    {/* Image with gradient background */}
                    <div
                      className="relative w-full aspect-square rounded-[20px] overflow-hidden"
                      style={{
                        background: "linear-gradient(180deg, #D0FF71 0%, var(--global-bg) 100%)",
                      }}
                    >
                      {/* Mobile Image */}
                      <Image
                        src={member.mobileImage}
                        alt={member.name}
                        fill
                        className="object-cover lg:hidden"
                      />
                      {/* Desktop Image */}
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover hidden lg:block"
                      />
                    </div>

                    {/* Content - flex column with gap: 32px between text and icons */}
                    <div className="flex flex-col items-start gap-[32px]" style={{ backgroundColor: "transparent" }}>
                      {/* Text content */}
                      <div className="flex flex-col gap-[8px]">
                        <h3
                          className="text-[24px] font-medium leading-[28px] text-white"
                          style={{ fontFamily: "Inter" }}
                        >
                          {member.name}
                        </h3>
                        <p
                          className="text-[16px] font-normal leading-[24px] text-[#D2D2D2]"
                          style={{ fontFamily: "Inter" }}
                        >
                          {member.title}
                        </p>
                        <p
                          className="text-[16px] font-normal leading-[24px] text-[#D2D2D2] mt-2"
                          style={{ fontFamily: "Inter" }}
                        >
                          ~{member.quote}
                        </p>
                      </div>

                      {/* Social Icons - #D0FF71 green */}
                      <div className="flex gap-3">
                        {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            className="text-[#D0FF71] hover:text-[#c5f55e] transition-colors"
                            aria-label="LinkedIn"
                          >
                            <Linkedin size={24} fill="currentColor" />
                          </a>
                        )}
                        {member.socials.upwork && (
                          <a
                            href={member.socials.upwork}
                            className="text-[#D0FF71] hover:text-[#c5f55e] transition-colors"
                            aria-label="Upwork"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-.955.873-2.517 2.839-2.517 1.491 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.159-2.704 2.159zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                            </svg>
                          </a>
                        )}
                        {member.socials.twitter && (
                          <a
                            href={member.socials.twitter}
                            className="text-[#D0FF71] hover:text-[#c5f55e] transition-colors"
                            aria-label="Twitter"
                          >
                            <Twitter size={24} fill="currentColor" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation - Dots left, Arrows right */}
          <div className="flex justify-between items-center mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-[#D0FF71]" : "bg-gray-600"
                  }`}
                  onClick={() => onDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-[24px]">
              <CarouselPrevious className="static translate-y-0 h-[48px] w-[48px] rounded-[40px] bg-transparent border-white text-white hover:bg-white/10" />
              <CarouselNext className="static translate-y-0 h-[48px] w-[48px] rounded-[40px] bg-transparent border-white text-white hover:bg-white/10" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
