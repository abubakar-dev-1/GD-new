import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: DocumentTextIcon,
  groups: [
    { name: "hero", title: "Hero" },
    { name: "values", title: "Our Values" },
    { name: "process", title: "Our Process" },
    { name: "philosophy", title: "Philosophy" },
  ],
  fields: [
    // ── Hero ──
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 3,
      group: "hero",
    }),
    defineField({
      name: "heroBackgroundDesktop",
      title: "Hero Background (Desktop)",
      type: "image",
      options: { hotspot: true },
      group: "hero",
    }),
    defineField({
      name: "heroBackgroundMobile",
      title: "Hero Background (Mobile)",
      type: "image",
      options: { hotspot: true },
      group: "hero",
    }),
    defineField({
      name: "heroCtaText",
      title: "CTA Button Text",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroCtaSubtext",
      title: "CTA Sub-text",
      type: "string",
      description: 'Small text under the button, e.g. "No commitment, just a strategic conversation."',
      group: "hero",
    }),

    // ── Our Values ──
    defineField({
      name: "valuesHeading",
      title: "Values Heading",
      type: "string",
      group: "values",
    }),
    defineField({
      name: "valuesDescription",
      title: "Values Description",
      type: "text",
      rows: 2,
      group: "values",
    }),
    defineField({
      name: "values",
      title: "Values",
      type: "array",
      group: "values",
      of: [
        {
          type: "object",
          fields: [
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
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),

    // ── Our Process ──
    defineField({
      name: "processHeading",
      title: "Process Heading",
      type: "string",
      group: "process",
    }),
    defineField({
      name: "processDescription",
      title: "Process Description",
      type: "text",
      rows: 2,
      group: "process",
    }),
    defineField({
      name: "processSteps",
      title: "Process Steps",
      type: "array",
      group: "process",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "number",
              title: "Step Number",
              type: "string",
              description: 'e.g. "01"',
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
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
              description: "Small icon shown in the circle (36x36)",
            }),
          ],
          preview: { select: { title: "title", subtitle: "number", media: "icon" } },
        },
      ],
    }),

    // ── Philosophy ──
    defineField({
      name: "philosophyImage",
      title: "Philosophy Background Image",
      type: "image",
      options: { hotspot: true },
      group: "philosophy",
    }),
    defineField({
      name: "philosophyHighlight",
      title: "Highlighted Text",
      type: "string",
      description: "The green highlighted opening words of the statement",
      group: "philosophy",
    }),
    defineField({
      name: "philosophyText",
      title: "Remaining Text",
      type: "text",
      rows: 4,
      description: "The rest of the statement (after the highlighted words)",
      group: "philosophy",
    }),
  ],
  preview: {
    prepare() {
      return { title: "About Page" };
    },
  },
});
