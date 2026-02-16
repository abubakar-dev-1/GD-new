import { client } from "../../../sanity/lib/client";
import { testimonialsQuery } from "../../../sanity/lib/queries";
import { urlFor } from "../../../sanity/lib/image";
import Testimonials from "./Testimonials";
import type { TestimonialItem } from "./Testimonials";

interface SanityTestimonial {
  _id: string;
  company: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  companyLogo: any;
  rating: number;
  quote: string;
  authorName: string;
  authorTitle: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  authorImage: any;
  order: number;
}

function transformTestimonial(t: SanityTestimonial, index: number): TestimonialItem {
  return {
    id: index + 1,
    company: t.company,
    companyLogo: t.companyLogo
      ? urlFor(t.companyLogo).width(160).height(80).url()
      : "/Frame(1).svg",
    rating: t.rating,
    quote: t.quote,
    author: {
      name: t.authorName,
      title: t.authorTitle,
      image: t.authorImage
        ? urlFor(t.authorImage).width(96).height(96).url()
        : "/images/Avatar Image.svg",
    },
  };
}

export default async function TestimonialsWrapper() {
  const sanityTestimonials: SanityTestimonial[] | null = await client.fetch(testimonialsQuery);

  if (sanityTestimonials && sanityTestimonials.length > 0) {
    const testimonials = sanityTestimonials.map(transformTestimonial);
    return <Testimonials testimonials={testimonials} />;
  }

  // No Sanity data — render with default mock data
  return <Testimonials />;
}
