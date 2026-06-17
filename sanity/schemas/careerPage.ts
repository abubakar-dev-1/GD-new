import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export default defineType({
  name: "careerPage",
  title: "Career Page",
  type: "document",
  icon: DocumentTextIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "process", title: "Process" },
    { name: "positions", title: "Open Positions" },
    { name: "faq", title: "FAQ" },
  ],
  fields: [
    // ── Hero ──
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 3,
      group: "hero",
    }),
    defineField({
      name: "heroCtaText",
      title: "CTA Button Text",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroCtaSubtext",
      title: "CTA Sub-text",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroBackgroundDesktop",
      title: "Hero Background (Desktop)",
      type: "image",
      options: { hotspot: true },
      group: "hero",
    }),
    defineField({
      name: "heroBackgroundMobile",
      title: "Hero Background (Mobile)",
      type: "image",
      options: { hotspot: true },
      group: "hero",
    }),

    // ── Process ──
    defineField({
      name: "processHeading",
      title: "Process Heading",
      type: "string",
      group: "process",
    }),
    defineField({
      name: "processDescription",
      title: "Process Description",
      type: "text",
      rows: 2,
      group: "process",
    }),
    defineField({
      name: "processSteps",
      title: "Process Steps",
      type: "array",
      group: "process",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "number",
              title: "Step Number",
              type: "string",
              description: 'e.g. "01"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
            }),
          ],
          preview: { select: { title: "title", subtitle: "number", media: "icon" } },
        },
      ],
    }),

    // ── Open Positions (section header; the cards are Job Posting documents) ──
    defineField({
      name: "positionsHeading",
      title: "Positions Heading",
      type: "string",
      group: "positions",
    }),
    defineField({
      name: "positionsDescription",
      title: "Positions Description",
      type: "text",
      rows: 3,
      group: "positions",
    }),

    // ── FAQ ──
    defineField({
      name: "faqHeading",
      title: "FAQ Heading",
      type: "string",
      group: "faq",
    }),
    defineField({
      name: "faqDescription",
      title: "FAQ Description",
      type: "text",
      rows: 2,
      group: "faq",
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      group: "faq",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: { select: { title: "question" } },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Career Page" };
    },
  },
});
