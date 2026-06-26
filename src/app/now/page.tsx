import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: "Now",
  description: "A quick update on what Anurag is focused on, reading, and building right now.",
};

export default function NowPage() {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <div className="max-w-2xl mx-auto px-6 py-8 space-y-12">
      <div>
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">Now</h1>
          <p className="text-lg text-gray-400 font-sans leading-relaxed">
            This is a status page for a human being. It describes what I'm focused on and building right now. Inspired by Derek Sivers.
          </p>
        </FadeIn>
      </div>

      <div className="space-y-8 pt-6 border-t border-border-subtle">
        <FadeIn delay={0.05}>
          <section className="space-y-2">
            <h2 className="text-xs font-serif uppercase tracking-wider text-accent font-bold">
              Current Focus
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Completing my engineering internship at GACL, focusing on building high-performance offline systems. I'm also preparing for my final semesters in Computer Science at GCET.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.1}>
          <section className="space-y-2">
            <h2 className="text-xs font-serif uppercase tracking-wider text-accent font-bold">
              Current Project
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Refining <Link href="/work/alex" className="text-white hover:text-accent underline font-medium">ALEX</Link>, an intent-execution framework designed to bring safety and structure to AI agent pipelines.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.15}>
          <section className="space-y-2">
            <h2 className="text-xs font-serif uppercase tracking-wider text-accent font-bold">
              Current Reading
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              <span className="italic text-white">Project Hail Mary</span> by Andy Weir — a brilliant, technical sci-fi thriller about problem-solving and survival under constraints.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.2}>
          <section className="space-y-2">
            <h2 className="text-xs font-serif uppercase tracking-wider text-accent font-bold">
              Current Learning
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Diving deep into grammar-guided sampling techniques for local LLMs, and investigating low-latency inference runtimes like ONNX and vLLM.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.25}>
          <section className="space-y-2">
            <h2 className="text-xs font-serif uppercase tracking-wider text-accent font-bold">
              Current Goals
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-base md:text-lg text-gray-300 leading-relaxed">
              <li>Deploy GACL's offline OCR pipeline to production on the plant NUCs.</li>
              <li>Publish a comprehensive design write-up detailing grammar-guided sampling in ALEX.</li>
              <li>Improve my chess rating in blitz and rapid formats.</li>
            </ul>
          </section>
        </FadeIn>
      </div>

      <FadeIn delay={0.3}>
        <div className="border-t border-border-subtle pt-6 text-xs font-serif italic text-gray-500">
          Last updated: {formattedDate}
        </div>
      </FadeIn>
    </div>
  );
}
