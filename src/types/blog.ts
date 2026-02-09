export interface Author {
  name: string;
  slug: { current: string };
  image?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  };
  bio?: string;
}

export interface Category {
  title: string;
  slug: { current: string };
  description?: string;
}

export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };
  author: Author;
  coverImage: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  };
  excerpt: string;
  categories?: Category[];
  publishedAt: string;
  readTime: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[];
  featured?: boolean;
}
