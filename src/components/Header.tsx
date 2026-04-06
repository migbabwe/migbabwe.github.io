import { Link } from '@tanstack/react-router'
import { useState } from 'react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-amber-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold hover:text-amber-200 transition-colors">
          <span className="text-2xl">🐾</span>
          <span>Happy Paws Kennel</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-amber-200 transition-colors [&.active]:text-amber-200 [&.active]:underline">
            Home
          </Link>
          <Link to="/dogs" className="hover:text-amber-200 transition-colors [&.active]:text-amber-200 [&.active]:underline">
            Available Dogs
          </Link>
          <Link to="/contact" className="hover:text-amber-200 transition-colors [&.active]:text-amber-200 [&.active]:underline">
            Contact
          </Link>
          <Link
            to="/dogs"
            className="bg-white text-amber-700 px-4 py-2 rounded-full font-semibold hover:bg-amber-100 transition-colors"
          >
            Find Your Dog
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-amber-600 px-4 py-3 flex flex-col gap-3 text-sm font-medium">
          <Link to="/" className="hover:text-amber-200" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/dogs" className="hover:text-amber-200" onClick={() => setMenuOpen(false)}>Available Dogs</Link>
          <Link to="/contact" className="hover:text-amber-200" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  )
}
