import Link from "next/link";
import NewsletterForm from "@/components/ui/NewsletterForm";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center bg-[#000] py-[40px] lg:py-[48px] px-[20px] lg:px-0">
      <div className="flex flex-col items-start lg:items-center w-full max-w-[1440px] lg:px-[48px] gap-[72px] lg:gap-[96px]">
        {/* Top Section - Mobile: stacked, Desktop: 3 Columns */}
        <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between w-full gap-[48px] lg:gap-8">
          {/* Left Column - Logo and Address */}
          <div className="flex flex-col items-start gap-[16px]">
            <Link
              href="/"
              className="font-[600] text-[34.595px] leading-normal"
              style={{ fontFamily: "Inter" }}
            >
              <span className="text-[#D0FF71]">G</span>
              <span className="text-[#FFF]">D.</span>
            </Link>
            <p
              className="text-[#FFF] text-[16px] font-[600] leading-[24px]"
              style={{ fontFamily: "Inter" }}
            >
              152 Thatcher Road St, Mahattan, NY 10463, US
            </p>
          </div>

          {/* Middle Column - Contact and Social */}
          <div className="flex flex-col items-start gap-[16px]">
            <h4
              className="text-[#FFF] text-[16px] font-[600] leading-[24px]"
              style={{ fontFamily: "Inter" }}
            >
              general inquiries
            </h4>
            <a
              href="mailto:@gammadevelopers.com"
              className="text-[#FFF] text-[16px] font-[400] leading-[24px] hover:text-[#D0FF71] transition-colors"
              style={{ fontFamily: "Inter" }}
            >
              @gammadevelopers.com
            </a>
            {/* Social Icons */}
            <div className="flex items-center gap-[16px]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFF] hover:text-[#D0FF71] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFF] hover:text-[#D0FF71] transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFF] hover:text-[#D0FF71] transition-colors"
                aria-label="Twitter/X"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFF] hover:text-[#D0FF71] transition-colors"
                aria-label="Dribbble"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm8.5 6.5c1.438 1.75 2.312 3.969 2.438 6.375-2.313-.5-4.563-.625-6.688-.438-.187-.437-.375-.875-.562-1.312 2.437-1 4.437-2.438 5.812-4.625zM12 2.062c2.438 0 4.688.875 6.438 2.313-1.188 1.937-3 3.25-5.188 4.125-1.312-2.438-2.75-4.5-4.313-6.188C9.875 2.188 10.937 2.062 12 2.062zM6.688 3.25c1.5 1.625 2.937 3.625 4.25 6 .062.125.125.25.187.375-3.562 1-7.5 1.5-11.062 1.563.5-3.438 2.562-6.375 5.625-7.938zm-4.626 9.75v-.437c3.812-.063 8-.562 11.813-1.688.188.375.375.75.562 1.125-4.812 1.5-8.75 4.875-10.875 9.125-1.625-1.75-2.625-4.063-2.625-6.563 0-.562.063-1.125.125-1.562zm3.938 8.062c1.875-3.812 5.437-6.875 9.75-8.25.687 1.75 1.187 3.625 1.5 5.563-2.125.625-4.375.938-6.75.938-1.687 0-3.312-.188-4.875-.625 0-.187.063-.375.063-.562-.25 0-.437 0-.688-.062zm11.062 1c-.312-1.688-.75-3.312-1.312-4.812 1.75-.187 3.625-.063 5.625.312C21 19.562 19.25 21.25 17.062 22.062z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Newsletter Subscription */}
          <div className="flex flex-col items-start gap-[16px] w-full lg:w-auto">
            <h3
              className="text-[#FFF] text-[40px] font-[700] leading-normal w-full lg:w-[480px]"
              style={{ fontFamily: "Inter" }}
            >
              Subscribe to our newsletter
            </h3>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Section - Copyright and Links */}
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-[16px] lg:gap-4">
            <p
              className="text-[#F3F4F6] text-[14px] font-[400] leading-[20px]"
              style={{ fontFamily: "Inter" }}
            >
              ©2025 Gamma Developers. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-[24px] lg:gap-6">
              <Link
                href="/career"
                className="text-[#F3F4F6] text-[14px] font-[400] leading-[20px] hover:text-[#D0FF71] transition-colors"
                style={{ fontFamily: "Inter" }}
              >
                Career
              </Link>
              <Link
                href="/privacy-policy"
                className="text-[#F3F4F6] text-[14px] font-[400] leading-[20px] hover:text-[#D0FF71] transition-colors"
                style={{ fontFamily: "Inter" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#F3F4F6] text-[14px] font-[400] leading-[20px] hover:text-[#D0FF71] transition-colors"
                style={{ fontFamily: "Inter" }}
              >
                Terms and Agreements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
