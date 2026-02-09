"use client";

const values = [
  {
    title: "Radical Transparency",
    description:
      "We operate with absolute clarity. You get honest timelines, direct access to our team, and complete visibility into our progress. We believe the best results come from open communication.",
  },
  {
    title: "Purposeful Craftsmanship",
    description:
      "We are obsessed with quality, from pixel-perfect design to elegant, scalable code. Every detail is intentionally crafted not just to function flawlessly, but to provide a seamless and delightful user experience that stands the test of time.",
  },
  {
    title: "True Partnership",
    description:
      "Your goals become our goals. We integrate with your team, challenge assumptions, and contribute strategic insights to build the best possible product. We succeed when you succeed—we\u2019re not just a vendor; we\u2019re your dedicated digital partner.",
  },
];

export default function OurValues() {
  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "#000" }}
    >
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[32px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-[12px] text-center">
          <h2
            className="text-[#FFF] text-[40px] lg:text-[64px] font-[600] leading-[48px] lg:leading-[58px]"
            style={{ fontFamily: "Inter" }}
          >
            Our Values
          </h2>
          <p
            className="text-[#FFF] text-[16px] font-[400] leading-[24px] max-w-[500px]"
            style={{ fontFamily: "Inter" }}
          >
            The beliefs that shape our work and our commitment to your success.
          </p>
        </div>

        {/* Cards Container - 1280px, padding 32px, rounded 28px, bg #191919 */}
        <div
          className="w-full rounded-[28px] p-[20px] lg:p-[32px] flex flex-col lg:flex-row items-stretch gap-[20px] lg:gap-[32px]"
          style={{
            background: "#191919",
            boxShadow:
              "0 1px 2px 0 rgba(0, 0, 0, 0.30), 0 1px 3px 1px rgba(0, 0, 0, 0.15)",
          }}
        >
          {values.map((value) => (
            <div
              key={value.title}
              className="relative flex flex-col justify-center items-start gap-[40px] lg:gap-[80px] p-[24px] lg:p-[48px_24px] flex-1 self-stretch rounded-[28px] overflow-hidden"
              style={{
                background: "rgba(45, 45, 45, 0.50)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Green glow at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center bottom, rgba(208, 255, 113, 0.25) 0%, transparent 70%)",
                }}
              />
              <h3
                className="relative text-[#FFF] text-[20px] lg:text-[24px] font-[500] leading-normal lg:leading-[28px]"
                style={{ fontFamily: "Inter" }}
              >
                {value.title}
              </h3>
              <p
                className="relative text-[#FFF] text-[14px] lg:text-[16px] font-[400] leading-[22px] lg:leading-[24px]"
                style={{ fontFamily: "Inter" }
              }
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
