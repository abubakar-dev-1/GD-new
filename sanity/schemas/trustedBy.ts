import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export default defineType({
  name: "trustedBy",
  title: "Trusted By",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: 'Small label above the logos, e.g. "TRUSTED BY"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logos",
      title: "Company Logos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Company Name",
              type: "string",
              description: "Used as the logo's alt text",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "logo",
              title: "Logo",
              type: "image",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "width",
              title: "Display Width (px)",
              type: "number",
              initialValue: 120,
              validation: (Rule) => Rule.required().min(20).max(400),
            }),
            defineField({
              name: "height",
              title: "Display Height (px)",
              type: "number",
              initialValue: 40,
              validation: (Rule) => Rule.required().min(20).max(200),
            }),
          ],
          preview: {
            select: { title: "name", media: "logo" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Trusted By" };
    },
  },
});
