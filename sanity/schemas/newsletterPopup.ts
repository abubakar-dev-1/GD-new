import { defineField, defineType } from "sanity";
import { EnvelopeIcon } from "@sanity/icons";

export default defineType({
  name: "newsletterPopup",
  title: "Newsletter Popup",
  type: "document",
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: "enabled",
      title: "Enabled",
      type: "boolean",
      description: "Toggle the newsletter popup on or off",
      initialValue: true,
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'e.g. "Subscribe to our newsletter"',
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
      name: "successTitle",
      title: "Success Title",
      type: "string",
      description: 'Shown after subscribing, e.g. "Thank you!"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "successMessage",
      title: "Success Message",
      type: "string",
      description: 'e.g. "You\'ve been subscribed to our newsletter."',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "desktopImage",
      title: "Desktop Illustration",
      type: "image",
      description: "Illustration shown on the left side (desktop)",
    }),
    defineField({
      name: "mobileImage",
      title: "Mobile Illustration",
      type: "image",
      description: "Illustration shown at the top (mobile)",
    }),
    defineField({
      name: "delaySeconds",
      title: "Popup Delay (seconds)",
      type: "number",
      description: "How many seconds to wait before showing the popup",
      initialValue: 1.5,
      validation: (Rule) => Rule.min(0).max(30),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Newsletter Popup" };
    },
  },
});
