import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export default defineType({
  name: "teamSection",
  title: "Team Section",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: 'Section title, e.g. "The Minds Behind the Mission"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "members",
      title: "Team Members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Role / Title",
              type: "string",
              description: 'e.g. "Chief Executive Officer"',
            }),
            defineField({
              name: "quote",
              title: "Quote",
              type: "text",
              rows: 2,
              description: "Short personal quote shown under the role",
            }),
            defineField({
              name: "image",
              title: "Photo (Desktop)",
              type: "image",
              options: { hotspot: true },
              fields: [{ name: "alt", type: "string", title: "Alternative Text" }],
            }),
            defineField({
              name: "mobileImage",
              title: "Photo (Mobile)",
              type: "image",
              options: { hotspot: true },
              fields: [{ name: "alt", type: "string", title: "Alternative Text" }],
            }),
            defineField({
              name: "linkedin",
              title: "LinkedIn URL",
              type: "url",
            }),
            defineField({
              name: "upwork",
              title: "Upwork URL",
              type: "url",
            }),
            defineField({
              name: "twitter",
              title: "Twitter / X URL",
              type: "url",
            }),
          ],
          preview: {
            select: { title: "name", subtitle: "title", media: "image" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Team Section" };
    },
  },
});
