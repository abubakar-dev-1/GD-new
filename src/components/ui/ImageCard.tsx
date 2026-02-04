"use client";

import Image from "next/image";

interface ImageCardProps {
  image: string;
  alt: string;
  gradientDirection?: "horizontal" | "vertical";
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  showBorder?: boolean;
}

const gradients = {
  horizontal:
    "linear-gradient(90deg, rgba(25, 25, 25, 0.95) 0%, rgba(25, 25, 25, 0.7) 50%, rgba(25, 25, 25, 0.3) 100%)",
  vertical:
    "linear-gradient(180deg, rgba(25, 25, 25, 0.00) 0.05%, #191919 80.49%)",
};

export default function ImageCard({
  image,
  alt,
  gradientDirection = "vertical",
  className = "",
  style,
  children,
  showBorder = false,
}: ImageCardProps) {
  return (
    <div
      className={`relative rounded-[16px] overflow-hidden ${
        showBorder ? "border border-[#333]" : ""
      } ${className}`}
      style={{ fontFamily: "Inter", ...style }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: gradients[gradientDirection] }}
      />

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
