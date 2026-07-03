import { NavLink } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <NavLink
          to="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <BookOpen className="h-8 w-8 text-amber-700" />

          <span className="text-3xl font-bold tracking-tight text-stone-900">
            KnowledgeHub AI
          </span>
        </NavLink>

        <nav className="flex items-center gap-10 text-lg font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-amber-700"
                  : "text-stone-600 hover:text-stone-900"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/library"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-amber-700"
                  : "text-stone-600 hover:text-stone-900"
              }`
            }
          >
            Library
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-amber-700"
                  : "text-stone-600 hover:text-stone-900"
              }`
            }
          >
            About
          </NavLink>

        </nav>

      </div>
    </header>
  );
}