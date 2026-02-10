import Image from "next/image";

interface ProjectChallengesProps {
  title?: string;
  description?: string;
  images?: string[];
}

export default function ProjectChallenges({
  title = "The Challenge 1",
  description = "Delving deeper into the specifics, [Client Name]'s existing digital infrastructure presented several key areas for improvement. Their website suffered from [elaborate on a specific challenge, e.g., an inconsistent design language, a clunky navigation system, slow loading times]. This resulted in [explain the negative impact,",
  images = [
    "/portfolio/image 36.png",
    "/portfolio/image 36.png",
    "/portfolio/image 36.png",
  ],
}: ProjectChallengesProps) {
  return (
    <section
      className="w-full flex justify-center py-[48px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="w-full max-w-[1280px]">
        {/* Mobile: stacked layout */}
        <div className="flex flex-col gap-[32px] lg:hidden">
          <div className="flex flex-col gap-[10px] text-white">
            <h2 className="text-[28px] font-bold leading-[36px]">{title}</h2>
            <p className="text-[14px] font-normal leading-[26px]">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-[24px]">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative w-full rounded-[16px] overflow-hidden"
                style={{ aspectRatio: "1 / 1" }}
              >
                <Image
                  src={src}
                  alt={`${title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 2-column with sticky text */}
        <div className="hidden lg:flex gap-[64px] items-start">
          {/* Left — Scrolling images */}
          <div className="flex-1 flex flex-col gap-[180px]">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative w-full rounded-[20px] overflow-hidden"
                style={{ aspectRatio: "1 / 1" }}
              >
                <Image
                  src={src}
                  alt={`${title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right — Sticky text */}
          <div className="flex-1 self-stretch">
            <div className="sticky top-0 h-[608px] flex flex-col justify-center gap-[10px] text-white">
              <h2 className="text-[40px] font-bold leading-[48px]">{title}</h2>
              <p className="text-[16px] font-normal leading-[32px]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
