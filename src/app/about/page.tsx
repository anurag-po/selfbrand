import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "About",
  description: "The story behind how Anurag got into engineering, automation, and building systems that remove friction.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-8 space-y-12">
      <div>
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">About</h1>
        </FadeIn>
      </div>

      <div className="space-y-8 font-sans text-base md:text-lg leading-relaxed text-gray-300">
        <FadeIn delay={0.05}>
          <p>
            I build software to solve problems that feel like unnecessary chores. I don't care about software for its own sake; I care about what it does for the person using it. To me, a computer is a powerful cognitive lever, but too often, poorly designed interfaces and complex system flows turn it into a source of friction. My goal is to build systems that sit quietly in the background, understand user intent, and execute it reliably.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-xl font-serif font-bold text-white border-b border-border-subtle pb-2 mt-8 mb-4">
            Early Curiosity
          </h2>
          <p>
            My interest in structured problem-solving began in school during a national-level mathematics exhibition. Rather than presenting abstract formulas, my project focused on visual geometry and spatial modeling—how simple, physical rules can explain complex, chaotic structures. That project taught me a fundamental lesson: behind every cluttered or confusing system, there is a set of core principles that can make it clear.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2 className="text-xl font-serif font-bold text-white border-b border-border-subtle pb-2 mt-8 mb-4">
            Discovering Software
          </h2>
          <p>
            When I started coding, my first project wasn't a game or a website; it was a simple script to automate sorting files on my desktop. The moment I watched a boring, repetitive task vanish in a millisecond, something clicked. I realized that software is a medium for ideas. It is a way to construct systems that run on logic, remove human effort, and perform work on your behalf.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-xl font-serif font-bold text-white border-b border-border-subtle pb-2 mt-8 mb-4">
            SAM and the Assistant Journey
          </h2>
          <p>
            In 2021, I set out to build a fully local, offline voice assistant named SAM. The challenge was that my laptop was slow and had limited memory. Running modern neural networks was out of the question. I spent months diving into optimization, writing lightweight classifiers in RASA, and using low-overhead speech synthesis. The assistant was successful, but it taught me a deeper lesson: LLMs and generative agents are powerful compilers of language, but they cannot act as safe control layers. This realization led directly to my work on ALEX—separating natural language interpretation from deterministic, validated execution.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <h2 className="text-xl font-serif font-bold text-white border-b border-border-subtle pb-2 mt-8 mb-4">
            Today
          </h2>
          <p>
            Currently, I am a Computer Science student at GCET and a development intern at GACL. At GACL, I build offline computer vision pipelines that parse analog and digital readouts from camera feeds in chemical plants, saving operators hours of manual check-ins. When I am not in the lab or at my desk, I am working on open-source packages to make local AI models more controllable and useful in production systems.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h2 className="text-xl font-serif font-bold text-white border-b border-border-subtle pb-2 mt-8 mb-4">
            Beyond Engineering
          </h2>
          <p>
            When I am not looking at code, I read fiction (specifically dystopian and mystery novels), play blitz chess, draw, and read about space exploration. I believe that having interests outside of engineering isn't a distraction—it provides the context and texture that help you understand what people actually care about when they sit down in front of a screen.
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="border-t border-border-subtle pt-6 font-serif italic text-gray-400">
            I'm headed toward building systems that are invisible, predictable, and exceptionally fast. If you're interested in making computers easier for people to use, we should talk.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
