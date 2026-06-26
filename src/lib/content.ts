import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export interface ProjectMetadata {
  title: string;
  subtitle?: string;
  description: string;
  order: number;
  tags: string[];
  github?: string;
  demo?: string;
}

export interface Project {
  slug: string;
  metadata: ProjectMetadata;
  content: string;
}

export interface ArticleMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export interface Article {
  slug: string;
  metadata: ArticleMetadata;
  content: string;
}

export function getWorkProjects(): Project[] {
  const dirPath = path.join(contentDirectory, "work");
  if (!fs.existsSync(dirPath)) return [];
  const files = fs.readdirSync(dirPath);

  const projects = files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const fullPath = path.join(dirPath, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        metadata: data as ProjectMetadata,
        content,
      };
    });

  return projects.sort((a, b) => a.metadata.order - b.metadata.order);
}

export function getWorkProjectBySlug(slug: string): Project | null {
  const dirPath = path.join(contentDirectory, "work");
  const mdPath = path.join(dirPath, `${slug}.md`);
  const mdxPath = path.join(dirPath, `${slug}.mdx`);
  
  let fullPath = "";
  if (fs.existsSync(mdPath)) {
    fullPath = mdPath;
  } else if (fs.existsSync(mdxPath)) {
    fullPath = mdxPath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    metadata: data as ProjectMetadata,
    content,
  };
}

export function getArticles(): Article[] {
  const dirPath = path.join(contentDirectory, "writing");
  if (!fs.existsSync(dirPath)) return [];
  const files = fs.readdirSync(dirPath);

  const articles = files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const fullPath = path.join(dirPath, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        metadata: data as ArticleMetadata,
        content,
      };
    });

  return articles.sort(
    (a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | null {
  const dirPath = path.join(contentDirectory, "writing");
  const mdPath = path.join(dirPath, `${slug}.md`);
  const mdxPath = path.join(dirPath, `${slug}.mdx`);
  
  let fullPath = "";
  if (fs.existsSync(mdPath)) {
    fullPath = mdPath;
  } else if (fs.existsSync(mdxPath)) {
    fullPath = mdxPath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    metadata: data as ArticleMetadata,
    content,
  };
}
