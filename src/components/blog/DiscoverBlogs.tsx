"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  date: string;
  link: string;
}

export default function DiscoverBlogs({ posts = [] }: { posts?: BlogPost[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "var(--global-bg)" }}
    >
      <div className="w-full max-w-[1440px]">
        {/* Header */}
        <div className="mb-12 text-left">
          <h2
            className="text-[40px] lg:text-[64px] font-[700] lg:font-[600] leading-normal lg:leading-[58px] text-white mb-3"
            style={{ fontFamily: "Inter" }}
          >
            Discover
          </h2>
          <p
            className="text-[#D2D2D2] text-[16px] font-normal leading-[24px] max-w-[400px]"
            style={{ fontFamily: "Inter" }}
          >
            The Drewl Hall of Fame: Featuring brands from around the world and
            projects of all shapes and sizes.
          </p>
        </div>

        {posts.length === 0 ? (
          <p
            className="text-[#D2D2D2] text-base font-normal"
            style={{ fontFamily: "Inter" }}
          >
            No blog posts available yet. Check back soon!
          </p>
        ) : (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {posts.map((post) => (
                <CarouselItem
                  key={post.id}
                  className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className="flex flex-col items-start gap-[16px] lg:gap-[24px] p-[12px] lg:p-[16px] rounded-[16px] lg:rounded-[20px] bg-[#191919] h-full"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {/* Cover Image */}
                    <div className="relative w-full rounded-[12px] lg:rounded-[16px] overflow-hidden" style={{ aspectRatio: "16/10" }}>
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-[#FFF] text-[16px] sm:text-[20px] lg:text-[24px] font-[600] leading-[22px] sm:leading-[28px]">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#D2D2D2] text-[13px] sm:text-[14px] font-[400] leading-[18px] sm:leading-[20px] line-clamp-2 sm:line-clamp-3">
                      {post.description}
                    </p>

                    {/* Bottom: Button + Date */}
                    <div className="flex items-center justify-between w-full mt-auto">
                      <Link
                        href={post.link}
                        className="flex items-center h-[40px] gap-[12px] pl-[20px] pr-[24px] py-[8px] rounded-[40px] border border-[#444] hover:bg-[#222] transition-colors"
                      >
                        <span className="w-[6px] h-[6px] rounded-full bg-[#FFF]" />
                        <span className="text-[#FFF] text-[13px] font-[500] leading-[16px]">
                          View More
                        </span>
                      </Link>
                      <span className="text-[#D2D2D2] text-[13px] font-[400] leading-[20px]">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <div className="flex justify-center md:justify-end items-center gap-4 mt-8">
              {/* Dots */}
              <div className="flex gap-2">
                {posts.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-[#D0FF71]" : "bg-gray-600"
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
        )}
      </div>
    </section>
  );
}
