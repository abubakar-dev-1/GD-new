import Image from "next/image";

export default function WhyChooseUs() {
  const stats = [
    {
      id: 1,
      number: "17+",
      label: "Projects Delivered",
      iconPath: "/Frame_folder.svg",
    },
    {
      id: 2,
      number: "97+",
      label: "Products Launched",
      iconPath: "/Frame_rocket.svg",
    },
    {
      id: 3,
      number: "5+",
      label: "Years of Experience",
      iconPath: "/Frame_calender.svg",
    },
    {
      id: 4,
      number: "100%",
      label: "Client Satisfaction",
      iconPath: "/Frame(3).svg",
    },
  ];

  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "var(--global-bg)" }}
    >
      <div className="flex flex-col items-center lg:items-start justify-start w-full max-w-[1440px] gap-[32px]">
        {/* Header - Mobile: centered, Desktop: left-aligned */}
        <div className="flex flex-col items-center lg:items-start justify-start gap-4 w-full">
          <h2
            className="text-[#FFF] text-[32px] lg:text-[64px] font-[600] leading-[36px] lg:leading-[58px] text-center lg:text-left"
            style={{ fontFamily: "Inter" }}
          >
            Why Choose Us
          </h2>
          {/* Description - Mobile: 16px/400/24px, centered, max-w-360px */}
          <p
            className="text-[#FFF] text-[16px] font-[400] leading-[24px] max-w-[360px] lg:max-w-[600px] text-center lg:text-left"
            style={{ fontFamily: "Inter" }}
          >
            Discover the stories behind some of our most successful and
            innovative digital experiences.
          </p>
        </div>

        {/* Stats Grid - Mobile: 1 col centered, Desktop: 4 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[24px] lg:gap-[32px] w-full max-w-[340px] lg:max-w-none">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center lg:items-start justify-center lg:justify-start p-[24px] lg:p-[32px] gap-[12px] lg:gap-[16px] self-stretch backdrop-blur-[10px]"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
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

              {/* Number - Mobile: 40px/700, Desktop: 64px/600 */}
              <h3
                className="text-[#FFF] text-[40px] lg:text-[64px] font-[700] lg:font-[600] leading-normal lg:leading-[58px] text-center lg:text-left w-full"
                style={{ fontFamily: "Inter" }}
              >
                {stat.number}
              </h3>

              {/* Label - Mobile: 16px/600/24px centered */}
              <p
                className="text-[#FFF] text-[16px] font-[600] leading-[24px] text-center lg:text-left w-full"
                style={{ fontFamily: "Inter" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
