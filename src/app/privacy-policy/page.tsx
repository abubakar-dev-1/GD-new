import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { client } from "../../../sanity/lib/client";
import { privacyPolicyQuery } from "../../../sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Privacy Policy | Gamma Developers",
  description:
    "Learn how Gamma Developers collects, uses, and protects your personal information.",
};

interface PolicySection {
  _key?: string;
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  afterListText?: string;
  contactEmail?: string;
  contactAddress?: string;
}

interface PolicyData {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: PolicySection[];
}

// Fallback data used when no Sanity document exists
const fallbackData: PolicyData = {
  title: "Privacy Policy",
  lastUpdated: "February 2025",
  intro:
    "At Gamma Developers, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
  sections: [
    {
      title: "Information We Collect",
      paragraphs: [
        "We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, request a consultation, or communicate with us via email or other channels.",
        "This may include your name, email address, phone number, company name, job title, and any other information you choose to provide.",
        "We also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits.",
      ],
    },
    {
      title: "How We Use Your Information",
      paragraphs: [
        "We use the information we collect to provide, maintain, and improve our services, to communicate with you about projects, services, and promotions, and to respond to your inquiries and requests.",
        "Specifically, we may use your information to:",
      ],
      bulletPoints: [
        "Process and fulfill service requests and project inquiries",
        "Send you technical notices, updates, and administrative messages",
        "Provide customer support and respond to your questions",
        "Send marketing communications, such as newsletters and service updates (you can opt out at any time)",
        "Monitor and analyze trends, usage, and activities to improve our website and services",
        "Detect, investigate, and prevent fraudulent transactions and other illegal activities",
      ],
    },
    {
      title: "Cookies and Tracking Technologies",
      paragraphs: [
        "We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activity on our website. Cookies are small data files stored on your device that help us improve your experience and understand how our website is used.",
        "You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. However, disabling cookies may affect the functionality of certain parts of our website.",
      ],
    },
    {
      title: "Third-Party Services",
      paragraphs: [
        "We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or providing services to you. These providers are contractually obligated to keep your information confidential and use it only for the purposes for which we disclose it to them.",
        "We may also use third-party analytics services (such as Google Analytics) to help us understand how visitors use our website. These services may collect information about your use of our website through cookies and similar technologies.",
        "We do not sell, trade, or otherwise transfer your personal information to outside parties for marketing purposes.",
      ],
    },
    {
      title: "Data Security",
      paragraphs: [
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure server infrastructure, and regular security assessments.",
        "While we strive to protect your personal information, no method of transmission over the Internet or method of electronic storage is 100% secure. We cannot guarantee absolute security of your data.",
      ],
    },
    {
      title: "Data Retention",
      paragraphs: [
        "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. When your information is no longer needed, we will securely delete or anonymize it.",
      ],
    },
    {
      title: "Your Rights",
      paragraphs: [
        "Depending on your location, you may have certain rights regarding your personal information, including:",
      ],
      bulletPoints: [
        "The right to access the personal information we hold about you",
        "The right to request correction of inaccurate or incomplete information",
        "The right to request deletion of your personal information",
        "The right to object to or restrict the processing of your information",
        "The right to data portability",
        "The right to withdraw consent at any time where we rely on consent to process your information",
      ],
      afterListText:
        "To exercise any of these rights, please contact us using the information provided below. We will respond to your request within a reasonable timeframe.",
    },
    {
      title: "Children's Privacy",
      paragraphs: [
        "Our website and services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information promptly.",
      ],
    },
    {
      title: "Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on this page with a revised effective date. We encourage you to review this page periodically.",
      ],
    },
    {
      title: "Contact Us",
      paragraphs: [
        "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:",
      ],
      contactEmail: "gammadevelopers.com",
      contactAddress: "152 Thatcher Road St, Manhattan, NY 10463, US",
    },
  ],
};

export default async function PrivacyPolicyPage() {
  const sanityData: PolicyData | null =
    await client.fetch(privacyPolicyQuery);

  const data = sanityData?.sections?.length ? sanityData : fallbackData;

  return (
    <div className="min-h-screen bg-[#090C08]">
      <Navbar />

      {/* Hero */}
      <section
        className="w-full flex justify-center pt-[120px] lg:pt-[160px] pb-[40px] lg:pb-[64px] px-[20px] lg:px-[10px]"
        style={{ backgroundColor: "#000" }}
      >
        <div className="flex flex-col gap-[16px] items-start w-full max-w-[880px]">
          <h1
            className="text-[#FFFFFF] text-[40px] lg:text-[64px] font-bold leading-normal lg:leading-[72px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {data.title}
          </h1>
          <p
            className="text-[#999] text-[16px] font-normal leading-[24px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Last updated: {data.lastUpdated}
          </p>
          <p
            className="text-[#CCC] text-[18px] font-normal leading-[28px] max-w-[720px]"
            style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif" }}
          >
            {data.intro}
          </p>
        </div>
      </section>

      {/* Content */}
      <section
        className="w-full flex justify-center pb-[80px] lg:pb-[120px] px-[20px] lg:px-[10px]"
        style={{ backgroundColor: "#000" }}
      >
        <div className="flex flex-col gap-[48px] lg:gap-[64px] w-full max-w-[880px]">
          {data.sections.map((section, index) => (
            <div key={section._key || index} className="flex flex-col gap-[16px]">
              {/* Section number + title */}
              <div className="flex items-baseline gap-[12px]">
                <span
                  className="text-[#D0FF71] text-[16px] font-semibold leading-[24px] shrink-0"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2
                  className="text-[#FFFFFF] text-[24px] lg:text-[32px] font-semibold leading-[32px] lg:leading-[40px]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {section.title}
                </h2>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-[#222]" />

              {/* Paragraphs */}
              <div className="flex flex-col gap-[16px] pl-[0px] lg:pl-[44px]">
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-[#CCC] text-[16px] font-normal leading-[26px]"
                    style={{
                      fontFamily: "var(--font-roboto), Roboto, sans-serif",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}

                {/* Bullet list */}
                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="flex flex-col gap-[10px] pl-[20px]">
                    {section.bulletPoints.map((item, lIndex) => (
                      <li
                        key={lIndex}
                        className="text-[#CCC] text-[16px] font-normal leading-[26px] list-disc marker:text-[#D0FF71]"
                        style={{
                          fontFamily: "var(--font-roboto), Roboto, sans-serif",
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* After list paragraph */}
                {section.afterListText && (
                  <p
                    className="text-[#CCC] text-[16px] font-normal leading-[26px]"
                    style={{
                      fontFamily: "var(--font-roboto), Roboto, sans-serif",
                    }}
                  >
                    {section.afterListText}
                  </p>
                )}

                {/* Contact info */}
                {section.contactEmail && (
                  <div className="flex flex-col gap-[8px] mt-[8px]">
                    <a
                      href={`mailto:@${section.contactEmail}`}
                      className="text-[#D0FF71] text-[16px] font-medium leading-[26px] hover:underline"
                      style={{
                        fontFamily: "var(--font-roboto), Roboto, sans-serif",
                      }}
                    >
                      @{section.contactEmail}
                    </a>
                    {section.contactAddress && (
                      <p
                        className="text-[#CCC] text-[16px] font-normal leading-[26px]"
                        style={{
                          fontFamily: "var(--font-roboto), Roboto, sans-serif",
                        }}
                      >
                        {section.contactAddress}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
