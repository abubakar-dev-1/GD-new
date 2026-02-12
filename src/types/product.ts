import { SanityImageRef } from "./service";

export interface ProductFeatureItem {
  _key?: string;
  icon?: SanityImageRef;
  title: string;
  description: string;
}

export interface ProductHighlightItem {
  _key?: string;
  image: SanityImageRef;
  title: string;
  description: string;
}

export interface ProductOverviewCardItem {
  _key?: string;
  icon?: SanityImageRef;
  text: string;
}

export interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  coverImage: SanityImageRef;
  mobileCoverImage?: SanityImageRef;
  logo?: SanityImageRef;
  tags?: string[];
  link: string;
  order: number;

  // Detail page fields
  featuresHeading?: string;
  featuresDescription?: string;
  features?: ProductFeatureItem[];
  showcaseHeading?: string;
  showcaseDescription?: string;
  showcaseImages?: SanityImageRef[];
  showcaseVideoUrl?: string;
  highlightsHeading?: string;
  highlightsDescription?: string;
  highlights?: ProductHighlightItem[];
  overviewHeading?: string;
  overviewDescription?: string;
  overviewImages?: SanityImageRef[];
  overviewCards?: ProductOverviewCardItem[];
}
