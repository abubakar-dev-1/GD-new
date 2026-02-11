import { defineField, defineType } from "sanity";
import { ComponentIcon } from "@sanity/icons";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: ComponentIcon,
  fields: [
    // ── Basic Info (used in OurServices grid cards) ──
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'Card title, e.g. "Software Development"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "Shown on the OurServices grid card",
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "coverImage",
      title: "Card Image (Desktop)",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alternative Text" },
      ],
      description: "Background image for the desktop service grid card",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mobileCoverImage",
      title: "Card Image (Mobile)",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alternative Text" },
      ],
      description: "Background image for the mobile service card",
    }),
    defineField({
      name: "icon",
      title: "Card Icon",
      type: "image",
      description: "SVG icon shown on the service card (24x24)",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in the services grid — determines position in the repeating layout pattern",
      validation: (Rule) => Rule.required().min(1),
    }),

    // ── Detail Page: Hero Section ──
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      description: 'e.g. "Custom Software That Powers Your Business."',
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image (Desktop)",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alternative Text" },
      ],
      description: "Background image for detail page hero card (desktop)",
    }),
    defineField({
      name: "mobileHeroImage",
      title: "Hero Image (Mobile)",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alternative Text" },
      ],
    }),

    // ── Detail Page: Process Section ──
    defineField({
      name: "processHeading",
      title: "Process Heading",
      type: "string",
      description: 'e.g. "Process for Developing software"',
    }),
    defineField({
      name: "processDescription",
      title: "Process Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "processSteps",
      title: "Process Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Step Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Step Description",
              type: "text",
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
      description: "6 process steps shown as numbered cards",
    }),

  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      order: "order",
      media: "coverImage",
    },
    prepare(selection) {
      const { title, order } = selection;
      return { ...selection, title, subtitle: `Order: ${order}` };
    },
  },
});
