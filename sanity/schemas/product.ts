import { defineField, defineType } from "sanity";
import { PackageIcon } from "@sanity/icons";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'e.g. "Hiretics", "Taash Royale"',
      validation: (Rule) => Rule.required(),
      group: "basic",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
      group: "basic",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      description: "Shown on the product card and the detail page hero",
      validation: (Rule) => Rule.required(),
      group: "basic",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image (Desktop)",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alternative Text" },
      ],
      description: "Used for both the listing card and the detail page hero background",
      validation: (Rule) => Rule.required(),
      group: "basic",
    }),
    defineField({
      name: "mobileCoverImage",
      title: "Cover Image (Mobile)",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alternative Text" },
      ],
      description: "Mobile version of the cover image (listing card + detail hero)",
      group: "basic",
    }),
    defineField({
      name: "logo",
      title: "Product Logo",
      type: "image",
      description: "Optional logo shown on the top-right of the desktop hero",
      group: "basic",
    }),
    defineField({
      name: "tags",
      title: "Platform Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: 'e.g. "Android", "iOS", "Windows", "Web"',
      group: "basic",
    }),
    defineField({
      name: "link",
      title: "Custom Link URL",
      type: "string",
      description: "Leave empty to auto-link to /products/{slug}. Set for external links.",
      group: "basic",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in the featured products section on homepage",
      validation: (Rule) => Rule.required().min(1),
      group: "basic",
    }),

    // ── Detail Page: Features Section ──
    defineField({
      name: "featuresHeading",
      title: "Features Heading",
      type: "string",
      description: 'e.g. "Platform Features", "Game Features"',
      group: "detail",
    }),
    defineField({
      name: "featuresDescription",
      title: "Features Description",
      type: "text",
      rows: 3,
      group: "detail",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      group: "detail",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon", type: "image" }),
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
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: "title", media: "icon" },
          },
        },
      ],
    }),

    // ── Detail Page: Showcase Section ──
    defineField({
      name: "showcaseHeading",
      title: "Showcase Heading",
      type: "string",
      group: "detail",
    }),
    defineField({
      name: "showcaseDescription",
      title: "Showcase Description",
      type: "text",
      rows: 4,
      group: "detail",
    }),
    defineField({
      name: "showcaseImages",
      title: "Showcase Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      description: "1 image = full-width display, multiple = glassmorphism cards",
      group: "detail",
    }),
    defineField({
      name: "showcaseVideoUrl",
      title: "Showcase Video URL",
      type: "url",
      description: "If provided, video is shown instead of images",
      group: "detail",
    }),

    // ── Detail Page: Highlights Section ──
    defineField({
      name: "highlightsHeading",
      title: "Highlights Heading",
      type: "string",
      group: "detail",
    }),
    defineField({
      name: "highlightsDescription",
      title: "Highlights Description",
      type: "text",
      rows: 3,
      group: "detail",
    }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      group: "detail",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
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
          ],
          preview: {
            select: { title: "title", media: "image" },
          },
        },
      ],
    }),

    // ── Detail Page: Overview Section ──
    defineField({
      name: "overviewHeading",
      title: "Overview Heading",
      type: "string",
      group: "detail",
    }),
    defineField({
      name: "overviewDescription",
      title: "Overview Description",
      type: "text",
      rows: 3,
      group: "detail",
    }),
    defineField({
      name: "overviewImages",
      title: "Overview Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      description: "Screenshot cards with edge gradients (used when no text cards)",
      group: "detail",
    }),
    defineField({
      name: "overviewCards",
      title: "Overview Text Cards",
      type: "array",
      description: "Text cards with icons and navigation (takes priority over images)",
      group: "detail",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon", type: "image" }),
            defineField({
              name: "text",
              title: "Text",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: "text", media: "icon" },
          },
        },
      ],
    }),
  ],
  groups: [
    { name: "basic", title: "Basic Info", default: true },
    { name: "detail", title: "Detail Page" },
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
