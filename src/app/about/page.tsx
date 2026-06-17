import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import TrustedBy from "@/components/sections/TrustedBy";
import OurValues from "@/components/about/OurValues";
import OurProcess from "@/components/about/OurProcess";
import TeamSection from "@/components/sections/TeamSection";
import HiringBanner from "@/components/sections/HiringBanner";
import PhilosophyBanner from "@/components/about/PhilosophyBanner";
import BookingSection from "@/components/home/BookingSection";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { aboutPageQuery } from "../../../sanity/lib/queries";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the strategists, creatives, and engineers behind Gamma Developers. Learn about our values, our process, and how we partner with you to build products that matter.",
  alternates: { canonical: "/about" },
};

interface SanityValue {
  _key: string;
  title: string;
  description: string;
}

interface SanityProcessStep {
  _key: string;
  number: string;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
}

interface SanityAboutPage {
  heroTitle?: string;
  heroDescription?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  heroBackgroundDesktop?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  heroBackgroundMobile?: any;
  heroCtaText?: string;
  heroCtaSubtext?: string;
  valuesHeading?: string;
  valuesDescription?: string;
  values?: SanityValue[];
  processHeading?: string;
  processDescription?: string;
  processSteps?: SanityProcessStep[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  philosophyImage?: any;
  philosophyHighlight?: string;
  philosophyText?: string;
}

export default async function AboutPage() {
  const data: SanityAboutPage | null = await client.fetch(aboutPageQuery);

  const heroProps = {
    title: data?.heroTitle,
    description: data?.heroDescription,
    ctaText: data?.heroCtaText,
    ctaSubtext: data?.heroCtaSubtext,
    backgroundDesktop: data?.heroBackgroundDesktop
      ? urlFor(data.heroBackgroundDesktop).width(1440).height(600).url()
      : undefined,
    backgroundMobile: data?.heroBackgroundMobile
      ? urlFor(data.heroBackgroundMobile).width(800).height(800).url()
      : undefined,
  };

  const valuesProps = {
    heading: data?.valuesHeading,
    description: data?.valuesDescription,
    values: data?.values?.length
      ? data.values.map((v) => ({ title: v.title, description: v.description }))
      : undefined,
  };

  const processProps = {
    heading: data?.processHeading,
    description: data?.processDescription,
    steps: data?.processSteps?.length
      ? data.processSteps.map((s) => ({
          number: s.number,
          title: s.title,
          description: s.description,
          icon: s.icon
            ? urlFor(s.icon).width(72).height(72).url()
            : "/iconoir_design-nib-solid.svg",
        }))
      : undefined,
  };

  const philosophyProps = {
    image: data?.philosophyImage
      ? urlFor(data.philosophyImage).width(1440).height(600).url()
      : undefined,
    highlight: data?.philosophyHighlight,
    text: data?.philosophyText,
  };

  return (
    <div className="min-h-screen bg-[#090C08]">
      <Navbar />

      <AboutHeroSection {...heroProps} />
      <TrustedBy />
      <OurValues {...valuesProps} />
      <OurProcess {...processProps} />
      <TeamSection />
      <HiringBanner />
      <PhilosophyBanner {...philosophyProps} />
      <BookingSection />

      <Footer />
    </div>
  );
}
