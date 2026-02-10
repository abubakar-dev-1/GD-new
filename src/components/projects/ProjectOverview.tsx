import Image from "next/image";

interface Stat {
  value: string;
  label: string;
}

interface ProjectOverviewProps {
  stats?: Stat[];
  description?: string;
  image?: string;
}

const defaultStats: Stat[] = [
  { value: "17+", label: "Enterprise-Scale Projects Delivered" },
  { value: "97+", label: "Digital Products Launched Successfully" },
  { value: "5+", label: "Years of Experience Building Digital Products" },
  { value: "100%", label: "Commitment to Innovation and Client Satisfaction" },
];

const defaultDescription =
  "Delving deeper into the specifics, [Client Name]'s existing digital infrastructure presented several key areas for improvement. Their website suffered from [elaborate on a specific challenge, e.g., an inconsistent design language, a clunky navigation system, slow loading times]. This resulted in [explain the negative impact, e.g., a high bounce rate, difficulty in attracting new customers, a perception of being outdated]. Furthermore, their [mention another area like web application or branding] lacked [explain the deficiency, e.g., intuitive features, a cohesive visual identity]. Our team at [Your Agency Name] recognized the need for a comprehensive approach that addressed both the aesthetic and functional aspects of their digital presence.";

export default function ProjectOverview({
  stats = defaultStats,
  description = defaultDescription,
  image = "/portfolio/image 36.png",
}: ProjectOverviewProps) {
  return (
    <section
      className="w-full flex justify-center py-[48px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="flex flex-col gap-[24px] lg:gap-[32px] w-full max-w-[1280px]">
        {/* Stats Card */}
        <div
          className="w-full rounded-[20px] lg:rounded-[28px] overflow-hidden p-[16px] lg:p-[32px]"
          style={{
            boxShadow:
              "0px 1px 3px 1px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)",
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] lg:gap-[32px]">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center gap-[12px] lg:gap-[16px] p-[20px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] overflow-hidden backdrop-blur-[10px] text-center"
              >
                <p className="text-white text-[36px] lg:text-[64px] font-semibold leading-[42px] lg:leading-[58px]">
                  {stat.value}
                </p>
                <p className="text-white text-[13px] lg:text-[16px] font-semibold leading-[20px] lg:leading-[24px]">
                  {stat.label}
                </p>
                {/* Bottom glow decoration */}
                <div
                  className="absolute -bottom-[35px] left-0 w-full h-[76px] rounded-[50%] blur-[10px] pointer-events-none"
                  style={{ background: "#000000", opacity: 0.4 }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-white text-[14px] lg:text-[16px] font-normal leading-[26px] lg:leading-[32px]">
          {description}
        </p>

        {/* Full-width Image */}
        <div className="relative w-full rounded-[16px] lg:rounded-[20px] overflow-hidden h-[240px] lg:h-[450px]">
          <Image
            src={image}
            alt="Project showcase"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
