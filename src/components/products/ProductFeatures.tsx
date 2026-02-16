import Image from "next/image";

export interface Feature {
  icon?: string;
  title: string;
  description: string;
}

interface ProductFeaturesProps {
  heading?: string;
  description?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    title: "Daily Bonuses & Progressive Rewards",
    description:
      "Used by some of the world's largest companies, enables you to create.",
  },
  {
    title: "Seamless Online Multiplayer",
    description:
      "Used by some of the world's largest companies, enables you to create.",
  },
  {
    title: "Deep Strategic Gameplay",
    description:
      "Used by some of the world's largest companies, enables you to create.",
  },
  {
    title: "Fair & Secure Platform",
    description:
      "Used by some of the world's largest companies, enables you to create.",
  },
];

export default function ProductFeatures({
  heading = "Game Features",
  description = "Taash Royale is packed with features designed for both casual players and competitive pros. Here's what makes the game stand out.",
  features = defaultFeatures,
}: ProductFeaturesProps) {
  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[40px] px-[12px] min-[375px]:px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "#000", fontFamily: "Inter, sans-serif" }}
    >
      <div className="flex flex-col gap-[32px] items-start w-full max-w-[1280px]">
        {/* Header */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="text-[#FFFFFF] text-[32px] min-[375px]:text-[40px] lg:text-[64px] font-bold lg:font-semibold leading-normal lg:leading-[58px]">
            {heading}
          </h2>
          <p className="text-[#FFFFFF] text-[16px] font-normal leading-[24px] max-w-[500px]">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-[64px] lg:flex-row lg:items-center lg:gap-[38px] bg-[#191919] rounded-[28px] p-[24px] h-[272px] lg:h-auto overflow-hidden"
            >
              {/* Icon */}
              <div className="shrink-0 w-[48px] h-[48px] flex items-center justify-center">
                {feature.icon ? (
                  <Image
                    src={feature.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : (
                  <DefaultFeatureIcon index={index} />
                )}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[#FFFFFF] text-[24px] font-medium leading-[28px]">
                  {feature.title}
                </h3>
                <p className="text-[#FFFFFF] text-[16px] font-normal leading-[24px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Fallback icons when no Sanity icon is provided */
function DefaultFeatureIcon({ index }: { index: number }) {
  const icons = [
    // Gift / Rewards
    <svg key="gift" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 16H8V24H40V16Z" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36 24V40H12V24" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 16V40" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 16H17C15.6739 16 14.4021 15.4732 13.4645 14.5355C12.5268 13.5979 12 12.3261 12 11C12 9.67392 12.5268 8.40215 13.4645 7.46447C14.4021 6.52678 15.6739 6 17 6C22 6 24 16 24 16Z" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 16H31C32.3261 16 33.5979 15.4732 34.5355 14.5355C35.4732 13.5979 36 12.3261 36 11C36 9.67392 35.4732 8.40215 34.5355 7.46447C33.5979 6.52678 32.3261 6 31 6C26 6 24 16 24 16Z" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Swords / Multiplayer
    <svg key="swords" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 6L8 12L14 34L20 28" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 10L18 18" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34 6L40 12L34 34L28 28" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M38 10L30 18" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 30L14 42L24 36L34 42L30 30" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Strategy / Crosshair
    <svg key="strategy" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" stroke="#D0FF71" strokeWidth="2"/>
      <circle cx="24" cy="24" r="8" stroke="#D0FF71" strokeWidth="2"/>
      <path d="M24 4V12" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 36V44" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 24H12" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round"/>
      <path d="M36 24H44" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round"/>
    </svg>,
    // Shield / Security
    <svg key="shield" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 44C24 44 40 36 40 24V10L24 4L8 10V24C8 36 24 44 24 44Z" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 24L22 28L30 20" stroke="#D0FF71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
  ];

  return icons[index % icons.length];
}
