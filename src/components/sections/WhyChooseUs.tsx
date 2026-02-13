"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
  iconPath: string;
}

const stats: Stat[] = [
  {
    id: 1,
    value: 17,
    suffix: "+",
    label: "Projects Delivered",
    iconPath: "/Frame_folder.svg",
  },
  {
    id: 2,
    value: 97,
    suffix: "+",
    label: "Products Launched",
    iconPath: "/Frame_rocket.svg",
  },
  {
    id: 3,
    value: 5,
    suffix: "+",
    label: "Years of Experience",
    iconPath: "/Frame_calender.svg",
  },
  {
    id: 4,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    iconPath: "/Frame(3).svg",
  },
];

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(target: number, duration: number, start: boolean): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setCount(Math.round(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    }

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

function StatItem({ stat, animate }: { stat: Stat; animate: boolean }) {
  const count = useCountUp(stat.value, 2000, animate);

  return (
    <div
      className="flex flex-col items-center lg:items-start justify-center p-[24px] lg:p-[32px] gap-[24px] lg:gap-[32px] lg:border-l lg:border-[#D0FF71] backdrop-blur-[10px] overflow-hidden"
    >
      {/* Icon */}
      <div className="w-[24px] h-[24px] flex items-center justify-center">
        <Image
          src={stat.iconPath}
          alt={stat.label}
          width={24}
          height={24}
        />
      </div>

      {/* Number + Label */}
      <div className="flex flex-col gap-[8px] w-full">
        <h3
          className="text-[#FFF] text-[40px] lg:text-[64px] font-[700] lg:font-[600] leading-normal lg:leading-[58px] text-center lg:text-left w-full"
          style={{ fontFamily: "Inter" }}
        >
          {count}{stat.suffix}
        </h3>
        <p
          className="text-[#FFF] text-[16px] font-[600] leading-[24px] text-center lg:text-left w-full"
          style={{ fontFamily: "Inter" }}
        >
          {stat.label}
        </p>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "var(--global-bg)" }}
    >
      <div className="flex flex-col items-center lg:items-start justify-start w-full max-w-[1280px] gap-[32px]">
        {/* Header */}
        <div className="flex flex-col items-center lg:items-start justify-start gap-4 w-full">
          <h2
            className="text-[#FFF] text-[28px] lg:text-[64px] font-[500] lg:font-[600] leading-normal lg:leading-[58px] text-center lg:text-left"
            style={{ fontFamily: "Inter" }}
          >
            Why Choose Us
          </h2>
          <p
            className="text-[#FFF] text-[16px] font-[400] leading-[24px] max-w-[360px] lg:max-w-[505px] text-center lg:text-left"
            style={{ fontFamily: "Inter" }}
          >
            Discover the stories behind some of our most successful and
            innovative digital experiences.
          </p>
        </div>

        {/* Stats Container */}
        <div className="w-full rounded-[28px] p-0 lg:p-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
            {stats.map((stat) => (
              <StatItem key={stat.id} stat={stat} animate={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
