import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className,
}: ButtonProps) {
  const baseStyles = cn(
    "flex items-center justify-center gap-[12px]",
    "h-[44px] pl-[24px] pr-[32px] py-[8px]",
    "rounded-[40px]",
    "text-[14px] font-[500] leading-[16px] text-center whitespace-nowrap",
    "transition-colors duration-200"
  );

  const variants = {
    primary: "bg-[#D0FF71] text-[#000] hover:bg-[#b8e860]",
    secondary: "bg-transparent text-[#FFF] border border-[#F3F4F6] hover:bg-[#F3F4F6] hover:text-[#000]",
  };

  return (
    <Link
      href={href}
      className={cn(baseStyles, variants[variant], className)}
      style={{ fontFamily: "Inter" }}
    >
      <Image
        src="/Ellipse 11.svg"
        alt=""
        width={8}
        height={8}
        className="flex-shrink-0"
      />
      {children}
    </Link>
  );
}
