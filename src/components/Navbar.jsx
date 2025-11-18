import { Link, NavLink } from 'react-router-dom'
import { Menu, X, LogIn } from 'lucide-react'
import { useState } from 'react'

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-orange-400 shadow-sm"></div>
              <span className="font-semibold text-slate-900 text-lg tracking-tight">Selly</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/product">Product</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              <LogIn className="h-4 w-4" /> Login
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition"
            >
              Get a demo
            </Link>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 space-y-2">
            <NavItem to="/product" onClick={() => setOpen(false)}>Product</NavItem>
            <NavItem to="/about" onClick={() => setOpen(false)}>About</NavItem>
            <NavItem to="/contact" onClick={() => setOpen(false)}>Contact</NavItem>
            <div className="pt-2 flex items-center gap-3">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                <LogIn className="h-4 w-4" /> Login
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition"
              >
                Get a demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
