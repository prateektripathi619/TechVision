"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#about", label: "About" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-3 sm:p-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="max-w-5xl mx-auto flex items-center justify-between h-12 sm:h-14 px-4 sm:px-6 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-lg shadow-blue-500/10"
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link href="/" className="font-display text-base sm:text-lg font-semibold text-white">
            Devcube
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-1">
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

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="sm:hidden p-2 text-white hover:text-blue-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="sm:hidden absolute top-20 left-4 right-4 rounded-2xl bg-slate-900/95 border border-white/10 backdrop-blur-md shadow-xl shadow-blue-500/20 p-4"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="px-4 py-3 text-sm rounded-lg transition-colors text-slate-300 hover:text-blue-400 hover:bg-white/10 block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="px-4 py-3 text-sm rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors shadow-md hover:shadow-lg hover:shadow-blue-500/30 block text-center"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
