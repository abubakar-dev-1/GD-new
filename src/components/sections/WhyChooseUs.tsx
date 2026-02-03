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
    <section className="w-full flex justify-center py-[80px]" style={{ backgroundColor: "var(--global-bg)" }}>
      <div className="flex flex-col items-start justify-start w-full max-w-[1440px] px-[48px] gap-[32px]">
        {/* Header */}
        <div className="flex flex-col items-start justify-start gap-4 w-full">
          <h2
            className="text-[#FFF] text-[64px] font-[600] leading-[58px]"
            style={{ fontFamily: "Inter" }}
          >
            Why Choose Us
          </h2>
          <p
            className="text-[#FFF] text-[16px] font-[400] leading-[24px] max-w-[600px]"
            style={{ fontFamily: "Inter" }}
          >
            Discover the stories behind some of our most successful and
            innovative digital experiences.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] w-full max-w-[1200px]">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-start justify-start p-[32px] bg-[#000] gap-[16px]"
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

              {/* Number */}
              <h3
                className="text-[#FFF] text-[64px] font-[600] leading-[58px]"
                style={{ fontFamily: "Inter" }}
              >
                {stat.number}
              </h3>

              {/* Label */}
              <p
                className="text-[#FFF] text-[16px] font-[600] leading-[24px]"
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
