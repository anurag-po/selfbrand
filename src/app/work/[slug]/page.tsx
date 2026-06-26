import { getWorkProjectBySlug, getWorkProjects } from "@/lib/content";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/Icons";
import FadeIn from "@/components/FadeIn";

export async function generateStaticParams() {
  const projects = getWorkProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getWorkProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.metadata.title} | Case Study`,
    description: project.metadata.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getWorkProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-8">
      <FadeIn>
        <Link
          href="/work"
          className="text-sm font-semibold tracking-wide text-gray-400 hover:text-accent mb-8 inline-block"
        >
          &larr; Back to Work
        </Link>
      </FadeIn>

      <FadeIn delay={0.1}>
        <header className="border-b border-border-subtle pb-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-white">
              {project.metadata.title}
            </h1>
            {project.metadata.subtitle && (
              <span className="text-lg font-serif italic text-accent">
                {project.metadata.subtitle}
              </span>
            )}
          </div>
          
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            {project.metadata.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-bg-card border border-border-subtle px-2.5 py-1 rounded text-gray-400 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {project.metadata.github && (
                <a
                  href={project.metadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white flex items-center gap-1.5 font-medium"
                >
                  <Github size={16} />
                  Code
                </a>
              )}
              {project.metadata.demo && (
                <a
                  href={project.metadata.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white flex items-center gap-1.5 font-medium"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </header>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="prose prose-invert max-w-none">
          <MDXRemote source={project.content} />
        </div>
      </FadeIn>
    </article>
  );
}
