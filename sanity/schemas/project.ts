import { defineField, defineType } from "sanity";
import { ProjectsIcon } from "@sanity/icons";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    // ── Basic Info (used in listings + hero) ──
    defineField({
      name: "title",
      title: "Title",
      type: "string",
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
      description: "Shown on listing cards and hero section",
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alternative Text" },
      ],
      description: "Main thumbnail for project listings",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "e.g. Design, Website, UI/UX",
    }),
    defineField({
      name: "countryFlag",
      title: "Country Flag",
      type: "string",
      description: "Emoji flag e.g. 🇨🇦 🇺🇸 🇬🇧",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "App Dev", value: "App dev" },
          { title: "Web Dev", value: "Web Dev" },
          { title: "UI/UX", value: "UI/UX" },
          { title: "Chat Bot", value: "Chat Bot" },
          { title: "AI Dev", value: "AI Dev" },
          { title: "DevOps", value: "DevOps" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Show on homepage Our Projects section",
      initialValue: false,
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString(),
    }),

    // ── Hero Carousel (ProjectDetailHero) ──
    defineField({
      name: "heroImages",
      title: "Hero Carousel Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Alternative Text" },
          ],
        },
      ],
      description: "Images for the hero carousel on the detail page",
    }),

    // ── Introduction Section (ProjectIntroduction) ──
    defineField({
      name: "introHeading",
      title: "Introduction Heading",
      type: "string",
      initialValue: "Introduction",
    }),
    defineField({
      name: "introDescription",
      title: "Introduction Description",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "introImage",
      title: "Introduction Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alternative Text" },
      ],
    }),

    // ── Overview Section (ProjectOverview) ──
    defineField({
      name: "overviewDescription",
      title: "Overview Description",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "overviewImage",
      title: "Overview Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alternative Text" },
      ],
    }),

    // ── Challenge Section (ProjectChallenges) ──
    defineField({
      name: "challengeTitle",
      title: "Challenge Title",
      type: "string",
    }),
    defineField({
      name: "challengeDescription",
      title: "Challenge Description",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "challengeImages",
      title: "Challenge Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Alternative Text" },
          ],
        },
      ],
      description: "Images shown in the scrolling gallery",
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "coverImage",
    },
    prepare(selection) {
      const { category } = selection;
      return { ...selection, subtitle: category };
    },
  },
});
