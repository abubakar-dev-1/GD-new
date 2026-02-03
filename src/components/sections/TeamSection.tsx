"use client";

import React, { useState } from "react";
import {
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
    socials: {
      linkedin: "#",
      upwork: "#",
      twitter: "#",
    },
  },
];

export default function TeamSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="w-full bg-black py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2
            className="text-[64px] font-semibold leading-[58px] text-white mb-3"
            style={{ fontFamily: "Inter", maxWidth: "572px" }}
          >
            The Minds Behind
            <br />
            the Mission
          </h2>
          <p
            className="text-[#D2D2D2] text-[16px] font-normal leading-[24px]"
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
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {teamMembers.map((member) => (
              <CarouselItem
                key={member.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative group">
                  {/* Card with gradient background */}
                  <div className="bg-gradient-to-b from-[#c4d82e] via-[#a8c920] to-transparent rounded-3xl overflow-hidden h-[500px] flex flex-col">
                    {/* Image */}
                    <div className="relative w-full h-[320px] overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between bg-black/10 backdrop-blur-sm">
                      <div>
                        <h3
                          className="text-[24px] font-medium leading-[28px] text-white mb-1"
                          style={{ fontFamily: "Inter" }}
                        >
                          {member.name}
                        </h3>
                        <p
                          className="text-[16px] font-normal leading-[24px] text-[#D2D2D2] mb-3"
                          style={{ fontFamily: "Inter" }}
                        >
                          {member.title}
                        </p>
                        <p
                          className="text-[16px] font-normal leading-[24px] text-[#D2D2D2]"
                          style={{ fontFamily: "Inter" }}
                        >
                          ~{member.quote}
                        </p>
                      </div>

                      {/* Social Icons */}
                      <div className="flex gap-3 mt-4">
                        {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            className="text-[#c4d82e] hover:text-[#a8c920] transition-colors"
                            aria-label="LinkedIn"
                          >
                            <Linkedin size={20} fill="currentColor" />
                          </a>
                        )}
                        {member.socials.upwork && (
                          <a
                            href={member.socials.upwork}
                            className="text-[#c4d82e] hover:text-[#a8c920] transition-colors"
                            aria-label="Upwork"
                          >
                            <svg
                              width="20"
                              height="20"
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
                            className="text-[#c4d82e] hover:text-[#a8c920] transition-colors"
                            aria-label="Twitter"
                          >
                            <Twitter size={20} fill="currentColor" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <div className="flex justify-center md:justify-end items-center gap-4 mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-[#c4d82e]" : "bg-gray-600"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-2">
              <CarouselPrevious className="static translate-y-0 bg-gray-900 border-gray-700 text-white hover:bg-gray-800" />
              <CarouselNext className="static translate-y-0 bg-gray-900 border-gray-700 text-white hover:bg-gray-800" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
