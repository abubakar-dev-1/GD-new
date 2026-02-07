"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "What is the interview process like?",
    answer:
      "Our interview process is designed to be a collaborative two-way conversation. It typically starts with an introductory call to get to know you, followed by a technical or portfolio review where you can showcase your work. The final stage is a cultural fit interview with team members you'd be working with. We value your time, so we aim to keep the process transparent and efficient, usually spanning 1-2 weeks.",
  },
  {
    id: "faq-2",
    question: "What kind of culture are you building?",
    answer:
      "We are building a culture of curiosity, craftsmanship, and collaboration. We are a team of passionate builders and designers who are obsessed with quality. We encourage open communication, provide a high degree of autonomy, and believe in empowering every team member to do their best work. We work hard, but we also prioritize a healthy work-life balance.",
  },
  {
    id: "faq-3",
    question: "Do you offer remote or hybrid work options?",
    answer:
      "Yes, we are a remote-first company. We believe that exceptional talent isn't confined to a single location. We have team members collaborating from different cities and time zones. While we have office hubs for those who prefer in-person environment, you have the flexibility to work from wherever you are most productive.",
  },
  {
    id: "faq-4",
    question: "What makes a candidate stand out?",
    answer:
      "We look for people who are not only skilled but also passionate and proactive. A strong portfolio that clearly articulates your role and the impact of your work is essential. Beyond that, we love candidates who show a genuine curiosity for their craft, a collaborative spirit, and a desire to solve complex problems. Show us a side project you're proud of or tell us about a challenge you overcame.",
  },
  {
    id: "faq-5",
    question: "What opportunities are there for professional growth?",
    answer:
      "Your growth is our growth. We provide an annual budget for professional development that you can use for courses, conferences, books, or certifications. We also conduct regular performance reviews and create personalized career development plans. You'll have opportunities to work on diverse, challenging projects and learn from senior members of the team.",
  },
];

// Social media icons
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#FFF" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="5" stroke="#FFF" strokeWidth="1.5" />
    <circle cx="18" cy="6" r="1" fill="#FFF" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="2" y="9" width="4" height="12" stroke="#FFF" strokeWidth="1.5" />
    <circle cx="4" cy="4" r="2" stroke="#FFF" strokeWidth="1.5" />
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4L10.5 12.5L4 20H6L11.5 13.5L16 20H20L13.5 11.5L20 4H18L12.5 10.5L8 4H4Z" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DribbbleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#FFF" strokeWidth="1.5" />
    <path d="M8.56 2.75C12.93 8.78 14.58 12.17 16.59 20.47" stroke="#FFF" strokeWidth="1.5" />
    <path d="M19.13 5.09C15.22 9.14 10.84 10.44 2.18 10.32" stroke="#FFF" strokeWidth="1.5" />
    <path d="M21.75 12.84C16.52 11.55 12.58 12.07 6.88 15.99" stroke="#FFF" strokeWidth="1.5" />
  </svg>
);

export default function CareerFAQ() {
  return (
    <section
      className="w-full flex justify-center py-[40px] lg:py-[80px] px-[20px] lg:px-[10px]"
      style={{ backgroundColor: "#000" }}
    >
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-[40px] lg:gap-[80px]">
        {/* Left Column */}
        <div
          className="flex flex-col items-start gap-[24px] lg:gap-[32px] w-full lg:max-w-[380px] flex-shrink-0"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <h2 className="text-[#FFF] text-[40px] font-[700] leading-[120%]">
            FAQs
          </h2>
          <p className="text-[#FFF] text-[16px] font-[400] leading-[150%]">
            Everything you need to know about joining our team. If you have a
            question that isn&apos;t answered here, feel free to reach out.
          </p>

          {/* Connect with Us Button */}
          <Link
            href="/contact"
            className="flex items-center h-[44px] gap-[12px] pl-[24px] pr-[32px] py-[8px] rounded-[40px] bg-[#D0FF71] hover:bg-[#c5f55e] transition-colors"
          >
            <span className="w-[8px] h-[8px] rounded-full bg-[#000000]" />
            <span className="text-[#000000] text-[14px] font-[500] leading-[16px]">
              Connect with Us
            </span>
          </Link>

          {/* Social Links */}
          <div className="flex flex-col gap-[12px]">
            <span className="text-[#FFF] text-[14px] font-[500] leading-[20px]">
              Follow Us :
            </span>
            <div className="flex items-center gap-[16px]">
              <a href="#" aria-label="Instagram" className="text-[#FFF] hover:text-[#D0FF71] transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[#FFF] hover:text-[#D0FF71] transition-colors">
                <LinkedInIcon />
              </a>
              <a href="#" aria-label="X" className="text-[#FFF] hover:text-[#D0FF71] transition-colors">
                <XIcon />
              </a>
              <a href="#" aria-label="Dribbble" className="text-[#FFF] hover:text-[#D0FF71] transition-colors">
                <DribbbleIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Accordion */}
        <div className="flex-1">
          <Accordion
            type="multiple"
            defaultValue={["faq-1", "faq-2", "faq-3", "faq-4", "faq-5"]}
          >
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-[#333]"
              >
                <AccordionTrigger className="py-[20px] lg:py-[24px] text-[#FFF] text-[18px] font-[700] leading-[28px] [&>svg]:text-[#D0FF71]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#F3F4F6] text-[16px] font-[400] leading-[150%] pb-[20px] lg:pb-[24px]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
