import { Suspense } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostContent from "@/components/blog/BlogPostContent";
import PopularArticles from "@/components/sections/PopularArticles";
import { client } from "../../../../sanity/lib/client";
import {
  postBySlugQuery,
  postSlugsQuery,
  relatedPostsQuery,
  featuredPostsQuery,
} from "../../../../sanity/lib/queries";
import { Post } from "@/types/blog";
import {
  getImageUrl,
  formatDate,
  transformPostToArticle,
} from "@/lib/sanity-helpers";
import { SkeletonBlogPostBody, SkeletonArticlesSection } from "@/components/ui/Skeleton";

export const revalidate = 60;

// Mock blog post data for when Sanity has no content
const mockPosts: Record<
  string,
  {
    header: { tags: string[]; readTime: string; title: string; coverImage: string; date: string };
    body: object[];
  }
> = {
  "the-react-framework-for-the-web": {
    header: {
      tags: ["Design", "Website", "UI/UX"],
      readTime: "5 Min Read",
      title: "The React Framework for the Web",
      coverImage: "/images/image 54.png",
      date: "January 15, 2025",
    },
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "h2",
        markDefs: [],
        children: [{ _type: "span", _key: "s1", text: "Introduction to Next.js", marks: [] }],
      },
      {
        _type: "block",
        _key: "b2",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites. It is built on top of React, Node.js, Webpack, and Babel, and it is designed to make the development of React applications easier and more efficient.",
            marks: [],
          },
        ],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components. Its hybrid approach to rendering — combining static generation with server-side rendering — makes it an ideal choice for modern web development.",
            marks: [],
          },
        ],
      },
      {
        _type: "block",
        _key: "b4",
        style: "h2",
        markDefs: [],
        children: [{ _type: "span", _key: "s4", text: "Key Features", marks: [] }],
      },
      {
        _type: "block",
        _key: "b5",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s5",
            text: "Next.js provides an excellent developer experience with features like Fast Refresh, built-in CSS support, API routes, and automatic code splitting. The framework supports both static site generation (SSG) and server-side rendering (SSR), giving developers the flexibility to choose the best rendering strategy for each page.",
            marks: [],
          },
        ],
      },
      {
        _type: "block",
        _key: "b6",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s6",
            text: "With the introduction of the App Router, Next.js has taken a significant step forward in how React applications are structured. Server Components, streaming, and nested layouts are just some of the powerful capabilities that make building complex applications more intuitive and performant.",
            marks: [],
          },
        ],
      },
      {
        _type: "block",
        _key: "b7",
        style: "h2",
        markDefs: [],
        children: [{ _type: "span", _key: "s7", text: "Why Choose Next.js?", marks: [] }],
      },
      {
        _type: "block",
        _key: "b8",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: "s8",
            text: "Whether you are building a personal blog, an e-commerce platform, or a complex enterprise application, Next.js provides the tools and patterns you need. Its vibrant ecosystem, comprehensive documentation, and strong community support make it one of the most popular choices for React developers worldwide.",
            marks: [],
          },
        ],
      },
    ],
  },
};

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(postSlugsQuery);
  const sanityParams = slugs.map((slug) => ({ slug }));
  const mockParams = Object.keys(mockPosts).map((slug) => ({ slug }));
  return [...sanityParams, ...mockParams];
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

async function BlogPostBody({ slug }: { slug: string }) {
  const post: Post | null = await client.fetch(postBySlugQuery, { slug });

  if (post) {
    const headerProps = {
      tags: post.categories?.map((cat) => cat.title) || [],
      readTime: `${post.readTime} Min Read`,
      title: post.title,
      coverImage: getImageUrl(post.coverImage, 1440, 810),
      date: formatDate(post.publishedAt),
    };

    return (
      <>
        <BlogPostHeader {...headerProps} />
        <BlogPostContent body={post.body} />
      </>
    );
  }

  // Fallback to mock data
  const mockPost = mockPosts[slug];
  if (!mockPost) {
    notFound();
  }

  return (
    <>
      <BlogPostHeader {...mockPost.header} />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <BlogPostContent body={mockPost.body as any[]} />
    </>
  );
}

async function RelatedArticlesSection({ slug }: { slug: string }) {
  const post: Post | null = await client.fetch(postBySlugQuery, { slug });

  if (!post) {
    // For mock posts, render PopularArticles with default mock data
    return <PopularArticles title="Related Articles" />;
  }

  // Get raw category reference IDs for the related posts query
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const categoryIds: string[] = (post as any).categoryRefs || [];

  let relatedPosts: Post[] = [];
  if (categoryIds.length > 0) {
    relatedPosts = await client.fetch(relatedPostsQuery, {
      postId: post._id,
      categoryIds,
    });
  }

  if (relatedPosts.length === 0) {
    const featuredPosts: Post[] = await client.fetch(featuredPostsQuery);
    relatedPosts = featuredPosts.filter((p) => p._id !== post._id);
  }

  const relatedArticles = relatedPosts.map(transformPostToArticle);

  return <PopularArticles title="Related Articles" articles={relatedArticles} />;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-[#000000]">
      <Navbar />
      <Suspense fallback={<SkeletonBlogPostBody />}>
        <BlogPostBody slug={slug} />
      </Suspense>
      <Suspense fallback={<SkeletonArticlesSection />}>
        <RelatedArticlesSection slug={slug} />
      </Suspense>
      <Footer />
    </div>
  );
}
