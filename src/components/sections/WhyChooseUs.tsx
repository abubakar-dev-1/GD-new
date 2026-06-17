import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { whyChooseUsQuery } from "../../../sanity/lib/queries";
import WhyChooseUsView, { Stat } from "./WhyChooseUsView";

interface SanityStat {
  _key: string;
  value: number;
  suffix?: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
}

interface SanityWhyChooseUs {
  heading?: string;
  description?: string;
  stats?: SanityStat[];
}

export default async function WhyChooseUs() {
  const data: SanityWhyChooseUs | null = await client.fetch(whyChooseUsQuery);

  // No Sanity doc yet — render with built-in defaults
  if (!data || !data.stats?.length) {
    return (
      <WhyChooseUsView heading={data?.heading} description={data?.description} />
    );
  }

  const stats: Stat[] = data.stats.map((s) => ({
    id: s._key,
    value: s.value,
    suffix: s.suffix ?? "",
    label: s.label,
    iconPath: s.icon
      ? urlFor(s.icon).width(48).height(48).url()
      : "/Frame_folder.svg",
  }));

  return (
    <WhyChooseUsView
      heading={data.heading}
      description={data.description}
      stats={stats}
    />
  );
}
