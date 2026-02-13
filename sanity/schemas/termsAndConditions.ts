import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export default defineType({
  name: "termsAndConditions",
  title: "Terms and Conditions",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: 'e.g. "Terms and Conditions"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "string",
      description: 'e.g. "February 2025"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Introduction Text",
      type: "text",
      rows: 4,
      description: "Introductory paragraph shown below the title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Section Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "paragraphs",
              title: "Paragraphs",
              type: "array",
              of: [{ type: "text" }],
              description: "Main text paragraphs for this section",
              validation: (Rule) => Rule.required().min(1),
            }),
            defineField({
              name: "bulletPoints",
              title: "Bullet Points",
              type: "array",
              of: [{ type: "string" }],
              description: "Optional bullet-point list items",
            }),
            defineField({
              name: "afterListText",
              title: "After List Text",
              type: "text",
              rows: 2,
              description: "Optional paragraph shown after the bullet list",
            }),
            defineField({
              name: "contactEmail",
              title: "Contact Email",
              type: "string",
              description: "Optional: shown as a clickable email link",
            }),
            defineField({
              name: "contactAddress",
              title: "Contact Address",
              type: "string",
              description: "Optional: physical address shown in this section",
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Terms and Conditions" };
    },
  },
});
