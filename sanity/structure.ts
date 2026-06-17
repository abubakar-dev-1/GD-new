import type { StructureResolver } from "sanity/structure";

// Document types that should exist as a single editable document (singletons).
export const singletons = [
  { type: "aboutPage", title: "About Page" },
  { type: "careerPage", title: "Career Page" },
  { type: "teamSection", title: "Team Section" },
  { type: "testimonialsSection", title: "Testimonials Section" },
  { type: "trustedBy", title: "Trusted By" },
  { type: "whyChooseUs", title: "Why Choose Us" },
  { type: "newsletterPopup", title: "Newsletter Popup" },
  { type: "privacyPolicy", title: "Privacy Policy" },
  { type: "termsAndConditions", title: "Terms & Conditions" },
] as const;

export const singletonTypes = new Set(singletons.map((s) => s.type));

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Regular collections
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("product").title("Products"),
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("jobPosting").title("Job Postings"),
      S.divider(),
      // Singletons (single editable document each)
      ...singletons.map((s) =>
        S.listItem()
          .title(s.title)
          .id(s.type)
          .child(S.document().schemaType(s.type).documentId(s.type))
      ),
    ]);
