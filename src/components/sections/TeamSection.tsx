import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { teamSectionQuery } from "../../../sanity/lib/queries";
import TeamSectionView, { TeamMember } from "./TeamSectionView";

interface SanityTeamMember {
  _key: string;
  name: string;
  title?: string;
  quote?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mobileImage?: any;
  linkedin?: string;
  upwork?: string;
  twitter?: string;
}

interface SanityTeamSection {
  heading?: string;
  description?: string;
  members?: SanityTeamMember[];
}

export default async function TeamSection() {
  const data: SanityTeamSection | null = await client.fetch(teamSectionQuery);

  // No Sanity doc yet — render with built-in defaults
  if (!data || !data.members?.length) {
    return <TeamSectionView heading={data?.heading} description={data?.description} />;
  }

  const members: TeamMember[] = data.members.map((m) => {
    const desktop = m.image
      ? urlFor(m.image).width(600).height(600).url()
      : "/images/image 76.png";
    return {
      id: m._key,
      name: m.name,
      title: m.title ?? "",
      quote: m.quote ?? "",
      image: desktop,
      mobileImage: m.mobileImage
        ? urlFor(m.mobileImage).width(400).height(400).url()
        : desktop,
      socials: {
        linkedin: m.linkedin,
        upwork: m.upwork,
        twitter: m.twitter,
      },
    };
  });

  return (
    <TeamSectionView
      heading={data.heading}
      description={data.description}
      members={members}
    />
  );
}
