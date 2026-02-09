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
