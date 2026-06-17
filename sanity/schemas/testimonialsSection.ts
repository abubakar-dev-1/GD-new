import { defineField, defineType } from "sanity";
import { ComponentIcon } from "@sanity/icons";

export default defineType({
  name: "testimonialsSection",
  title: "Testimonials Section",
  type: "document",
  icon: ComponentIcon,
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
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "company",
              title: "Company / Platform Name",
              type: "string",
              description: 'e.g. "Upwork" — used as logo alt text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "companyLogo",
              title: "Company Logo",
              type: "image",
            }),
            defineField({
              name: "rating",
              title: "Star Rating",
              type: "number",
              description: "Whole number from 1 to 5",
              validation: (Rule) => Rule.required().min(1).max(5),
              initialValue: 5,
            }),
            defineField({
              name: "quote",
              title: "Quote",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "authorName",
              title: "Author Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "authorTitle",
              title: "Author Title",
              type: "string",
              description: 'e.g. "CEO, Indelible Security"',
            }),
            defineField({
              name: "authorImage",
              title: "Author Photo",
              type: "image",
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: { title: "authorName", subtitle: "company", media: "authorImage" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Testimonials Section" };
    },
  },
});
