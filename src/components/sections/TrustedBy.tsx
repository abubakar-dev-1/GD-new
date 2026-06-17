import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { trustedByQuery } from "../../../sanity/lib/queries";
import TrustedByView, { TrustedLogo } from "./TrustedByView";

interface SanityLogo {
  _key: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logo?: any;
  width?: number;
  height?: number;
}

interface SanityTrustedBy {
  heading?: string;
  logos?: SanityLogo[];
}

export default async function TrustedBy() {
  const data: SanityTrustedBy | null = await client.fetch(trustedByQuery);

  // No Sanity doc yet — render with built-in defaults
  if (!data || !data.logos?.length) {
    return <TrustedByView heading={data?.heading} />;
  }

  const logos: TrustedLogo[] = data.logos.map((l) => {
    const width = l.width ?? 120;
    const height = l.height ?? 40;
    return {
      name: l.name,
      logo: l.logo
        ? urlFor(l.logo).width(width * 2).height(height * 2).url()
        : "/trusted_by/Staq.svg.svg",
      width,
      height,
    };
  });

  return <TrustedByView heading={data.heading} logos={logos} />;
}
