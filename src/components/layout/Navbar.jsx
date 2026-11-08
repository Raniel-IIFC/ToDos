import { useState } from 'react'
import { NavLink } from 'react-router'

const NAV_LINKS = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/tasks', label: 'Tasks', end: false },
]

function navLinkClass({ isActive }) {
  const base = 'block rounded-md px-3 py-3 text-sm font-medium transition-colors sm:py-2'
  return isActive
    ? `${base} bg-brand-50 text-brand-700`
    : `${base} text-slate-600 hover:bg-slate-100 hover:text-slate-900`
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-20border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          aria-label="Toggle navigation menu"
          className="rounded-md p-2 text-slate-600 hover:bg-slate-100 sm:hidden"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul
          id="main-menu"
          className={`${isMenuOpen ? 'flex' : 'hidden'} w-full flex-col gap-1 pt-3 sm:flex sm:w-auto sm:flex-row sm:pt-0`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end} onClick={closeMenu} className={navLinkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
