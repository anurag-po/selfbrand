import { MetadataRoute } from "next";
import { getWorkProjects, getArticles } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://anurag.dev";

  // Base routes
  const routes = ["", "/work", "/writing", "/library", "/now", "/about", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Work projects routes
  const projects = getWorkProjects().map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Articles routes
  const articles = getArticles().map((article) => ({
    url: `${baseUrl}/writing/${article.slug}`,
    lastModified: new Date(article.metadata.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projects, ...articles];
}
