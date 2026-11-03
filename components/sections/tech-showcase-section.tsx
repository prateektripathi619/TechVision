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
  {
    src: "/analytics-dashboard-dark-mode-with-charts-and-grap.jpg",
    title: "Machine Learning",
    description: "AI-powered intelligent solutions",
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    title: "App Development",
    description: "Native & cross-platform mobile apps",
  },
]

export function TechShowcaseSection() {
  return (
    <section id="technology" className="px-6 py-24 bg-slate-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900/30" />
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Animated floating orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
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
            <p className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-4">Technology</p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Modern tech stack for enterprise scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-300 max-w-2xl mx-auto text-balance text-lg"
          >
            We build with cutting-edge technologies and proven architectural patterns to deliver robust, scalable solutions.
          </motion.p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -16, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/15 group-hover:to-purple-400/15 transition-all duration-500 pointer-events-none z-10"
              />

              <div className="aspect-square relative overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                {/* Overlay gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"
                />
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
                {/* Pulsing border effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-500 rounded-2xl"
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 1,
                  }}
                />
              </div>

              {/* Content */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 z-20"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.h3
                  className="font-heading text-xl font-semibold text-white mb-2"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {image.title}
                </motion.h3>
                <motion.p
                  className="text-sm text-slate-200 group-hover:text-white transition-colors"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, delay: 0.05 }}
                >
                  {image.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Frontend", tech: "React, Next.js, TypeScript, Tailwind CSS, Vue.js" },
              { title: "Backend", tech: "Node.js, Python, Go, Java, PostgreSQL, MongoDB" },
              { title: "Infrastructure", tech: "AWS, Google Cloud, Azure, Docker, Kubernetes" },
              { title: "Machine Learning", tech: "TensorFlow, PyTorch, OpenAI, LangChain, Scikit-learn" },
              { title: "Mobile Apps", tech: "React Native, Flutter, Swift, Kotlin, Firebase" },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 12, scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group p-4 rounded-xl border border-white/10 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 cursor-default relative overflow-hidden"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"
                />
                <motion.h4
                  className="font-heading font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors relative z-10"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {category.title}
                </motion.h4>
                <motion.p
                  className="text-sm text-slate-300 space-y-2 group-hover:text-slate-200 transition-colors relative z-10"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, delay: 0.05 }}
                >
                  {category.tech}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
