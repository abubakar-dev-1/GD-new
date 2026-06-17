import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CareerHeroSection from "@/components/career/CareerHeroSection";
import OurProcess from "@/components/about/OurProcess";
import OurValues from "@/components/about/OurValues";
import OpenPositions from "@/components/career/OpenPositions";
import CareerFAQ from "@/components/career/CareerFAQ";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { careerPageQuery, jobPostingsQuery } from "../../../sanity/lib/queries";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Gamma Developers — a remote-first team of creators, strategists, and engineers building exceptional digital products. See our open positions.",
  alternates: { canonical: "/career" },
};

// Fallback process steps (used when the Career Page document has none)
const defaultCareerSteps = [
  {
    number: "01",
    title: "Submit Application",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet.",
    icon: "/iconoir_design-nib-solid.svg",
  },
  {
    number: "02",
    title: "Expert Evaluation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet.",
    icon: "/brackets.svg",
  },
  {
    number: "03",
    title: "Personal Interview",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet.",
    icon: "/Frame_rocket.svg",
  },
  {
    number: "04",
    title: "Seamless Onboarding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet.",
    icon: "/Frame_rocket.svg",
  },
];

interface SanityProcessStep {
  _key: string;
  number: string;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
}

interface SanityFaq {
  _key: string;
  question: string;
  answer: string;
}

interface SanityCareerPage {
  heroTitle?: string;
  heroDescription?: string;
  heroCtaText?: string;
  heroCtaSubtext?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  heroBackgroundDesktop?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  heroBackgroundMobile?: any;
  processHeading?: string;
  processDescription?: string;
  processSteps?: SanityProcessStep[];
  positionsHeading?: string;
  positionsDescription?: string;
  faqHeading?: string;
  faqDescription?: string;
  faqs?: SanityFaq[];
}

interface SanityJobPosting {
  _id: string;
  title: string;
  badge?: string;
  description: string;
  location?: string;
  type?: string;
  applyLink?: string;
}

export default async function CareerPage() {
  const [data, jobs]: [SanityCareerPage | null, SanityJobPosting[]] =
    await Promise.all([
      client.fetch(careerPageQuery),
      client.fetch(jobPostingsQuery),
    ]);

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

  const processSteps = data?.processSteps?.length
    ? data.processSteps.map((s) => ({
        number: s.number,
        title: s.title,
        description: s.description,
        icon: s.icon
          ? urlFor(s.icon).width(72).height(72).url()
          : "/iconoir_design-nib-solid.svg",
      }))
    : defaultCareerSteps;

  const positionsProps = {
    heading: data?.positionsHeading,
    description: data?.positionsDescription,
    positions: jobs?.length
      ? jobs.map((j) => ({
          id: j._id,
          title: j.title,
          badge: j.badge ?? "",
          description: j.description,
          location: j.location ?? "Remote",
          type: j.type ?? "Full-Time",
          applyLink: j.applyLink ?? "/contact",
        }))
      : undefined,
  };

  const faqProps = {
    heading: data?.faqHeading,
    description: data?.faqDescription,
    faqs: data?.faqs?.length
      ? data.faqs.map((f) => ({
          id: f._key,
          question: f.question,
          answer: f.answer,
        }))
      : undefined,
  };

  return (
    <div className="min-h-screen bg-[#090C08]">
      <Navbar />

      <CareerHeroSection {...heroProps} />
      <OurProcess
        heading={data?.processHeading}
        description={data?.processDescription}
        steps={processSteps}
      />
      <OurValues />
      <OpenPositions {...positionsProps} />
      <CareerFAQ {...faqProps} />

      <Footer />
    </div>
  );
}
