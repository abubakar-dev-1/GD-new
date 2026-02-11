export interface SanityImageRef {
  asset: { _ref: string; _type: "reference" };
  alt?: string;
}

export interface ProcessStep {
  _key?: string;
  title: string;
  description: string;
}

export interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  coverImage: SanityImageRef;
  mobileCoverImage?: SanityImageRef;
  icon?: SanityImageRef;
  order: number;
  heroTitle?: string;
  heroDescription?: string;
  heroImage?: SanityImageRef;
  mobileHeroImage?: SanityImageRef;
  processHeading?: string;
  processDescription?: string;
  processSteps?: ProcessStep[];
}
