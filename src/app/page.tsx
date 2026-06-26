import Link from "next/link";
import { getWorkProjects, getArticles } from "@/lib/content";
import FadeIn from "@/components/FadeIn";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function HomePage() {
  const allProjects = getWorkProjects();
  const featuredProjects = allProjects.slice(0, 4); // ALEX, GACL OCR, Nexlyra, MinuteMind
  const recentArticles = getArticles().slice(0, 3); // top 3 recent articles

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-24">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-center relative">
        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif leading-[1.1] mb-6">
            I build software that <span className="text-accent">removes friction</span> between people and computers.
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.25}>
          <p className="text-lg md:text-xl text-gray-400 font-sans max-w-2xl leading-relaxed mb-8">
            Computer Science student, software engineer, and builder of AI-powered tools, automation systems, and desktop applications. Currently interning at GACL, studying at GCET, and figuring out what software should feel like.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex items-center gap-6 text-sm font-semibold tracking-wide">
            <Link
              href="/work"
              className="text-white hover:text-accent flex items-center gap-1 group"
            >
              View Work
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <span className="text-gray-600">·</span>
            <a
              href="https://github.com/anurag-po"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-600">·</span>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>
        </FadeIn>


      </section>

      {/* Current Status Section */}
      <section className="border-t border-border-subtle pt-12">
        <FadeIn direction="up">
          <div className="bg-bg-card border border-border-subtle rounded-lg px-6 py-5 max-w-2xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-xs font-serif uppercase tracking-wider text-accent font-semibold">
                Current Status
              </span>
            </div>
            <p className="text-sm md:text-base text-gray-300 font-sans leading-relaxed">
              Currently: Development intern at <span className="text-white font-medium">GACL</span>, building industrial OCR systems. Studying Computer Science at <span className="text-white font-medium">GCET</span>. Working on <span className="text-white font-medium">ALEX</span>.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Featured Work Section */}
      <section className="space-y-8">
        <FadeIn>
          <div className="flex justify-between items-end">
            <h2 className="text-2xl font-bold font-serif text-white">Featured Work</h2>
            <Link
              href="/work"
              className="text-sm font-semibold tracking-wide text-gray-400 hover:text-accent flex items-center gap-1 group"
            >
              All projects
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <Link
                href={`/work/${project.slug}`}
                className="block bg-bg-card border border-border-subtle rounded-lg p-6 card-hover h-full flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-white font-serif mb-2">
                    {project.metadata.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {project.metadata.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.metadata.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-bg-deep border border-border-subtle px-2 py-0.5 rounded text-gray-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-8 border-y border-border-subtle">
        <FadeIn>
          <div className="max-w-2xl">
            <div className="text-xs font-serif uppercase tracking-wider text-accent font-semibold mb-3">
              Philosophy
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-white mb-4 leading-tight">
              "Software should adapt to people."
            </h3>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Most software forces people to learn its logic. The interesting problem is the opposite — building systems that understand what people actually mean and handle the rest invisibly. That's what I keep trying to build.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Recent Writing Section */}
      <section className="space-y-8">
        <FadeIn>
          <div className="flex justify-between items-end">
            <h2 className="text-2xl font-bold font-serif text-white">Recent Writing</h2>
            <Link
              href="/writing"
              className="text-sm font-semibold tracking-wide text-gray-400 hover:text-accent flex items-center gap-1 group"
            >
              Archive
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {recentArticles.map((article, index) => (
            <FadeIn key={article.slug} delay={index * 0.1}>
              <Link
                href={`/writing/${article.slug}`}
                className="group block border-b border-border-subtle pb-6 hover:border-accent/40 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors font-serif">
                    {article.metadata.title}
                  </h3>
                  <time className="text-xs font-mono text-gray-500 whitespace-nowrap">
                    {new Date(article.metadata.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mt-2">
                  {article.metadata.description}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
