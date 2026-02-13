"use client";

import { useState, useEffect, useCallback } from "react";

const SHEETDB_API_URL = "https://sheetdb.io/api/v1/e2ormwywhf12h";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const animateClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      localStorage.setItem("newsletter_dismissed", "true");
    }, 300);
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem("newsletter_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Trigger animation after mount
        requestAnimationFrame(() => setIsVisible(true));
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await fetch(SHEETDB_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { User_name: "Newsletter Subscriber", Email: email } }),
      });
      setIsSuccess(true);
      localStorage.setItem("newsletter_dismissed", "true");
      setTimeout(() => {
        animateClose();
      }, 2000);
    } catch {
      setIsSubmitting(false);
    }
  };
  
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center overflow-y-auto px-[20px] py-[20px]"
      style={{
        backgroundColor: isVisible ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0)",
        transition: "background-color 0.3s ease",
      }}
      onClick={animateClose}
    >
      <div
        className="relative flex flex-col lg:flex-row items-center gap-[32px] p-[64px] rounded-[28px] w-full max-w-[400px] lg:max-w-[895px] my-auto"
        style={{
          border: "1px solid #618C6D",
          background: "#191919",
          backdropFilter: "blur(25px)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={animateClose}
          className="absolute top-[20px] right-[20px] text-white hover:opacity-80 transition-opacity"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Illustration - mobile and desktop use different images */}
        <div className="flex items-center justify-center flex-shrink-0">
          <img
            src="/mobile_image_106.png"
            alt="Newsletter illustration"
            className="lg:hidden w-[200px] h-auto object-contain"
          />
          <img
            src="/image 106.png"
            alt="Newsletter illustration"
            className="hidden lg:block w-[200px] h-auto object-contain"
          />
        </div>

        {/* Content */}
        <div
          className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-[32px] flex-1 w-full"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {/* Mail Icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="20" height="16" rx="3" stroke="#FFF" strokeWidth="1.5" />
            <path d="M2 7L12 13L22 7" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {isSuccess ? (
            <div className="flex flex-col gap-[16px] self-stretch">
              <h2 className="text-[#D0FF71] text-[40px] font-[700] leading-[48px]">
                Thank you!
              </h2>
              <p className="text-[#FFF] text-[16px] font-[400] leading-[24px]">
                You&apos;ve been subscribed to our newsletter.
              </p>
            </div>
          ) : (
            <>
              {/* Title */}
              <h2 className="text-[#FFF] text-[40px] font-[700] leading-[48px] self-stretch">
                Subscribe to our newsletter
              </h2>

              {/* Description */}
              <p className="text-[#FFF] text-[16px] font-[400] leading-[24px] self-stretch">
                Join our weekly newsletter for exclusive insights on design, development, and the tech that&apos;s shaping tomorrow. Be the first to know.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-[12px] self-stretch">
                {/* Email Input */}
                <div
                  className="flex items-center justify-between self-stretch"
                  style={{
                    height: "48px",
                    padding: "16px 16px 16px 15px",
                    borderRadius: "999px",
                    background: "#777",
                    overflow: "hidden",
                  }}
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-transparent text-[#FFF] text-[14px] font-[400] placeholder-[#ccc] outline-none border-none"
                    style={{ fontFamily: "Inter" }}
                  />
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 ml-[8px]">
                    <rect x="2" y="4" width="20" height="16" rx="3" stroke="#FFF" strokeWidth="1.5" />
                    <path d="M2 7L12 13L22 7" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Subscribe Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-[12px] h-[48px] rounded-[40px] bg-[#D0FF71] text-[#090C08] text-[14px] font-[600] leading-[16px] self-stretch hover:opacity-90 transition-opacity disabled:opacity-50"
                  style={{
                    padding: "8px 24px",
                    fontFamily: "Inter",
                  }}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
