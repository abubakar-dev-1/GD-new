import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export default defineType({
  name: "jobPosting",
  title: "Job Posting",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
      description: 'Short tag shown on the right, e.g. "Web Developer"',
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: 'e.g. "Remote"',
      initialValue: "Remote",
    }),
    defineField({
      name: "type",
      title: "Employment Type",
      type: "string",
      description: 'e.g. "Full-Time"',
      initialValue: "Full-Time",
    }),
    defineField({
      name: "applyLink",
      title: "Apply Link",
      type: "string",
      description: "URL or path the Apply Now button links to",
      initialValue: "/contact",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 1,
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
    select: { title: "title", subtitle: "badge" },
  },
});
