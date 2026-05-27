"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "District Administration Raipur",
    description: "Employee management system for government administration. Streamlined workforce tracking, payroll integration, and HR operations.",
    category: "Government/Enterprise",
    tech: ["React", "Node.js", "PostgreSQL", "Authentication"],
    url: "https://shresthv2.rdmp.in/login",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/httpsshresthv2.rdmp.inlogin-Cp7mDvjPTM0nyV70jSy1xsT0AUVA8a.png",
  },
  {
    title: "Physio Battalions India",
    description: "Healthcare appointment booking and management platform. Integrated scheduling, patient records, and health tracking system.",
    category: "Healthcare",
    tech: ["Next.js", "Supabase", "Stripe", "Real-time Updates"],
    url: "https://physiobattalionsindia.in/",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/httpsphysiobattalionsindia.in-S25YlWvwxZnZn5UdW23SsG0EgOfGHM.png",
  },
  {
    title: "Shyam Kumar Resort",
    description: "Luxury resort booking platform with dynamic pricing, availability management, and integrated payment processing.",
    category: "Hospitality",
    tech: ["Next.js", "MongoDB", "Stripe", "AWS Storage"],
    url: "https://www.shyamkum.com/",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/httpswww.shyamkum.com-NvnFgwXSJwx5zGXhv5pfHcYwOalcG1.png",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Work in Action
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-balance text-lg">
            Explore the diverse projects we&apos;ve delivered across government, healthcare, and hospitality sectors.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="group h-full rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/20 group-hover:to-slate-900/10 transition-all duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="inline-block mb-3">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <div className="flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 mb-6">
            Have a project in mind? Let&apos;s build something amazing together.
          </p>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
