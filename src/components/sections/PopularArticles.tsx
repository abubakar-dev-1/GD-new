"use client";

import Image from "next/image";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  readTime: string;
  link: string;
}

const articles: Article[] = [
  {
    id: "1",
    title: "The React Framework for the Web",
    description:
      "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
    coverImage: "/image 54.png",
    tags: ["Design", "Website", "UI/UX"],
    readTime: "5 Min Read",
    link: "/blog/react-framework",
  },
  {
    id: "2",
    title: "The React Framework for the Web",
    description:
      "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
    coverImage: "/image 54.png",
    tags: ["Design", "Website", "UI/UX"],
    readTime: "5 Min Read",
    link: "/blog/react-framework-2",
  },
  {
    id: "3",
    title: "The React Framework for the Web",
    description:
      "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
    coverImage: "/image 54.png",
    tags: ["Design", "Website", "UI/UX"],
    readTime: "5 Min Read",
    link: "/blog/react-framework-3",
  },
];

{/* Horizontal Article Card - Figma specs */}
function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="flex flex-col md:flex-row items-start bg-[#191919] p-[24px] gap-[48px] rounded-[28px]">
      {/* Image Section - Left Side: width 370.7px, aspect-ratio 133/94, border-radius 20px */}
      <div
        className="relative w-full md:w-[370px] flex-shrink-0 rounded-[20px] overflow-hidden"
        style={{ aspectRatio: "133/94" }}
      >
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Content Section - Right Side */}
      <div className="flex flex-col gap-[24px] leading-normal justify-center flex-1">
        {/* Tags Row */}
        <div className="flex flex-wrap items-center gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-[12px] py-[4px] rounded-[16px] bg-[#D0FF71]/30 text-[#D0FF71] text-[13px] font-normal leading-[20px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {tag}
            </span>
          ))}
          <span
            className="px-[12px] py-[4px] rounded-[16px] bg-[#444444] text-[#FFFFFF] text-[13px] font-normal leading-[20px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-[32px] font-medium text-white"
          style={{ fontFamily: "Inter, sans-serif", lineHeight: "38px" }}
        >
          {article.title}
        </h3>

        {/* Description */}
        <p
          className="text-[16px] font-normal text-white"
          style={{ fontFamily: "Inter, sans-serif", lineHeight: "24px" }}
        >
          {article.description}
        </p>

        {/* Read More Button */}
        <Link
          href={article.link}
          className="inline-flex items-center h-[44px] gap-[12px] pl-[24px] pr-[32px] py-[8px] w-fit rounded-[40px] bg-[#FFFFFF] hover:bg-gray-100 transition-colors"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <span className="w-[8px] h-[8px] rounded-full bg-[#000000]" />
          <span className="text-[#000000] text-[14px] font-medium leading-[16px]">
            Read More
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function PopularArticles() {
  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "var(--global-bg)" }}
    >
      <div className="w-full max-w-[1440px] flex flex-col items-start">
        <div
          className="flex flex-col items-start w-full gap-12"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6">
          {/* Left: Title and Description */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-5xl md:text-[64px] font-semibold leading-[58px]">
              Popular Articles
            </h2>
            <p
              className="text-[#D2D2D2] text-base font-normal leading-relaxed max-w-[500px]"
              style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}
            >
              From global enterprises to emerging startups, our work is defined
              by a commitment to innovation and tangible results.
            </p>
          </div>

          {/* Right: View All Button */}
          <Link
            href="/blog"
            className="inline-flex items-center h-[44px] gap-3 px-6 py-2 rounded-full border border-[#444] text-white text-sm font-medium hover:bg-[#222] transition-colors"
          >
            View All Blogs
          </Link>
        </div>

        {/* Articles List */}
        <div className="flex flex-col gap-6 w-full">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
