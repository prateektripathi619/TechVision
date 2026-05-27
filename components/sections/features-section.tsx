"use client"

import { motion } from "framer-motion"
import { Code2, Smartphone, Cloud, Database, Brain, Building2, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section id="services" className="px-6 py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4">Services</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive solutions for every need
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-balance">
            From concept to deployment, we deliver end-to-end technology solutions tailored to your business goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Service 1 - Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="group h-full overflow-hidden border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Code2 className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-slate-900">Web Development</p>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Modern, responsive websites and web applications built with the latest technologies. React, Next.js, and more.
                </p>
                <div className="mt-auto">
                  <p className="text-xs text-slate-500">React • Next.js • TypeScript • Tailwind</p>
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
          >
            <Card className="group h-full overflow-hidden border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Smartphone className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-slate-900">Mobile Apps</p>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Native iOS and Android applications. Cross-platform solutions with Flutter and React Native for wider reach.
                </p>
                <div className="mt-auto">
                  <p className="text-xs text-slate-500">Swift • Kotlin • Flutter • React Native</p>
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
          >
            <Card className="group h-full overflow-hidden border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Cloud className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-slate-900">Cloud & DevOps</p>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Infrastructure deployment, CI/CD pipelines, and cloud architecture. AWS, Google Cloud, and Azure expertise.
                </p>
                <div className="mt-auto">
                  <p className="text-xs text-slate-500">AWS • Docker • Kubernetes • CI/CD</p>
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
          >
            <Card className="group h-full overflow-hidden border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center"
                    whileHover={{ y: -2 }}
                  >
                    <Database className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-slate-900">Backend Development</p>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Scalable APIs and microservices. Node.js, Python, Go, and Java with robust database design and optimization.
                </p>
                <div className="mt-auto">
                  <p className="text-xs text-slate-500">Node.js • Python • PostgreSQL • MongoDB</p>
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
          >
            <Card className="group h-full overflow-hidden border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center"
                    whileHover={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Brain className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-slate-900">AI & Machine Learning</p>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Intelligent solutions using LLMs and ML models. Computer vision, NLP, and predictive analytics for business intelligence.
                </p>
                <div className="mt-auto">
                  <p className="text-xs text-slate-500">TensorFlow • PyTorch • OpenAI • LangChain</p>
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
          >
            <Card className="group h-full overflow-hidden border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Building2 className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-slate-900">Enterprise Solutions</p>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Complex systems for large organizations. Integration, security, compliance, and scalability expertise for mission-critical apps.
                </p>
                <div className="mt-auto">
                  <p className="text-xs text-slate-500">SOC2 • HIPAA • Enterprise Architecture</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
