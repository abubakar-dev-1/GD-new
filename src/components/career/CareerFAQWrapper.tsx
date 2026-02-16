import { client } from "../../../sanity/lib/client";
import { faqsQuery } from "../../../sanity/lib/queries";
import CareerFAQ from "./CareerFAQ";
import type { FAQItem } from "./CareerFAQ";

interface SanityFAQ {
  _id: string;
  question: string;
  answer: string;
  order: number;
}

export default async function CareerFAQWrapper() {
  const sanityFaqs: SanityFAQ[] | null = await client.fetch(faqsQuery);

  if (sanityFaqs && sanityFaqs.length > 0) {
    const faqs: FAQItem[] = sanityFaqs.map((f, i) => ({
      id: `faq-${i + 1}`,
      question: f.question,
      answer: f.answer,
    }));
    return <CareerFAQ faqs={faqs} />;
  }

  // No Sanity data — render with default mock data
  return <CareerFAQ />;
}
