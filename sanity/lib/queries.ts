import { groq } from "next-sanity";

// Get all published posts
export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    author->{
      name,
      slug,
      image,
      bio
    },
    coverImage,
    excerpt,
    categories[]->{
      title,
      slug
    },
    publishedAt,
    readTime,
    featured
  }
`;

// Get featured posts for homepage
export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true && defined(slug.current)] | order(publishedAt desc) [0...3] {
    _id,
    _createdAt,
    title,
    slug,
    author->{
      name,
      slug,
      image
    },
    coverImage,
    excerpt,
    categories[]->{
      title,
      slug
    },
    publishedAt,
    readTime
  }
`;

// Get single post by slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    author->{
      name,
      slug,
      image,
      bio
    },
    coverImage,
    excerpt,
    categories[]->{
      title,
      slug,
      description
    },
    "categoryRefs": categories[]._ref,
    publishedAt,
    readTime,
    body
  }
`;

// Get related posts by shared categories (excludes current post, max 3)
export const relatedPostsQuery = groq`
  *[_type == "post" && defined(slug.current) && _id != $postId && count(categories[@._ref in $categoryIds]) > 0] | order(publishedAt desc) [0...3] {
    _id,
    _createdAt,
    title,
    slug,
    author->{
      name,
      slug,
      image
    },
    coverImage,
    excerpt,
    categories[]->{
      title,
      slug
    },
    publishedAt,
    readTime
  }
`;

// Get all post slugs for static generation
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

// ── Project Queries ──

// Get all published projects
export const projectsQuery = groq`
  *[_type == "project" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    coverImage,
    tags,
    countryFlag,
    category,
    featured,
    publishedAt
  }
`;

// Get featured projects for homepage (limit 4)
export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true && defined(slug.current)] | order(publishedAt desc) [0...4] {
    _id,
    title,
    slug,
    description,
    coverImage,
    tags,
    countryFlag,
    category,
    publishedAt
  }
`;

// Get single project by slug (full detail)
export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    coverImage,
    tags,
    countryFlag,
    category,
    featured,
    publishedAt,
    heroImages,
    introHeading,
    introDescription,
    introImage,
    overviewDescription,
    overviewImage,
    challengeTitle,
    challengeDescription,
    challengeImages
  }
`;

// Get related projects (same category, exclude current, limit 3)
export const relatedProjectsQuery = groq`
  *[_type == "project" && defined(slug.current) && _id != $projectId && category == $category] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    description,
    coverImage
  }
`;

// Get latest projects (for service pages, limit 3)
export const latestProjectsQuery = groq`
  *[_type == "project" && defined(slug.current)] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    description,
    coverImage
  }
`;

// Get all project slugs for static generation
export const projectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)][].slug.current
`;

// ── Product Queries ──

// Get all products ordered by display order (for Featured Products)
export const productsQuery = groq`
  *[_type == "product" && defined(slug.current)] | order(order asc) {
    _id,
    title,
    slug,
    description,
    coverImage,
    mobileCoverImage,
    logo,
    tags,
    link,
    order
  }
`;

// Get single product by slug (full detail)
export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    coverImage,
    mobileCoverImage,
    logo,
    tags,
    link,
    order,
    featuresHeading,
    featuresDescription,
    features[] {
      _key,
      icon,
      title,
      description
    },
    showcaseHeading,
    showcaseDescription,
    showcaseImages,
    showcaseVideoUrl,
    highlightsHeading,
    highlightsDescription,
    highlights[] {
      _key,
      image,
      title,
      description
    },
    overviewHeading,
    overviewDescription,
    overviewImages,
    overviewCards[] {
      _key,
      icon,
      text
    }
  }
`;

// Get all product slugs for static generation
export const productSlugsQuery = groq`
  *[_type == "product" && defined(slug.current)][].slug.current
`;

// ── Service Queries ──

// Get all services ordered by display order (for OurServices grid)
export const servicesQuery = groq`
  *[_type == "service" && defined(slug.current)] | order(order asc) {
    _id,
    title,
    slug,
    description,
    coverImage,
    mobileCoverImage,
    icon,
    order
  }
