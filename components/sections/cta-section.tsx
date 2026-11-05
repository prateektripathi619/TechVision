"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"
import { motion } from "framer-motion"

export function CtaSection() {
  return (
    <section id="contact" className="px-4 sm:px-6 py-16 sm:py-20 md:py-24 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/50" />
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Animated floating orbs */}
      <motion.div
        className="absolute top-10 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-1/3 w-80 h-80 bg-indigo-500/10 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10 px-2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2"
        >
          Ready to transform your business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-300 mb-8 sm:mb-10 text-balance px-2"
        >
          Let&apos;s discuss how our expertise can solve your technology challenges. Schedule a free consultation with our team today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/contact">
              <LiquidCtaButton>Contact for Query</LiquidCtaButton>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }} className="w-full sm:w-auto">
            <Link
              href="#services"
              className="group flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white hover:text-blue-300 transition-colors bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <span>View Our Services</span>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
