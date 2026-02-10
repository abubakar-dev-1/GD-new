export interface SanityImageRef {
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  coverImage: SanityImageRef;
  tags?: string[];
  countryFlag?: string;
  category: string;
  featured?: boolean;
  publishedAt: string;
  heroImages?: SanityImageRef[];
  introHeading?: string;
  introDescription?: string;
  introImage?: SanityImageRef;
  overviewDescription?: string;
  overviewImage?: SanityImageRef;
  challengeTitle?: string;
  challengeDescription?: string;
  challengeImages?: SanityImageRef[];
}