`;

// Get single service by slug (full detail)
export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    coverImage,
    mobileCoverImage,
    icon,
    order,
    heroTitle,
    heroDescription,
    heroImage,
    mobileHeroImage,
    processHeading,
    processDescription,
    processSteps
  }
`;

// Get all service slugs for static generation
export const serviceSlugsQuery = groq`
  *[_type == "service" && defined(slug.current)][].slug.current
`;

// ── Privacy Policy Query ──

// Get the privacy policy document (singleton)
export const privacyPolicyQuery = groq`
  *[_type == "privacyPolicy"][0] {
    title,
    lastUpdated,
    intro,
    sections[] {
      _key,
      title,
      paragraphs,
      bulletPoints,
      afterListText,
      contactEmail,
      contactAddress
    }
  }
`;

// ── Terms and Conditions Query ──

// Get the terms and conditions document (singleton)
export const termsAndConditionsQuery = groq`
  *[_type == "termsAndConditions"][0] {
    title,
    lastUpdated,
    intro,
    sections[] {
      _key,
      title,
      paragraphs,
      bulletPoints,
      afterListText,
      contactEmail,
      contactAddress
    }
  }
`;

// ── Newsletter Popup Query ──

// Get the newsletter popup settings (singleton)
export const newsletterPopupQuery = groq`
  *[_type == "newsletterPopup"][0] {
    enabled,
    title,
    description,
    successTitle,
    successMessage,
    desktopImage,
    mobileImage,
    delaySeconds
  }
`;

// ── Team Section Query ──

// Get the team section (singleton)
export const teamSectionQuery = groq`
  *[_type == "teamSection"][0] {
    heading,
    description,
    members[] {
      _key,
      name,
      title,
      quote,
      image,
      mobileImage,
      linkedin,
      upwork,
      twitter
    }
  }
`;

// ── Testimonials Section Query ──

// Get the testimonials section (singleton)
export const testimonialsSectionQuery = groq`
  *[_type == "testimonialsSection"][0] {
    heading,
    description,
    testimonials[] {
      _key,
      company,
      companyLogo,
      rating,
      quote,
      authorName,
      authorTitle,
      authorImage
    }
  }
`;

// ── Trusted By Query ──

// Get the trusted by logos (singleton)
export const trustedByQuery = groq`
  *[_type == "trustedBy"][0] {
    heading,
    logos[] {
      _key,
      name,
      logo,
      width,
      height
    }
  }
`;

// ── Why Choose Us Query ──

// Get the why choose us stats (singleton)
export const whyChooseUsQuery = groq`
  *[_type == "whyChooseUs"][0] {
    heading,
    description,
    stats[] {
      _key,
      value,
      suffix,
      label,
      icon
    }
  }
`;

// ── About Page Query ──

// Get the about page content (singleton)
export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    heroTitle,
    heroDescription,
    heroBackgroundDesktop,
    heroBackgroundMobile,
    heroCtaText,
    heroCtaSubtext,
    valuesHeading,
    valuesDescription,
    values[] {
      _key,
      title,
      description
    },
    processHeading,
    processDescription,
    processSteps[] {
      _key,
      number,
      title,
      description,
      icon
    },
    philosophyImage,
    philosophyHighlight,
    philosophyText
  }
`;

// ── Career Page Queries ──

// Get the career page content (singleton)
export const careerPageQuery = groq`
  *[_type == "careerPage"][0] {
    heroTitle,
    heroDescription,
    heroCtaText,
    heroCtaSubtext,
    heroBackgroundDesktop,
    heroBackgroundMobile,
    processHeading,
    processDescription,
    processSteps[] {
      _key,
      number,
      title,
      description,
      icon
    },
    positionsHeading,
    positionsDescription,
    faqHeading,
    faqDescription,
    faqs[] {
      _key,
      question,
      answer
    }
  }
`;

// Get all job postings ordered by display order
export const jobPostingsQuery = groq`
  *[_type == "jobPosting"] | order(order asc) {
    _id,
    title,
    badge,
    description,
    location,
    type,
    applyLink,
    order
  }
`;
