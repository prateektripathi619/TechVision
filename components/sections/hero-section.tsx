"use client"

import Link from "next/link"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"
import { Sparkles, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 relative overflow-hidden">
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
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Badge - customize your announcement */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <Sparkles className="w-4 h-4 text-blue-300" />
          <span className="text-sm text-white font-medium">
            We Build Digital Experiences That Grow Your Business
          </span>
        </div>

        {/* Headline - customize your value proposition */}
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-white block">Transform your</span>
          <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
            digital vision.
          </span>
        </h1>

        {/* Subheadline - describe your product */}
        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          We help startups, businesses, and brands build high-performing
          websites, mobile applications, and digital solutions that drive real
          results.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <LiquidCtaButton>Contact for Query </LiquidCtaButton>
          </Link>
          <Link
            href="#services"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-white hover:text-blue-300 transition-colors bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>


      </div>
    </section>
  );
}
