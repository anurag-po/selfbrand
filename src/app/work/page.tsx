import Link from "next/link";
import { getWorkProjects } from "@/lib/content";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Work",
  description: "Detailed case studies of software architectures, tools, and industrial pipelines built by Anurag.",
};

export default function WorkIndexPage() {
  const projects = getWorkProjects();

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-12">
      <div>
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">Work</h1>
          <p className="text-lg text-gray-400 font-sans max-w-2xl leading-relaxed">
            These are the things I've built. Each one started as a problem I couldn't stop thinking about.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 gap-8 pt-6">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.05}>
            <Link
              href={`/work/${project.slug}`}
              className="block bg-bg-card border border-border-subtle rounded-lg p-6 md:p-8 card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                  <h2 className="text-xl md:text-2xl font-bold text-white font-serif">
                    {project.metadata.title}
                  </h2>
                  {project.metadata.subtitle && (
                    <span className="text-sm font-serif italic text-accent">
                      {project.metadata.subtitle}
                    </span>
                  )}
                </div>
                <p className="text-base text-gray-400 leading-relaxed mb-6">
                  {project.metadata.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.metadata.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-bg-deep border border-border-subtle px-2.5 py-1 rounded text-gray-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-accent group-hover:text-accent-hover flex items-center gap-1">
                  Read Case Study &rarr;
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
