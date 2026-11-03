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
    <section id="portfolio" className="px-6 py-24 bg-slate-800 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900/30" />
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Animated floating orbs */}
      <motion.div
        className="absolute top-10 right-20 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-20 w-96 h-96 bg-indigo-500/10 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <p className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-4">Portfolio</p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Work in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-300 max-w-2xl mx-auto text-balance text-lg"
          >
            Explore the diverse projects we&apos;ve delivered across government, healthcare, and hospitality sectors.
          </motion.p>
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
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-300 overflow-hidden cursor-pointer relative">
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/15 group-hover:to-purple-400/15 transition-all duration-500 pointer-events-none"
                  />

                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden bg-slate-900">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.2, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/40 group-hover:to-slate-900/20 transition-all duration-300"
                    />
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                    {/* Pulsing glow on hover */}
                    <motion.div
                      className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-500"
                      animate={{
                        opacity: [0, 0.1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 1,
                      }}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 relative z-10">
                    {/* Category Badge */}
                    <motion.div
                      className="inline-block mb-3"
                      whileHover={{ scale: 1.15, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.span
                        className="text-xs font-medium text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30 group-hover:bg-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300 block"
                        whileHover={{
                          boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                        }}
                      >
                        {project.category}
                      </motion.span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="font-heading text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors"
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-slate-300 text-sm mb-4 line-clamp-3 group-hover:text-slate-200 transition-colors"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Tech Stack */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-400/30 group-hover:text-blue-300 transition-all duration-300"
                          whileHover={{
                            scale: 1.15,
                            y: -2,
                          }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <motion.div
                      className="flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors"
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span>View Project</span>
                      <motion.div
                        whileHover={{ x: 6, y: -6 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
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
          <p className="text-slate-300 mb-6">
            Have a project in mind? Let&apos;s build something amazing together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
