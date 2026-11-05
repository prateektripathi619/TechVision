"use client"

import Link from "next/link"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"
import { Sparkles, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-16 sm:pb-20 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/6266-190550868_medium.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-blue-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-2">
        {/* Badge - customize your announcement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-blue-300" />
          </motion.div>
          <span className="text-xs sm:text-sm text-white font-medium">
            We Build Digital Experiences That Grow Your Business
          </span>
        </motion.div>

        {/* Headline - customize your value proposition */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white block"
          >
            Transform your
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent"
          >
            digital vision.
          </motion.span>
        </motion.h1>

        {/* Subheadline - describe your product */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed text-balance px-2"
        >
          We help startups, businesses, and brands build high-performing
          websites, mobile applications, and digital solutions that drive real
          results.
        </motion.p>

        {/* Animated SVG Logo - Devcube */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4">Crafted by</p>
          <motion.div
            className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 mx-auto"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 400 100"
              fill="none"
              className="svg"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="50%" stopColor="#93c5fd" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              {/* D */}
              <motion.path
                d="M30 20 L30 80 L50 80 C65 80 75 70 75 50 C75 30 65 20 50 20 L30 20 M30 20 L30 80"
                vectorEffect="non-scaling"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              {/* E */}
              <motion.path
                d="M90 20 L90 80 L130 80 M90 20 L130 20 M90 50 L115 50"
                vectorEffect="non-scaling"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, delay: 0.1, ease: "easeInOut" }}
              />
              {/* V */}
              <motion.path
                d="M145 20 L165 80 L185 20"
                vectorEffect="non-scaling"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
              />
              {/* C */}
              <motion.path
                d="M225 20 C210 20 200 30 200 50 C200 70 210 80 225 80"
                vectorEffect="non-scaling"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              />
              {/* U */}
              <motion.path
                d="M240 20 L240 60 C240 75 250 80 260 80 C270 80 280 75 280 60 L280 20"
                vectorEffect="non-scaling"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
              />
              {/* B */}
              <motion.path
                d="M300 20 L300 80 L325 80 C340 80 350 70 350 55 C350 45 340 40 325 40 L300 40 M300 40 L325 40 C340 40 350 30 350 20 C350 10 340 20 325 20 L300 20"
                vectorEffect="non-scaling"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              />
              {/* E */}
              <motion.path
                d="M360 20 L360 80 L400 80 M360 20 L400 20 M360 50 L385 50"
                vectorEffect="non-scaling"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-full sm:w-auto"
          >
            <Link href="/contact">
              <LiquidCtaButton>Contact for Query </LiquidCtaButton>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="#services"
              className="group flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white hover:text-blue-300 transition-colors bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
