import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { client } from "../../../sanity/lib/client";
import { termsAndConditionsQuery } from "../../../sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Terms and Conditions | Gamma Developers",
  description:
    "Read the terms and conditions governing your use of Gamma Developers website and services.",
};

interface TermsSection {
  _key?: string;
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  afterListText?: string;
  contactEmail?: string;
  contactAddress?: string;
}

interface TermsData {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: TermsSection[];
}

// Fallback data used when no Sanity document exists
const fallbackData: TermsData = {
  title: "Terms and Conditions",
  lastUpdated: "February 2025",
  intro:
    "Welcome to Gamma Developers. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms. Please read them carefully before using our services.",
  sections: [
    {
      title: "Acceptance of Terms",
      paragraphs: [
        "By accessing, browsing, or using the Gamma Developers website or any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy.",
        "If you do not agree with any part of these terms, you must not use our website or services. We reserve the right to modify these terms at any time, and your continued use of the website constitutes acceptance of any changes.",
      ],
    },
    {
      title: "Services",
      paragraphs: [
        "Gamma Developers provides software development, design, and related technology services. The specific scope, deliverables, timelines, and fees for any project will be defined in a separate service agreement or statement of work between Gamma Developers and the client.",
        "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of our services.",
      ],
    },
    {
      title: "Intellectual Property",
      paragraphs: [
        "All content on the Gamma Developers website — including but not limited to text, graphics, logos, icons, images, audio clips, software, and design elements — is the property of Gamma Developers or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws.",
        "Unless otherwise specified in a separate written agreement:",
      ],
      bulletPoints: [
        "All pre-existing intellectual property remains the property of the respective party",
        "Upon full payment, clients receive a license to use deliverables as specified in the service agreement",
        "Gamma Developers retains the right to use general knowledge, skills, and experience gained during a project",
        "Gamma Developers may showcase completed work in portfolios and marketing materials unless explicitly restricted by a written agreement",
      ],
    },
    {
      title: "User Conduct",
      paragraphs: [
        "When using our website and services, you agree not to:",
      ],
      bulletPoints: [
        "Use our website for any unlawful purpose or in violation of any applicable laws or regulations",
        "Attempt to gain unauthorized access to any part of our website, servers, or networks",
        "Interfere with or disrupt the integrity or performance of our website or services",
        "Upload, transmit, or distribute any viruses, malware, or other harmful code",
        "Collect or harvest personal information of other users without their consent",
        "Reproduce, duplicate, copy, sell, or exploit any portion of our website without express written permission",
      ],
      afterListText:
        "We reserve the right to terminate or restrict your access to our website if you violate any of these terms.",
    },
    {
      title: "Confidentiality",
      paragraphs: [
        "Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of a project. This includes, but is not limited to, business plans, technical specifications, financial information, and any other materials marked as confidential.",
        "This obligation of confidentiality shall survive the termination of any agreement between the parties and shall remain in effect for a period of two (2) years following the completion or termination of services.",
      ],
    },
    {
      title: "Payment Terms",
      paragraphs: [
        "Payment terms for our services are outlined in the applicable service agreement or statement of work. Unless otherwise specified:",
      ],
      bulletPoints: [
        "Invoices are due within 30 days of the invoice date",
        "Late payments may incur interest at a rate of 1.5% per month or the maximum rate permitted by law",
        "Gamma Developers reserves the right to suspend work on any project with overdue payments",
        "All fees are non-refundable unless otherwise stated in the service agreement",
      ],
    },
    {
      title: "Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by applicable law, Gamma Developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business opportunities, or goodwill, arising out of or in connection with the use of our website or services.",
        "Our total liability for any claims arising from or related to our services shall not exceed the total fees paid by the client for the specific project or service giving rise to the claim.",
      ],
    },
    {
      title: "Warranties and Disclaimers",
      paragraphs: [
        'Our website and services are provided on an "as is" and "as available" basis. Gamma Developers makes no representations or warranties of any kind, express or implied, regarding the operation of our website, the accuracy of information provided, or the results of our services.',
        "While we strive to deliver high-quality work, we do not warrant that our services will be uninterrupted, error-free, or completely secure. Any reliance on our website content or services is at your own risk.",
      ],
    },
    {
      title: "Termination",
      paragraphs: [
        "Either party may terminate a service engagement as specified in the applicable service agreement. In the absence of specific termination provisions:",
      ],
      bulletPoints: [
        "Either party may terminate with 30 days written notice",
        "Gamma Developers may terminate immediately if the client breaches these terms or fails to make payments",
        "Upon termination, the client shall pay for all work completed up to the date of termination",
        "Provisions relating to intellectual property, confidentiality, and limitation of liability shall survive termination",
      ],
    },
    {
      title: "Governing Law",
      paragraphs: [
        "These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.",
        "Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in New York, NY. Both parties agree to submit to the personal jurisdiction of such courts.",
      ],
    },
    {
      title: "Contact Us",
      paragraphs: [
        "If you have any questions about these Terms and Conditions, please contact us at:",
      ],
      contactEmail: "gammadevelopers.com",
      contactAddress: "152 Thatcher Road St, Manhattan, NY 10463, US",
    },
  ],
};

export default async function TermsPage() {
  const sanityData: TermsData | null =
    await client.fetch(termsAndConditionsQuery);

  const data = sanityData?.sections?.length ? sanityData : fallbackData;

  return (
    <div className="min-h-screen bg-[#000000]">
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
