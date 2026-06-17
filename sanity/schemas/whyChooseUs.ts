import { defineField, defineType } from "sanity";
import { ProjectsIcon } from "@sanity/icons";

export default defineType({
  name: "whyChooseUs",
  title: "Why Choose Us",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "number",
              description: "The number to count up to, e.g. 17",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "suffix",
              title: "Suffix",
              type: "string",
              description: 'e.g. "+" or "%"',
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: 'e.g. "Projects Delivered"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
              description: "Small icon (24x24) shown above the number",
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "value", media: "icon" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Why Choose Us" };
    },
  },
});
