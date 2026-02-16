interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  heading?: string;
  description?: string;
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    title: "Idea & Goal",
    description:
      "Define the problem, who it's for, and what success looks like (clear outcomes and KPIs).",
  },
  {
    title: "Requirements",
    description:
      'Capture functional needs ("what it must do") and non-functional needs (performance, security, compliance).',
  },
  {
    title: "Architecture & Technical Design",
    description:
      "Choose stack, design system components/APIs, data models, and quality/security standards.",
  },
  {
    title: "Implementation",
    description:
      "Code to the stories with peer reviews; keep changes small and frequent.",
  },
  {
    title: "Testing",
    description:
      "Run unit, integration, end-to-end, performance, and security tests; fix defects fast.",
  },
  {
    title: "Deployment",
    description:
      "Automate deploys to staging → production; verify with smoke tests and monitoring.",
  },
];

export default function ServiceProcess({
  heading = "Process for Developing software",
  description = "We are a collective of strategists, creatives, and engineers united by a passion for building brands that matter.",
  steps = defaultSteps,
}: ServiceProcessProps) {
  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "#000" }}
    >
      <div
        className="flex flex-col items-center w-full max-w-[1280px] gap-[32px]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-[16px] text-center">
          <h2 className="text-[#FFFFFF] text-[32px] min-[375px]:text-[40px] lg:text-[64px] font-[600] leading-[40px] min-[375px]:leading-[48px] lg:leading-[58px] max-w-[648px]">
            {heading}
          </h2>
          <p className="text-[#FFFFFF] text-[16px] font-[400] leading-[24px] max-w-[592px]">
            {description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[32px] w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#191919] rounded-[20px] p-[16px] min-[375px]:p-[24px] lg:h-[366px] lg:justify-between"
            >
              {/* Number circle */}
              <div className="w-[48px] h-[48px] rounded-full bg-[#D0FF71] flex items-center justify-center">
                <span className="text-[#090C08] text-[28px] font-bold leading-[34px]">
                  {index + 1}
                </span>
              </div>

              {/* Spacer: 128px on mobile, auto on desktop (justify-between) */}
              <div className="h-[128px] lg:hidden" />

              {/* Text content */}
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[#FFFFFF] text-[28px] font-medium leading-[34px]">
                  {step.title}
                </h3>
                <p className="text-[#FFFFFF] text-[16px] font-normal leading-[24px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
