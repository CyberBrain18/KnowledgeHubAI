import { Link } from "react-router-dom";
import { BookOpen, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-stone-200 bg-stone-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-8 py-16 md:grid-cols-4">

        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-amber-700" />

            <h2 className="text-3xl font-bold tracking-tight text-stone-900">
              KnowledgeHub AI
            </h2>
          </div>

          <p className="mt-5 max-w-lg text-lg leading-8 text-stone-600">
            Discover timeless Indian spiritual wisdom through intelligent
            semantic search. Explore authentic texts, ask meaningful questions,
            and receive grounded, source-backed answers.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-stone-900">
            Explore
          </h3>

          <div className="space-y-3">

            <Link
              to="/"
              className="flex items-center gap-2 text-stone-600 transition-colors hover:text-amber-700"
            >
              <ChevronRight className="h-4 w-4" />
              Home
            </Link>

            <Link
              to="/library"
              className="flex items-center gap-2 text-stone-600 transition-colors hover:text-amber-700"
            >
              <ChevronRight className="h-4 w-4" />
              Library
            </Link>

            <Link
              to="/about"
              className="flex items-center gap-2 text-stone-600 transition-colors hover:text-amber-700"
            >
              <ChevronRight className="h-4 w-4" />
              About
            </Link>

          </div>
        </div>

        {/* Collections */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-stone-900">
            Collections
          </h3>

          <div className="space-y-3 text-stone-600">

            <p>Bhagavad Gita</p>

            <p>Upanishads</p>

            <p>Swami Vivekananda</p>

            <p>More Coming Soon</p>

          </div>
        </div>

      </div>

      <div className="border-t border-stone-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-6 text-sm text-stone-500 md:flex-row">

          <p>
            © 2026 KnowledgeHub AI. All rights reserved.
          </p>

          <p>
            Making timeless Indian spiritual wisdom accessible through AI.
          </p>

        </div>
      </div>
    </footer>
  );
}