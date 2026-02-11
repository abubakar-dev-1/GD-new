import Image from "next/image";

interface ServiceTechStackProps {
  heading?: string;
  description?: string;
  image?: string;
}

export default function ServiceTechStack({
  heading = "Our Technology Stack",
  description = "We are a collective of strategists, creatives, and engineers united by a passion for building brands that matter.",
  image = "/services/tech-stack.png",
}: ServiceTechStackProps) {
  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "#000" }}
    >
      <div
        className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[64px] w-full max-w-[1280px]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {/* Text */}
        <div className="flex flex-col gap-[16px] w-full lg:flex-1">
          <h2 className="text-[#FFFFFF] text-[40px] lg:text-[64px] font-[600] leading-[48px] lg:leading-[58px]">
            {heading}
          </h2>
          <p className="text-[#FFFFFF] text-[16px] font-[400] leading-[24px] max-w-[592px]">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full lg:flex-1" style={{ aspectRatio: "289/303" }}>
          <Image
            src={image}
            alt="Technology Stack"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
