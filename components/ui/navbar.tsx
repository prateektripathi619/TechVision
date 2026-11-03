"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#about", label: "About" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="max-w-5xl mx-auto flex items-center justify-between h-12 px-6 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-lg shadow-blue-500/10"
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link href="/" className="font-display text-lg font-semibold text-white">
            Devcube
          </Link>
        </motion.div>
        <div className="flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <Link
                href={link.href}
                className="px-4 py-1.5 text-sm rounded-full transition-colors text-slate-300 hover:text-blue-400 hover:bg-white/10 block"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="ml-2 px-4 py-1.5 text-sm rounded-full bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors shadow-md hover:shadow-lg hover:shadow-blue-500/30 block"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.nav>
    </header>
  )
}
