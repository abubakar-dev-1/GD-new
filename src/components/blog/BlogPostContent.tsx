"use client";

import Image from "next/image";
import { InlineWidget } from "react-calendly";

export default function BlogPostContent() {
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
          className="flex flex-col items-start gap-[32px] flex-1 min-w-0 lg:max-w-[776px]"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          {/* Introduction Heading */}
          <h2
            className="text-[#FFF] text-[32px] font-[500] leading-[38px]"
            style={{ fontFamily: "Inter" }}
          >
            Introduction
          </h2>

          {/* Paragraph */}
          <p className="text-[#FFF] text-[16px] font-[400] leading-[24px]">
            Next.js is a React framework that enables several extra features,
            including server-side rendering and generating static websites.
            React is a JavaScript library that is traditionally used to build
            web applications rendered in the client&apos;s browser with
            JavaScript. Developers recognize several problems with this
            strategy however, so several solutions were created to also render
            React applications on the server side. Next.js is one such
            solution to this problem. It provides a best developer experience
            with many built-in features, like file-based routing and API
            routes.
          </p>

          {/* Inline Image with Caption */}
          <figure className="w-full flex flex-col gap-[12px]">
            <div
              className="relative w-full h-[414px] rounded-[28px] overflow-hidden border border-[#555]"
            >
              <Image
                src="/images/image 54.png"
                alt="Next.js Framework"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="text-[#D0FF71] text-[14px] font-[400] leading-[20px]">
              Source: Next Js
            </figcaption>
          </figure>

          {/* Bold Paragraph */}
          <p className="text-[#FFF] text-[16px] font-[700] leading-[24px]">
            Next.js has quickly become one of the most popular frameworks for
            building modern web applications. Its ability to combine the best
            of both static and dynamic rendering makes it a versatile tool
            for developers of all skill levels.
          </p>

          {/* Regular Paragraph */}
          <p className="text-[#FFF] text-[16px] font-[400] leading-[24px]">
            With built-in support for TypeScript, CSS modules, and API routes,
            Next.js offers a comprehensive development experience. The
            framework&apos;s automatic code splitting ensures that your
            application loads quickly, delivering only the JavaScript needed
            for each page. This results in faster page loads and a better user
            experience overall.
          </p>

          {/* Blockquote */}
          <blockquote className="w-full pl-[24px] py-[20px] pr-[24px] rounded-[8px] border-l-[4px] border-l-[#D0FF71] bg-[#191919]">
            <p className="text-[#F3F4F6] text-[16px] font-[400] leading-[24px] italic">
              &ldquo;Next.js gives you the best developer experience with all
              the features you need for production: hybrid static & server
              rendering, TypeScript support, smart bundling, route
              pre-fetching, and more. No config needed.&rdquo;
            </p>
          </blockquote>

          {/* Another Paragraph */}
          <p className="text-[#FFF] text-[16px] font-[400] leading-[24px]">
            The framework also excels in its approach to data fetching. With
            getStaticProps and getServerSideProps, developers can choose
            exactly when and how data is fetched for each page. This
            flexibility allows for optimal performance without sacrificing the
            dynamic nature of modern web applications. Whether you&apos;re
            building a blog, an e-commerce platform, or a complex dashboard,
            Next.js provides the tools you need.
          </p>

          {/* Second Image */}
          <figure className="w-full flex flex-col gap-[12px]">
            <div
              className="relative w-full h-[414px] rounded-[28px] overflow-hidden border border-[#555]"
            >
              <Image
                src="/images/image 54.png"
                alt="Next.js Development"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="text-[#D0FF71] text-[14px] font-[400] leading-[20px]">
              Source: Next Js
            </figcaption>
          </figure>

          {/* More text */}
          <p className="text-[#FFF] text-[16px] font-[400] leading-[24px]">
            One of the most powerful features of Next.js is its support for
            incremental static regeneration (ISR). This allows developers to
            update static content after deployment without rebuilding the
            entire site. Combined with its edge runtime capabilities, Next.js
            ensures that your application can scale globally while maintaining
            excellent performance.
          </p>

          {/* Conclusion Heading */}
          <h2
            className="text-[#FFF] text-[32px] font-[500] leading-[38px]"
            style={{ fontFamily: "Inter" }}
          >
            Conclusion
          </h2>

          {/* Conclusion Paragraph */}
          <p className="text-[#FFF] text-[16px] font-[400] leading-[24px]">
            Next.js continues to evolve and push the boundaries of what&apos;s
            possible with React. Whether you&apos;re a beginner just starting
            your web development journey or an experienced developer looking
            for a powerful framework, Next.js has something to offer. Its
            growing ecosystem, excellent documentation, and strong community
            support make it an ideal choice for building modern web
            applications.
          </p>
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
