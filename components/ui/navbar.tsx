"use client"

import Link from "next/link"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-12 px-6 rounded-full bg-white/80 border border-slate-200/50 backdrop-blur-md shadow-md">
        <Link href="/" className="font-display text-lg font-semibold text-slate-900">
          TechVision
        </Link>
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm rounded-full transition-colors text-slate-600 hover:text-blue-600 hover:bg-blue-50"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-4 py-1.5 text-sm rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md"
          >
            Get in Touch
          </Link>
        </div>
      </nav>
    </header>
  )
}
