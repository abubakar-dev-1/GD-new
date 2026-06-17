import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { testimonialsSectionQuery } from "../../../sanity/lib/queries";
import TestimonialsView, { Testimonial } from "./TestimonialsView";

interface SanityTestimonial {
  _key: string;
  company: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  companyLogo?: any;
  rating?: number;
  quote: string;
  authorName: string;
  authorTitle?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  authorImage?: any;
}

interface SanityTestimonialsSection {
  heading?: string;
  description?: string;
  testimonials?: SanityTestimonial[];
}

export default async function Testimonials() {
  const data: SanityTestimonialsSection | null = await client.fetch(
    testimonialsSectionQuery
  );

  // No Sanity doc yet — render with built-in defaults
  if (!data || !data.testimonials?.length) {
    return (
      <TestimonialsView heading={data?.heading} description={data?.description} />
    );
  }

  const testimonials: Testimonial[] = data.testimonials.map((t) => ({
    id: t._key,
    company: t.company,
    companyLogo: t.companyLogo
      ? urlFor(t.companyLogo).width(160).height(80).url()
      : "/Frame(1).svg",
    rating: t.rating ?? 5,
    quote: t.quote,
    author: {
      name: t.authorName,
      title: t.authorTitle ?? "",
      image: t.authorImage
        ? urlFor(t.authorImage).width(96).height(96).url()
        : "/images/Avatar Image.svg",
    },
  }));

  return (
    <TestimonialsView
      heading={data.heading}
      description={data.description}
      testimonials={testimonials}
    />
  );
}
