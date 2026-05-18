"use client"

import { motion } from "motion/react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "TechVision rebuilt our entire e-commerce platform. Result: 300% faster load times and 45% increase in conversion rates within 6 months.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Sarah Chen",
    role: "CEO at RetailPro",
  },
  {
    text: "We needed a mobile app urgently. TechVision delivered a feature-rich iOS and Android app in 8 weeks. Our user acquisition grew 200%.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Marcus Johnson",
    role: "Founder at MobileFlow",
  },
  {
    text: "The AI integration TechVision built automated 80% of our customer support. Saved us $120K annually and improved satisfaction by 40%.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Emily Rodriguez",
    role: "VP Product at InsightAI",
  },
  {
    text: "Migration to cloud infrastructure was seamless. TechVision&apos;s DevOps expertise eliminated downtime and cut infrastructure costs by 35%.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "David Park",
    role: "CTO at DataCore",
  },
  {
    text: "Building a real-time analytics dashboard seemed impossible. TechVision made it reality. It transformed our business intelligence completely.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Aisha Patel",
    role: "Analytics Lead at Quantum",
  },
  {
    text: "We were stuck with legacy systems. TechVision&apos;s modernization strategy got us to microservices and 5x performance improvement.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "James Wilson",
    role: "CEO at LegacyTech",
  },
  {
    text: "TechVision&apos;s enterprise integration solved our biggest challenge: connecting 15 different systems into one cohesive platform.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Lisa Thompson",
    role: "Director of IT at FortuneCorp",
  },
  {
    text: "Security was paramount. TechVision built a HIPAA-compliant healthcare platform that exceeds all enterprise requirements. Trust. Delivered.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Michael Brown",
    role: "SVP Technology at HealthCare+",
  },
  {
    text: "From concept to launch in 12 weeks. TechVision&apos;s agile approach and technical excellence delivered exactly what we envisioned.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Rachel Kim",
    role: "Founder at StartupXYZ",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const logos = ["RetailPro", "MobileFlow", "InsightAI", "DataCore", "Quantum", "HealthCare+"]

export function TestimonialsSection() {
  return (
    <section id="case-studies" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-zinc-800 py-1.5 px-4 rounded-full text-sm text-zinc-400">Case Studies</div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-6 text-center tracking-tight">
            Proven results across industries
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            See how we&apos;ve helped companies like yours achieve their technology goals.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500 mb-8">Our clients include companies from Fortune 500s to innovative startups</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-xl font-semibold text-zinc-700 whitespace-nowrap flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
