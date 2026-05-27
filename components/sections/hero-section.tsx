"use client"

import Link from "next/link"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"
import { Sparkles, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 relative bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Badge - customize your announcement */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-sm text-blue-700 font-medium">Custom Solutions for Modern Businesses</span>
        </div>

        {/* Headline - customize your value proposition */}
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-slate-900 block">Transform your</span>
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            digital vision.
          </span>
        </h1>

        {/* Subheadline - describe your product */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          Expert software development and cloud solutions tailored to your business. From web and mobile apps to enterprise infrastructure, we build technology that drives growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#contact">
            <LiquidCtaButton>Schedule a Consultation</LiquidCtaButton>
          </Link>
          <Link
            href="#services"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-white hover:-translate-y-1 transition object-cover z-[1] shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-white hover:-translate-y-1 transition object-cover z-[2] shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-white hover:-translate-y-1 transition object-cover z-[3] shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-white hover:-translate-y-1 transition object-cover z-[4] shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-white hover:-translate-y-1 transition object-cover z-[5] shadow-sm"
              />
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#2563EB"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                ))}
                <span className="text-slate-600 font-medium ml-1 text-sm">4.9</span>
              </div>
              <p className="text-sm text-slate-500">
                Trusted by <span className="text-slate-700 font-medium">50+ US Companies</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
