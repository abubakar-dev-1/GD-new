"use client";

import Image from "next/image";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const defaultSteps: Step[] = [
  {
    number: "01",
    title: "Design & Discovery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet.",
    icon: "/iconoir_design-nib-solid.svg",
  },
  {
    number: "02",
    title: "Develop & Build",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet.",
    icon: "/brackets.svg",
  },
  {
    number: "03",
    title: "Launch & Grow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet.",
    icon: "/Frame_rocket.svg",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet.",
    icon: "/Frame_rocket.svg",
  },
];

function StepIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-[80px] h-[80px] rounded-full bg-[#293D00] flex items-center justify-center flex-shrink-0 z-10">
      <Image src={src} alt={alt} width={36} height={36} />
    </div>
  );
}

const LINE_GRADIENT =
  "linear-gradient(180deg, #191919 43.23%, #D0FF71 100%)";

export default function OurProcess({ steps = defaultSteps }: { steps?: Step[] }) {
  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "#000" }}
    >
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[40px] lg:gap-[64px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-[16px] text-center">
          <h2
            className="text-[#FFF] text-[40px] lg:text-[64px] font-[600] leading-[48px] lg:leading-[58px]"
            style={{ fontFamily: "Inter" }}
          >
            Our Process
          </h2>
          <p
            className="text-[#888] text-[16px] font-[400] leading-[24px] max-w-[500px]"
            style={{ fontFamily: "Inter" }}
          >
            The Drew! Hall of Fame: Featuring brands from around the world and
            projects of all shapes and sizes.
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:flex flex-col w-full max-w-[900px]">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const isLast = index === steps.length - 1;

            const numberEl = (
              <span
                className="w-[119px] h-[190px] flex items-center justify-center text-[128px] font-[600] leading-normal text-[#191919] select-none"
                style={{
                  fontFamily: "var(--font-oswald), Oswald, sans-serif",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#444",
                }}
              >
                {step.number}
              </span>
            );

            const cardEl = (
              <div
                className="flex flex-col items-start gap-[32px] p-[24px] rounded-[16px] w-full max-w-[436px]"
                style={{ background: "#191919" }}
              >
                <h3
                  className="text-[#FFF] text-[28px] font-[500] leading-[34px]"
                  style={{ fontFamily: "Inter" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[#FFF] text-[16px] font-[400] leading-normal"
                  style={{ fontFamily: "Inter" }}
                >
                  {step.description}
                </p>
              </div>
            );

            return (
              <div
                key={step.number}
                className="flex w-full min-h-[459px]"
              >
                {/* Left side */}
                <div className="flex-1 flex justify-end items-center pr-[40px]">
                  {isEven ? numberEl : cardEl}
                </div>

                {/* Center column */}
                <div className="relative flex flex-col items-center justify-center flex-shrink-0 self-stretch">
                  {/* Single smooth line to next sphere — no split, no seam */}
                  {!isLast && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-[8px] h-[459px] rounded-full"
                      style={{
                        top: "50%",
                        backgroundImage: LINE_GRADIENT,
                      }}
                    />
                  )}
                  {/* Icon sits on top of the line */}
                  <StepIcon src={step.icon} alt={step.title} />
                </div>

                {/* Right side */}
                <div className="flex-1 flex justify-start items-center pl-[40px]">
                  {isEven ? cardEl : numberEl}
                </div>
              </div>
            );
          })}
        </div>

        {/* Cards - Mobile */}
        <div className="flex lg:hidden flex-col w-full gap-[20px]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-start gap-[32px] p-[24px] rounded-[16px] w-full"
              style={{ background: "#191919" }}
            >
              {/* Top row - Icon + Number */}
              <div className="flex items-center justify-between w-full">
                <div className="w-[80px] h-[80px] rounded-full bg-[#293D00] flex items-center justify-center flex-shrink-0">
                  <Image src={step.icon} alt={step.title} width={36} height={36} />
                </div>
                <span
                  className="text-[60px] font-[600] leading-normal select-none"
                  style={{
                    fontFamily: "var(--font-oswald), Oswald, sans-serif",
                    color: "#191919",
                    textAlign: "center",
                    WebkitTextStrokeWidth: "1px",
                    WebkitTextStrokeColor: "#444",
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-[#FFF] text-[28px] font-[500] leading-[34px]"
                style={{ fontFamily: "Inter" }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="text-[#FFF] text-[16px] font-[400] leading-normal"
                style={{ fontFamily: "Inter" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
