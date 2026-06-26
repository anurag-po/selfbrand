import { Mail, FileText } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border-subtle bg-bg-deep py-12 mt-auto">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-gray-400 text-sm font-medium">
          Anurag Puthiyaveetil Othayoth
        </div>
        
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/anurag-po"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors p-1"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/anurag-po"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors p-1"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors p-1"
            title="Resume"
          >
            <FileText size={18} />
          </a>
          <a
            href="mailto:anuragpo393@gmail.com"
            className="text-gray-400 hover:text-accent transition-colors p-1"
            title="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 mt-6 flex justify-between text-xs text-gray-500">
        <div>Built by Anurag. Continuously evolving.</div>
        <div>&copy; {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}
