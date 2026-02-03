"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const companies = [
  {
    name: "Google Cloud",
    logo: "/trusted_by/Google-Cloud.svg.svg",
    width: 140,
    height: 40,
  },
  {
    name: "GSV Ventures",
    logo: "/trusted_by/GSV-Ventures.svg.svg",
    width: 120,
    height: 40,
  },
  {
    name: "Pepsico",
    logo: "/trusted_by/Pepsico.svg.svg",
    width: 120,
    height: 40,
  },
  {
    name: "Staq",
    logo: "/trusted_by/Staq.svg.svg",
    width: 100,
    height: 40,
  },
];

// Separator component
const Separator = () => (
  <div
    className="w-[1px] h-[10px] bg-[#D2D2D2] flex-shrink-0 mx-6"
    aria-hidden="true"
  />
);

// Logo item component
const LogoItem = ({ company }: { company: typeof companies[0] }) => (
  <div className="flex items-center">
    <Image
      src={company.logo}
      alt={company.name}
      width={company.width}
      height={company.height}
      className="object-contain"
    />
    <Separator />
  </div>
);

export default function TrustedBy() {
  return (
    <section className="w-full py-8 bg-[#000]">
      {/* Heading */}
      <h2
        className="text-center text-white text-[14px] font-semibold tracking-wider mb-6 uppercase"
        style={{ fontFamily: "Inter" }}
      >
        TRUSTED BY
      </h2>

      {/* Logo Container with Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade image */}
        <div className="absolute left-0 top-0 bottom-0 w-[100px] md:w-[150px] z-10 pointer-events-none">
          <Image
            src="/trusted_by/Container.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Right fade image */}
        <div className="absolute right-0 top-0 bottom-0 w-[100px] md:w-[150px] z-10 pointer-events-none">
          <Image
            src="/trusted_by/Container(1).svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Marquee */}
        <Marquee
          pauseOnHover
          className="[--duration:30s] [--gap:0px] h-[100px] items-center"
        >
          {companies.map((company) => (
            <LogoItem key={company.name} company={company} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
