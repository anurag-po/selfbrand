import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Anurag Puthiyaveetil Othayoth",
    template: "%s | Anurag"
  },
  description: "I build software that removes friction between people and computers. Computer Science student, software engineer, and builder of AI-powered tools.",
  keywords: [
    "Anurag", 
    "Anurag Puthiyaveetil Othayoth", 
    "Software Engineer", 
    "AI Tools", 
    "OCR Pipeline", 
    "ALEX Framework", 
    "Nexlyra Browser", 
    "GCET", 
    "GACL"
  ],
  openGraph: {
    title: "Anurag Puthiyaveetil Othayoth",
    description: "I build software that removes friction between people and computers.",
    url: "https://anurag.dev",
    siteName: "Anurag",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://anurag.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} h-full antialiased scroll-smooth`}
    >
      <body className="bg-bg-deep text-gray-200 min-h-full flex flex-col font-sans selection:bg-accent/30 selection:text-white">
        <Navbar />
        <main className="flex-grow pt-24 pb-16 md:pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
