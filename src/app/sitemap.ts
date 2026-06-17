import type { MetadataRoute } from "next";
import { client } from "../../sanity/lib/client";
import {
  postSlugsQuery,
  projectSlugsQuery,
  productSlugsQuery,
  serviceSlugsQuery,
} from "../../sanity/lib/queries";
import { siteConfig } from "@/lib/site";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/projects",
    "/products",
    "/blog",
    "/career",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const [postSlugs, projectSlugs, productSlugs, serviceSlugs]: [
    string[],
    string[],
    string[],
    string[]
  ] = await Promise.all([
    client.fetch(postSlugsQuery),
    client.fetch(projectSlugsQuery),
    client.fetch(productSlugsQuery),
    client.fetch(serviceSlugsQuery),
  ]);

  const dynamicRoutes: MetadataRoute.Sitemap = [
    ...(postSlugs || []).map((slug) => `/blog/${slug}`),
    ...(projectSlugs || []).map((slug) => `/projects/${slug}`),
    ...(productSlugs || []).map((slug) => `/products/${slug}`),
    ...(serviceSlugs || []).map((slug) => `/services/${slug}`),
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
