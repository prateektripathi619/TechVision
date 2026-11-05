"use client"

import { motion } from "framer-motion"
import { Code2, Smartphone, Cloud, Database, Brain, Building2, Zap, TrendingDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section id="services" className="px-4 sm:px-6 py-16 sm:py-20 md:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/50" />
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Animated floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10 px-2">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <p className="text-xs sm:text-sm font-medium text-blue-400 uppercase tracking-wider mb-4">Services</p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-2"
          >
            Comprehensive solutions for every need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto text-balance px-2"
          >
            From concept to deployment, we deliver end-to-end technology solutions tailored to your business goals.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {/* Service 1 - Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="group h-full overflow-hidden border-white/10 bg-white/5 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-300 rounded-2xl relative">
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"
              />
              <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30 group-hover:bg-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300"
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Code2 className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </motion.div>
                  <motion.p
                    className="font-heading font-semibold text-white"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Web Development
                  </motion.p>
                </div>
                <motion.p
                  className="text-slate-300 text-sm mb-4 group-hover:text-slate-200 transition-colors"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Modern, responsive websites and web applications built with the latest technologies. React, Next.js, and more.
                </motion.p>
                <div className="mt-auto">
                  <motion.p
                    className="text-xs text-slate-400 group-hover:text-blue-300 transition-colors"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    React • Next.js • TypeScript • Tailwind
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service 2 - Mobile Apps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="group h-full overflow-hidden border-white/10 bg-white/5 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-300 rounded-2xl relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"
              />
              <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30 group-hover:bg-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Smartphone className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </motion.div>
                  <motion.p
                    className="font-heading font-semibold text-white"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Mobile Apps
                  </motion.p>
                </div>
                <motion.p
                  className="text-slate-300 text-sm mb-4 group-hover:text-slate-200 transition-colors"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Native iOS and Android applications. Cross-platform solutions with Flutter and React Native for wider reach.
                </motion.p>
                <div className="mt-auto">
                  <motion.p
                    className="text-xs text-slate-400 group-hover:text-blue-300 transition-colors"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Swift • Kotlin • Flutter • React Native
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service 3 - Cloud & DevOps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="group h-full overflow-hidden border-white/10 bg-white/5 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-300 rounded-2xl relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"
              />
              <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30 group-hover:bg-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300"
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <Cloud className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </motion.div>
                  <motion.p
                    className="font-heading font-semibold text-white"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Cloud & DevOps
                  </motion.p>
                </div>
                <motion.p
                  className="text-slate-300 text-sm mb-4 group-hover:text-slate-200 transition-colors"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Infrastructure deployment, CI/CD pipelines, and cloud architecture. AWS, Google Cloud, and Azure expertise.
                </motion.p>
                <div className="mt-auto">
                  <motion.p
                    className="text-xs text-slate-400 group-hover:text-blue-300 transition-colors"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    AWS • Docker • Kubernetes • CI/CD
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service 4 - Backend Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="group h-full overflow-hidden border-white/10 bg-white/5 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-300 rounded-2xl relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"
              />
              <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30 group-hover:bg-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300"
                    whileHover={{ y: -4, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Database className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </motion.div>
                  <motion.p
                    className="font-heading font-semibold text-white"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Backend Development
                  </motion.p>
                </div>
                <motion.p
                  className="text-slate-300 text-sm mb-4 group-hover:text-slate-200 transition-colors"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Scalable APIs and microservices. Node.js, Python, Go, and Java with robust database design and optimization.
                </motion.p>
                <div className="mt-auto">
                  <motion.p
                    className="text-xs text-slate-400 group-hover:text-blue-300 transition-colors"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Node.js • Python • PostgreSQL • MongoDB
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service 5 - AI & Machine Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="group h-full overflow-hidden border-white/10 bg-white/5 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-300 rounded-2xl relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"
              />
              <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30 group-hover:bg-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300"
                    whileHover={{ rotate: [0, 360], scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Brain className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </motion.div>
                  <motion.p
                    className="font-heading font-semibold text-white"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    AI & Machine Learning
                  </motion.p>
                </div>
                <motion.p
                  className="text-slate-300 text-sm mb-4 group-hover:text-slate-200 transition-colors"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Intelligent solutions using LLMs and ML models. Computer vision, NLP, and predictive analytics for business intelligence.
                </motion.p>
                <div className="mt-auto">
                  <motion.p
                    className="text-xs text-slate-400 group-hover:text-blue-300 transition-colors"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    TensorFlow • PyTorch • OpenAI • LangChain
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service 6 - Enterprise Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="group h-full overflow-hidden border-white/10 bg-white/5 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-300 rounded-2xl relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"
              />
              <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30 group-hover:bg-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Building2 className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </motion.div>
                  <motion.p
                    className="font-heading font-semibold text-white"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Enterprise Solutions
                  </motion.p>
                </div>
                <motion.p
                  className="text-slate-300 text-sm mb-4 group-hover:text-slate-200 transition-colors"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Complex systems for large organizations. Integration, security, compliance, and scalability expertise for mission-critical apps.
                </motion.p>
                <div className="mt-auto">
                  <motion.p
                    className="text-xs text-slate-400 group-hover:text-blue-300 transition-colors"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    SOC2 • HIPAA • Enterprise Architecture
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service 7 - Serverless & Cost Optimization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="group h-full overflow-hidden border-white/10 bg-white/5 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-300 rounded-2xl relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"
              />
              <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30 group-hover:bg-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300"
                    animate={{ y: [0, -3, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    whileHover={{ scale: 1.3 }}
                  >
                    <Zap className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </motion.div>
                  <motion.p
                    className="font-heading font-semibold text-white"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Serverless & Optimization
                  </motion.p>
                </div>
                <motion.p
                  className="text-slate-300 text-sm mb-4 group-hover:text-slate-200 transition-colors"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Build serverless applications with AWS Lambda, Firebase, and Vercel. Eliminate infrastructure overhead and scale automatically.
                </motion.p>
                <div className="mt-auto">
                  <motion.p
                    className="text-xs text-slate-400 group-hover:text-blue-300 transition-colors"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Lambda • Vercel • Firebase • API Gateway
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service 8 - Cost Reduction & Performance Tuning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="group h-full overflow-hidden border-white/10 bg-white/5 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-300 rounded-2xl relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"
              />
              <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30 group-hover:bg-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300"
                    whileHover={{ scale: 1.3, rotate: -15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <TrendingDown className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </motion.div>
                  <motion.p
                    className="font-heading font-semibold text-white"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Cost Reduction & Optimization
                  </motion.p>
                </div>
                <motion.p
                  className="text-slate-300 text-sm mb-4 group-hover:text-slate-200 transition-colors"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Audit and optimize your infrastructure costs. Database performance tuning, caching strategies, and resource optimization.
                </motion.p>
                <div className="mt-auto">
                  <motion.p
                    className="text-xs text-slate-400 group-hover:text-blue-300 transition-colors"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Cost Analysis • Performance Tuning • Caching
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

