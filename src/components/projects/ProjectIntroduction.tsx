import Image from "next/image";

interface ProjectIntroductionProps {
  heading?: string;
  description?: string;
  image?: string;
}

export default function ProjectIntroduction({
  heading = "Introduction",
  description = "Gamma Developers recently partnered with [Client Name], a leading [Client's Industry] company based in [Client's Location/Region], to transform their digital footprint and drive significant growth. Faced with challenges such as [mention 1-2 key challenges the client faced, e.g., outdated website, poor user experience, low engagement], [Client Name] sought a dynamic and innovative solution to [mention the client's main goals, e.g., modernize their brand image, improve user engagement, increase conversions].",
  image = "/portfolio/image 36.png",
}: ProjectIntroductionProps) {
  return (
    <section
      className="w-full flex justify-center py-[48px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="w-full max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] lg:gap-[64px] items-end">
          {/* Left — Text */}
          <div className="flex flex-col gap-[16px] text-white">
            <h2 className="text-[24px] lg:text-[32px] font-medium leading-[30px] lg:leading-[38px]">
              {heading}
            </h2>
            <p className="text-[14px] lg:text-[16px] font-normal leading-[26px] lg:leading-[32px]">
              {description}
            </p>
          </div>

          {/* Right — Image */}
          <div
            className="relative w-full rounded-[16px] lg:rounded-[20px] overflow-hidden"
            style={{ aspectRatio: "1504 / 855" }}
          >
            <Image
              src={image}
              alt={heading}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
