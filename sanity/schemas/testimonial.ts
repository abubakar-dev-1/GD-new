import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "company",
      title: "Company Name",
      type: "string",
      description: "Name of the company or platform (e.g. Upwork, Fiverr)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "companyLogo",
      title: "Company Logo",
      type: "image",
      description: "Logo of the company (SVG or PNG recommended)",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Star Rating",
      type: "number",
      description: "Rating out of 5 stars",
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      description: "The testimonial quote text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
      description: "Name of the person giving the testimonial",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authorTitle",
      title: "Author Title",
      type: "string",
      description: "Title/role and company (e.g. CEO, Indelible Security)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authorImage",
      title: "Author Image",
      type: "image",
      description: "Profile photo of the author",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which testimonials appear (lower = first)",
      initialValue: 0,
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
      title: "authorName",
      subtitle: "company",
      media: "authorImage",
    },
  },
});
