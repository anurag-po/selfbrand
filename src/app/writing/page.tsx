import Link from "next/link";
import { getArticles } from "@/lib/content";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Writing",
  description: "A collection of thoughts, reflections, and design philosophies written by Anurag.",
};

export default function WritingIndexPage() {
  const articles = getArticles();

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-12">
      <div>
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">Writing</h1>
          <p className="text-lg text-gray-400 font-sans max-w-2xl leading-relaxed">
            A quiet archive of essays, architectural post-mortems, and reflections on building software.
          </p>
        </FadeIn>
      </div>

      <div className="space-y-12 pt-6">
        {articles.map((article, index) => (
          <FadeIn key={article.slug} delay={index * 0.05}>
            <Link
              href={`/writing/${article.slug}`}
              className="group block border-b border-border-subtle pb-8 hover:border-accent/40 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h2 className="text-xl font-bold text-white group-hover:text-accent transition-colors font-serif">
                  {article.metadata.title}
                </h2>
                <time className="text-sm font-mono text-gray-500 whitespace-nowrap">
                  {new Date(article.metadata.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <p className="text-base text-gray-400 leading-relaxed mt-3">
                {article.metadata.description}
              </p>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
