import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "../../../sanity/lib/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      const imageUrl = urlFor(value).width(776).height(414).url();
      return (
        <figure className="w-full flex flex-col gap-[12px]">
          <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[414px] rounded-[16px] lg:rounded-[28px] overflow-hidden border border-[#555]">
            <Image
              src={imageUrl}
              alt={value.alt || "Blog image"}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-[#D0FF71] text-[14px] font-[400] leading-[20px]">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1
        className="text-[#FFF] text-[32px] lg:text-[40px] font-[500] leading-[38px] lg:leading-[48px]"
        style={{ fontFamily: "Inter" }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className="text-[#FFF] text-[24px] lg:text-[32px] font-[500] leading-[32px] lg:leading-[38px]"
        style={{ fontFamily: "Inter" }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="text-[#FFF] text-[20px] lg:text-[24px] font-[500] leading-[28px] lg:leading-[32px]"
        style={{ fontFamily: "Inter" }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        className="text-[#FFF] text-[18px] lg:text-[20px] font-[500] leading-[24px] lg:leading-[28px]"
        style={{ fontFamily: "Inter" }}
      >
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-[#FFF] text-[16px] font-[400] leading-[24px]">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="w-full flex items-stretch gap-[20px] p-[20px] rounded-[8px] bg-[#191919]">
        <div className="w-[2px] flex-shrink-0 self-stretch bg-[#D0FF71]" />
        <p className="text-[#F3F4F6] text-[16px] font-[400] leading-[24px] italic">
          {children}
        </p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-[700]">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="px-[6px] py-[2px] rounded-[4px] bg-[#333] text-[#D0FF71] text-[14px] font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#D0FF71] underline hover:opacity-80 transition-opacity"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-[24px] text-[#FFF] text-[16px] font-[400] leading-[24px] flex flex-col gap-[8px]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-[24px] text-[#FFF] text-[16px] font-[400] leading-[24px] flex flex-col gap-[8px]">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PortableTextRenderer({ body }: { body: any[] }) {
  if (!body || body.length === 0) {
    return (
      <p className="text-[#D2D2D2] text-[16px] font-[400] leading-[24px]">
        Content is being prepared. Check back soon!
      </p>
    );
  }
  return <PortableText value={body} components={components} />;
}
