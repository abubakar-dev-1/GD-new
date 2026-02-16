"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
    services: "",
    project: "",
    agreeToPolicy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section className="w-full flex justify-center py-[40px] lg:py-[80px] px-[12px] min-[375px]:px-[20px] lg:px-[10px]">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row lg:items-stretch gap-[24px]">
        {/* Left Side - Map & Contact Info */}
        <div
          className="flex flex-col p-[12px] min-[375px]:p-[20px] lg:p-[24px] gap-[16px] min-[375px]:gap-[24px] lg:gap-[32px] flex-1 order-2 lg:order-1 rounded-[28px] overflow-hidden"
          style={{
            border: "1px solid #618C6D",
            background: "rgba(0, 0, 0, 0.20)",
            backdropFilter: "blur(100px)",
          }}
        >
          {/* Map Card */}
          <div
            className="relative w-full min-h-[300px] lg:flex-1 rounded-[20px] lg:rounded-[28px] overflow-hidden border border-[#777]"
            style={{ isolation: "isolate" }}
          >
            <Image
              src="/image 97.png"
              alt="Location Map"
              fill
              className="object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-[24px] flex flex-col gap-[12px] lg:gap-[16px]"
              style={{
                background:
                  "linear-gradient(to top, #191919 0%, rgba(25,25,25,0) 55%)",
              }}
            >
              <h3
                className="text-[#FFF] text-[20px] lg:text-[24px] font-[600] lg:font-[500] leading-normal lg:leading-[28px]"
                style={{ fontFamily: "Inter" }}
              >
                Find Us Here
              </h3>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-fit px-[16px] lg:px-[24px] py-[10px] lg:py-[8px] lg:h-[48px] rounded-[40px] bg-[#FFF] text-[#090C08] text-[14px] font-[500] leading-[16px] hover:bg-[#D0FF71] transition-colors"
                style={{ fontFamily: "Inter" }}
              >
                View On Google Maps
              </a>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="flex flex-col gap-[32px]">
            {/* Row 1: stacked on mobile, side by side on desktop */}
            <div className="flex flex-col lg:flex-row gap-[32px]">
              {/* Phone Card — first on mobile, second on desktop */}
              <div
                className="flex flex-col justify-between items-start h-[120px] p-[16px_16px_16px_24px] rounded-[20px] lg:flex-1 order-1 lg:order-2"
                style={{
                  border: "1px solid #FFF",
                  background: "rgba(255, 255, 255, 0.10)",
                  backdropFilter: "blur(12.5px)",
                }}
              >
                <div className="w-[24px] h-[24px] flex items-center justify-center text-[#D0FF71]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span
                  className="text-[#FFF] text-[14px] lg:text-[16px] font-[400] lg:font-[600] leading-normal lg:leading-[24px]"
                  style={{ fontFamily: "Inter" }}
                >
                  +92 307 4593601
                </span>
              </div>

              {/* Email Card — second on mobile, first on desktop */}
              <div
                className="flex flex-col justify-between items-start h-[120px] p-[16px_16px_16px_24px] rounded-[20px] lg:flex-1 order-2 lg:order-1"
                style={{
                  border: "1px solid #FFF",
                  background: "rgba(255, 255, 255, 0.10)",
                  backdropFilter: "blur(12.5px)",
                }}
              >
                <div className="w-[24px] h-[24px] flex items-center justify-center text-[#D0FF71]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span
                  className="text-[#FFF] text-[14px] lg:text-[16px] font-[400] lg:font-[600] leading-normal lg:leading-[24px]"
                  style={{ fontFamily: "Inter" }}
                >
                  @gammadevelopers.com
                </span>
              </div>
            </div>

            {/* Row 2: Address (full width on both) */}
            <div
              className="flex flex-col justify-between items-start h-[120px] p-[16px_16px_16px_24px] rounded-[20px]"
              style={{
                border: "1px solid #FFF",
                background: "rgba(255, 255, 255, 0.10)",
                backdropFilter: "blur(12.5px)",
              }}
            >
              <div className="w-[24px] h-[24px] flex items-center justify-center text-[#D0FF71]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span
                className="text-[#FFF] text-[14px] lg:text-[16px] font-[400] lg:font-[600] leading-normal lg:leading-[24px]"
                style={{ fontFamily: "Inter" }}
              >
                152 Thatcher Road St, Mahattan, NY 10463, US
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div
          className="flex flex-col p-[12px] min-[375px]:p-[24px] gap-[24px] min-[375px]:gap-[32px] flex-1 rounded-[28px] order-1 lg:order-2"
          style={{
            border: "1px solid #618C6D",
            background: "rgba(0, 0, 0, 0.20)",
            backdropFilter: "blur(100px)",
          }}
        >
          {/* Form Header - Inter, 40px, 700, 48px line-height, NOT italic */}
          <h2
            className="text-[#FFF] text-[24px] min-[375px]:text-[32px] lg:text-[40px] font-[700] leading-[32px] min-[375px]:leading-[48px]"
            style={{ fontFamily: "Inter" }}
          >
            Let&apos;s Build Something Exceptional
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
            {/* Email Field */}
            <div className="flex flex-col gap-[8px]">
              <label
                className="text-[#F3F4F6] text-[16px] font-[400] leading-[24px]"
                style={{ fontFamily: "Inter" }}
              >
                Your Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-[56px] py-[16px] pr-[16px] pl-[24px] rounded-[999px] text-[#FFF] text-[14px] focus:outline-none focus:border-[#D0FF71] transition-colors"
                style={{
                  fontFamily: "Inter",
                  border: "1px solid #FFF",
                  background: "rgba(255, 255, 255, 0.10)",
                  backdropFilter: "blur(12.5px)",
                }}
              />
            </div>

            {/* Name Field */}
            <div className="flex flex-col gap-[8px]">
              <label
                className="text-[#F3F4F6] text-[16px] font-[400] leading-[24px]"
                style={{ fontFamily: "Inter" }}
              >
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-[56px] py-[16px] pr-[16px] pl-[24px] rounded-[999px] text-[#FFF] text-[14px] focus:outline-none focus:border-[#D0FF71] transition-colors"
                style={{
                  fontFamily: "Inter",
                  border: "1px solid #FFF",
                  background: "rgba(255, 255, 255, 0.10)",
                  backdropFilter: "blur(12.5px)",
                }}
              />
            </div>

            {/* Company Field */}
            <div className="flex flex-col gap-[8px]">
              <label
                className="text-[#F3F4F6] text-[16px] font-[400] leading-[24px]"
                style={{ fontFamily: "Inter" }}
              >
                Company
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full h-[56px] py-[16px] pr-[16px] pl-[24px] rounded-[999px] text-[#FFF] text-[14px] focus:outline-none focus:border-[#D0FF71] transition-colors"
                style={{
                  fontFamily: "Inter",
                  border: "1px solid #FFF",
                  background: "rgba(255, 255, 255, 0.10)",
                  backdropFilter: "blur(12.5px)",
                }}
              />
            </div>

            {/* Services Dropdown */}
            <div className="flex flex-col gap-[8px]">
              <label
                className="text-[#F3F4F6] text-[16px] font-[400] leading-[24px]"
                style={{ fontFamily: "Inter" }}
              >
                Services
              </label>
              <div className="relative">
                <select
                  value={formData.services}
                  onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                  className="w-full h-[56px] py-[16px] pr-[16px] pl-[24px] rounded-[999px] text-[#FFF] text-[14px] focus:outline-none focus:border-[#D0FF71] transition-colors appearance-none cursor-pointer"
                  style={{
                    fontFamily: "Inter",
                    border: "1px solid #FFF",
                    background: "rgba(255, 255, 255, 0.10)",
                    backdropFilter: "blur(12.5px)",
                  }}
                >
                  <option value="" className="bg-[#1A1A1A]">Select a service</option>
                  <option value="web-development" className="bg-[#1A1A1A]">Web Development</option>
                  <option value="mobile-development" className="bg-[#1A1A1A]">Mobile Development</option>
                  <option value="ui-ux-design" className="bg-[#1A1A1A]">UI/UX Design</option>
                  <option value="ai-solutions" className="bg-[#1A1A1A]">AI Solutions</option>
                  <option value="consulting" className="bg-[#1A1A1A]">Consulting</option>
                </select>
                <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none text-[#FFF]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Project Description - height: 188px, border-radius: 20px */}
            <div className="flex flex-col gap-[8px]">
              <label
                className="text-[#F3F4F6] text-[16px] font-[400] leading-[24px]"
                style={{ fontFamily: "Inter" }}
              >
                Tell us about your project
              </label>
              <div className="relative">
                <textarea
                  value={formData.project}
                  onChange={(e) => {
                    if (e.target.value.length <= 300) {
                      setFormData({ ...formData, project: e.target.value });
                    }
                  }}
                  className="w-full h-[188px] py-[16px] pr-[16px] pl-[24px] rounded-[20px] text-[#FFF] text-[14px] focus:outline-none focus:border-[#D0FF71] transition-colors resize-none"
                  style={{
                    fontFamily: "Inter",
                    border: "1px solid #FFF",
                    background: "rgba(255, 255, 255, 0.10)",
                    backdropFilter: "blur(12.5px)",
                  }}
                />
                <span
                  className="absolute bottom-[16px] right-[16px] text-[#999] text-[12px]"
                  style={{ fontFamily: "Inter" }}
                >
                  {formData.project.length}/300
                </span>
              </div>
            </div>

            {/* Privacy Policy & Submit - height: 48px, padding: 8px 32px, border-radius: 40px */}
            <div className="flex flex-col min-[375px]:flex-row items-start min-[375px]:items-center justify-between gap-[12px] min-[375px]:gap-[16px]">
              <label className="flex items-center gap-[8px] min-[375px]:gap-[12px] cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeToPolicy}
                  onChange={(e) => setFormData({ ...formData, agreeToPolicy: e.target.checked })}
                  className="w-[20px] h-[20px] rounded-[4px] border border-[#D0FF71] bg-transparent checked:bg-[#D0FF71] cursor-pointer accent-[#D0FF71]"
                />
                <span
                  className="text-[#FFF] text-[14px] font-[400] leading-normal"
                  style={{ fontFamily: "Inter" }}
                >
                  I agree to the{" "}
                  <a href="/privacy-policy" className="underline hover:text-[#D0FF71] transition-colors">
                    privacy policy
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="h-[48px] px-[20px] min-[375px]:px-[32px] py-[8px] rounded-[40px] bg-[#D0FF71] border border-[#191919] text-[#191919] text-[14px] font-[500] leading-normal hover:bg-[#FFF] transition-colors flex items-center gap-[12px]"
                style={{ fontFamily: "Inter" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
