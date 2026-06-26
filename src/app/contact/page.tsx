import FadeIn from "@/components/FadeIn";
import { Mail, Phone } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Anurag Puthiyaveetil Othayoth.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-8 space-y-12">
      <div>
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">Contact</h1>
          <p className="text-lg text-gray-400 font-sans leading-relaxed">
            If you have a problem that needs solving, want to collaborate on a project, or just want to say hello—get in touch.
          </p>
        </FadeIn>
      </div>

      <div className="space-y-6 pt-6 border-t border-border-subtle">
        {/* Email at the top */}
        <FadeIn delay={0.05}>
          <div className="bg-bg-card border border-border-subtle rounded-lg p-6 flex items-center justify-between group hover:border-accent transition-colors">
            <div className="flex items-center gap-4">
              <div className="text-accent bg-accent/10 p-3 rounded-full">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-xs font-serif uppercase tracking-wider text-gray-500 font-bold mb-1">
                  Email
                </div>
                <a
                  href="mailto:anuragpo393@gmail.com"
                  className="text-base md:text-lg text-white hover:text-accent font-medium transition-colors"
                >
                  anuragpo393@gmail.com
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* LinkedIn */}
        <FadeIn delay={0.1}>
          <div className="bg-bg-card border border-border-subtle rounded-lg p-6 flex items-center justify-between group hover:border-accent transition-colors">
            <div className="flex items-center gap-4">
              <div className="text-accent bg-accent/10 p-3 rounded-full">
                <Linkedin size={24} />
              </div>
              <div>
                <div className="text-xs font-serif uppercase tracking-wider text-gray-500 font-bold mb-1">
                  LinkedIn
                </div>
                <a
                  href="https://linkedin.com/in/anurag-po"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg text-white hover:text-accent font-medium transition-colors"
                >
                  linkedin.com/in/anurag-po
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* GitHub */}
        <FadeIn delay={0.15}>
          <div className="bg-bg-card border border-border-subtle rounded-lg p-6 flex items-center justify-between group hover:border-accent transition-colors">
            <div className="flex items-center gap-4">
              <div className="text-accent bg-accent/10 p-3 rounded-full">
                <Github size={24} />
              </div>
              <div>
                <div className="text-xs font-serif uppercase tracking-wider text-gray-500 font-bold mb-1">
                  GitHub
                </div>
                <a
                  href="https://github.com/anurag-po"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg text-white hover:text-accent font-medium transition-colors"
                >
                  github.com/anurag-po
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Phone */}
        <FadeIn delay={0.2}>
          <div className="bg-bg-card border border-border-subtle rounded-lg p-6 flex items-center justify-between group hover:border-accent transition-colors">
            <div className="flex items-center gap-4">
              <div className="text-accent bg-accent/10 p-3 rounded-full">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-xs font-serif uppercase tracking-wider text-gray-500 font-bold mb-1">
                  Phone Number
                </div>
                <a
                  href="tel:+917863086776"
                  className="text-base md:text-lg text-white hover:text-accent font-medium transition-colors"
                >
                  +91 78630 86776
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
