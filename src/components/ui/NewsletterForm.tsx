"use client";

import { useState } from "react";

const SHEETDB_API_URL = "https://sheetdb.io/api/v1/e2ormwywhf12h";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
      setEmail("");
    } catch {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <p className="text-[#D0FF71] text-[14px] font-[500] leading-[20px]" style={{ fontFamily: "Inter" }}>
        Thanks for subscribing!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] lg:flex-row lg:gap-[12px] w-full lg:w-auto">
      {/* Email Input */}
      <div className="flex items-center justify-between w-full lg:w-[280px] h-[48px] pl-[16px] min-[375px]:pl-[24px] pr-[16px] py-[16px] rounded-[999px] bg-[#333] lg:bg-[#191919]">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-transparent text-[#FFF] placeholder:text-[#999] focus:outline-none text-[14px] leading-[20px]"
          style={{ fontFamily: "Inter" }}
        />
        <svg
          className="ml-[16px]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            stroke="#999"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 6l-10 7L2 6"
            stroke="#999"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-fit h-[48px] px-[16px] min-[375px]:px-[24px] py-[8px] rounded-[40px] bg-[#FFF] border border-[#191919] text-[#191919] text-[14px] font-[500] leading-[16px] text-center hover:bg-[#D0FF71] transition-colors disabled:opacity-50"
        style={{ fontFamily: "Inter" }}
      >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  );
}
