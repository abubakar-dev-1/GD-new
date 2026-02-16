"use client";

import Link from "next/link";

interface JobPosition {
  id: string;
  title: string;
  badge: string;
  description: string;
  location: string;
  type: string;
  applyLink: string;
}

const positions: JobPosition[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    badge: "Web Developer",
    description:
      "We're looking for a seasoned Frontend Developer to build beautiful, responsive, and high-performance web applications. You will work with modern frameworks like React and Vue.js, collaborate closely with our design team to implement pixel-perfect UIs, and mentor junior developers.",
    location: "Remote",
    type: "Full-Time",
    applyLink: "/career/apply",
  },
  {
    id: "2",
    title: "Senior Frontend Developer",
    badge: "Web Developer",
    description:
      "We're looking for a seasoned Frontend Developer to build beautiful, responsive, and high-performance web applications. You will work with modern frameworks like React and Vue.js, collaborate closely with our design team to implement pixel-perfect UIs, and mentor junior developers.",
    location: "Remote",
    type: "Full-Time",
    applyLink: "/career/apply",
  },
  {
    id: "3",
    title: "Senior Frontend Developer",
    badge: "Web Developer",
    description:
      "We're looking for a seasoned Frontend Developer to build beautiful, responsive, and high-performance web applications. You will work with modern frameworks like React and Vue.js, collaborate closely with our design team to implement pixel-perfect UIs, and mentor junior developers.",
    location: "Remote",
    type: "Full-Time",
    applyLink: "/career/apply",
  },
];

// Location pin icon
const LocationIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 10.625C11.3807 10.625 12.5 9.50571 12.5 8.125C12.5 6.74429 11.3807 5.625 10 5.625C8.61929 5.625 7.5 6.74429 7.5 8.125C7.5 9.50571 8.61929 10.625 10 10.625Z"
      stroke="#D0FF71"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 17.5C13.3333 14.1667 16.25 11.2548 16.25 8.125C16.25 4.6042 13.4518 1.875 10 1.875C6.54822 1.875 3.75 4.6042 3.75 8.125C3.75 11.2548 6.66667 14.1667 10 17.5Z"
      stroke="#D0FF71"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Clock icon
const ClockIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
      stroke="#D0FF71"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 5.625V10H13.75"
      stroke="#D0FF71"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function JobCard({ position }: { position: JobPosition }) {
  return (
    <Link
      href={position.applyLink}
      className="flex flex-col items-start gap-[16px] min-[375px]:gap-[24px] lg:gap-[32px] p-[16px] min-[375px]:p-[24px] lg:p-[32px] rounded-[20px] bg-[#191919] border border-[#333] self-stretch"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Top: Title (left) + Badge (right) */}
      <div className="flex items-start justify-between w-full gap-[16px]">
        <h3
          className="text-[#FFF] text-[20px] min-[375px]:text-[24px] font-[700] leading-[140%]"
          style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}
        >
          {position.title}
        </h3>
        <span className="inline-flex items-center flex-shrink-0 px-[16px] py-[6px] rounded-[40px] bg-[#293D00] text-[#D0FF71] text-[14px] font-[500] leading-[20px]">
          {position.badge}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-[#FFF] text-[16px] font-[400] leading-[150%]"
        style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}
      >
        {position.description}
      </p>

      {/* Tags */}
      <div className="flex items-center gap-[24px]">
        <div className="flex items-center gap-[8px]">
          <LocationIcon />
          <span className="text-[#FFF] text-[14px] font-[400] leading-[20px]">
            {position.location}
          </span>
        </div>
        <div className="flex items-center gap-[8px]">
          <ClockIcon />
          <span className="text-[#FFF] text-[14px] font-[400] leading-[20px]">
            {position.type}
          </span>
        </div>
      </div>

      {/* Apply Now Button */}
      <span
        className="flex items-center h-[44px] gap-[8px] min-[375px]:gap-[12px] pl-[16px] min-[375px]:pl-[24px] pr-[20px] min-[375px]:pr-[32px] py-[8px] rounded-[40px] bg-[#D0FF71] hover:bg-[#c5f55e] transition-colors"
      >
        <span className="w-[8px] h-[8px] rounded-full bg-[#000000]" />
        <span className="text-[#000000] text-[14px] font-[500] leading-[16px]">
          Apply Now
        </span>
      </span>
    </Link>
  );
}

export default function OpenPositions() {
  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "#000" }}
    >
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[32px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-[12px] text-center">
          <h2
            className="text-[#FFF] text-[32px] min-[375px]:text-[40px] lg:text-[64px] font-[600] leading-[40px] min-[375px]:leading-[48px] lg:leading-[58px]"
            style={{ fontFamily: "Inter" }}
          >
            Open Positions
          </h2>
          <p
            className="text-[#FFF] text-[18px] font-[400] leading-[150%] max-w-[796px] text-center"
            style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}
          >
            Join our team of passionate creators, strategists, and engineers.
            We&apos;re looking for talented individuals who want to build exceptional
            digital products that make a difference.
          </p>
        </div>

        {/* Job Cards */}
        <div className="flex flex-col items-start gap-[20px] lg:gap-[24px] w-full">
          {positions.map((position) => (
            <JobCard key={position.id} position={position} />
          ))}
        </div>
      </div>
    </section>
  );
}
