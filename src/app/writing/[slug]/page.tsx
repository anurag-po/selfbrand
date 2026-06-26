import { getArticleBySlug, getArticles } from "@/lib/content";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export async function generateStaticParams() {
  const articles = getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.metadata.title,
    description: article.metadata.description,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto px-6 py-8">
      <FadeIn>
        <Link
          href="/writing"
          className="text-sm font-semibold tracking-wide text-gray-400 hover:text-accent mb-8 inline-block"
        >
          &larr; Back to Writing
        </Link>
      </FadeIn>

      <FadeIn delay={0.1}>
        <header className="mb-8">
          <time className="text-sm font-mono text-gray-500 block mb-3">
            {new Date(article.metadata.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-white leading-tight mb-4">
            {article.metadata.title}
          </h1>
          <p className="text-lg text-gray-400 font-sans leading-relaxed">
            {article.metadata.description}
          </p>
        </header>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="prose prose-invert max-w-none pt-4">
          <MDXRemote source={article.content} />
        </div>
      </FadeIn>
    </article>
  );
}
