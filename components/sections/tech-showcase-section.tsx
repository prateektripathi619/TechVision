"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const techImages = [
  {
    src: "/cloud-architecture-dark.jpg",
    title: "Cloud Architecture",
    description: "Scalable infrastructure built for growth",
  },
  {
    src: "/devops-pipeline-dark.jpg",
    title: "DevOps & CI/CD",
    description: "Automated deployment pipelines",
  },
  {
    src: "/data-infrastructure-dark.jpg",
    title: "Data Infrastructure",
    description: "Enterprise-grade data systems",
  },
]

export function TechShowcaseSection() {
  return (
    <section id="technology" className="px-6 py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4">Technology</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Modern tech stack for enterprise scale
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-balance text-lg">
            We build with cutting-edge technologies and proven architectural patterns to deliver robust, scalable solutions.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl font-semibold text-white mb-2">{image.title}</h3>
                <p className="text-sm text-slate-100">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-slate-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-heading font-semibold text-slate-900 mb-4">Frontend</h4>
              <p className="text-sm text-slate-600 space-y-2">
                React, Next.js, TypeScript, Tailwind CSS, Vue.js
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-slate-900 mb-4">Backend</h4>
              <p className="text-sm text-slate-600 space-y-2">
                Node.js, Python, Go, Java, PostgreSQL, MongoDB
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-slate-900 mb-4">Infrastructure</h4>
              <p className="text-sm text-slate-600 space-y-2">
                AWS, Google Cloud, Azure, Docker, Kubernetes
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
