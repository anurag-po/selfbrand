import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Library",
  description: "A curated list of books Anurag has read, with personal reflections.",
};

interface Book {
  title: string;
  author: string;
  reflection: string;
  category: string;
}

const books: Book[] = [
  {
    title: "Dark Matter",
    author: "Blake Crouch",
    reflection: "A mind-bending exploration of paths not taken and the choices that define our reality.",
    category: "Science Fiction",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    reflection: "A masterclass in tension, social commentary, and survival that remains as relevant today as when it was written.",
    category: "Fiction & Dystopia",
  },
  {
    title: "Three Men in a Boat",
    author: "Jerome K. Jerome",
    reflection: "A timeless, hilarious travelogue that captures the lighthearted absurdity of daily life and travel planning.",
    category: "Classics & Humor",
  },
  {
    title: "Five Survive",
    author: "Holly Jackson",
    reflection: "An intense, single-setting pressure cooker that proves how quickly secrets unravel under stress.",
    category: "Mystery & Suspense",
  },
  {
    title: "One of Us Is Lying",
    author: "Karen M. McManus",
    reflection: "A sharp, multi-perspective high school mystery that hooks you from the first page and keeps you guessing.",
    category: "Mystery & Suspense",
  },
];

export default function LibraryPage() {
  // Group books by category
  const categories = Array.from(new Set(books.map((b) => b.category)));

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-12">
      <div>
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">Library</h1>
          <p className="text-lg text-gray-400 font-sans max-w-2xl leading-relaxed">
            Books I've read and kept thinking about afterward.
          </p>
        </FadeIn>
      </div>

      <div className="space-y-12 pt-6">
        {categories.map((category, catIndex) => (
          <FadeIn key={category} delay={catIndex * 0.1}>
            <div className="space-y-6">
              <h2 className="text-xs font-serif uppercase tracking-wider text-accent font-bold border-b border-border-subtle pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {books
                  .filter((b) => b.category === category)
                  .map((book) => (
                    <div
                      key={book.title}
                      className="bg-bg-card border border-border-subtle rounded-lg p-5 hover:border-accent/40 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                        <h3 className="text-lg font-bold text-white font-serif">
                          {book.title}
                        </h3>
                        <span className="text-sm font-sans text-gray-500">
                          by {book.author}
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                        {book.reflection}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
