'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Briefcase, ArrowRight, Send } from 'lucide-react'
import { Navbar } from '@/components/ui/navbar'
import { FooterSection } from '@/components/sections/footer-section'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setSubmitStatus('idle')
    setSubmitError('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'We could not send your inquiry. Please try again.')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', serviceType: '', description: '' })
    } catch (error) {
      setSubmitStatus('error')
      setSubmitError(error instanceof Error ? error.message : 'We could not send your inquiry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Sales@devcube.in',
      href: 'mailto:Sales@devcube.in',
      description: 'Get in touch via email'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 92862 91375',
      href: 'tel:+919286291375',
      description: 'Call us directly'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+91 92862 91375',
      href: 'https://wa.me/919286291375',
      description: 'Chat with us on WhatsApp'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Bangalore',
      href: '#',
      description: 'Our office location'
    },
    {
      icon: Briefcase,
      label: 'Portfolio',
      value: 'View My Work',
      href: 'https://portfolio-tan-tau-91.vercel.app/',
      description: 'Explore my projects'
    },
  ]

  return (
    <main className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/30" />
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Animated floating orbs */}
      <motion.div
        className="absolute top-40 left-20 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-80 h-80 bg-indigo-500/10 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <Navbar />

      <section className="pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <p className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-4">Get In Touch</p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-display text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Let&apos;s Connect
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-slate-300 max-w-2xl mx-auto text-balance"
            >
              Have a project in mind? Want to discuss your technology needs? Reach out using any of the methods below. I&apos;d love to hear from you.
            </motion.p>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="mb-16 p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-300"
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-3xl font-bold text-white mb-2"
            >
              Tell Us About Your Project
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-300 mb-8"
            >
              Fill in the details below and we&apos;ll get back to you shortly with a customized proposal.
            </motion.p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20 transition-colors hover:bg-white/10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20 transition-colors hover:bg-white/10"
                  />
                </div>
              </div>

              {/* Phone and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXXXXXXX"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20 transition-colors hover:bg-white/10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20 transition-colors hover:bg-white/10"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  What Service Do You Need? *
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20 transition-colors hover:bg-white/10"
                >
                  <option value="" className="bg-slate-900">Select a service...</option>
                  <option value="Web Development" className="bg-slate-900">Web Development</option>
                  <option value="Mobile App Development" className="bg-slate-900">Mobile App Development</option>
                  <option value="Cloud & DevOps" className="bg-slate-900">Cloud & DevOps</option>
                  <option value="Backend Development" className="bg-slate-900">Backend Development</option>
                  <option value="AI & Machine Learning" className="bg-slate-900">AI & Machine Learning</option>
                  <option value="Enterprise Solutions" className="bg-slate-900">Enterprise Solutions</option>
                  <option value="Other" className="bg-slate-900">Other</option>
                </select>
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Project Details & Requirements *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Describe your project, timeline, budget, and any specific requirements..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20 transition-colors resize-none hover:bg-white/10"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg hover:shadow-xl hover:shadow-blue-500/30"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Send Project Details'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-blue-500/20 border border-blue-400/30 text-blue-300 text-center backdrop-blur-sm"
                >
                  Thank you! Your inquiry has been sent. We&apos;ll review your details and get back to you shortly.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <div role="alert" className="p-4 rounded-lg bg-red-500/20 border border-red-400/30 text-red-300 text-center backdrop-blur-sm">
                  {submitError}
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="h-full"
                >
                  <Link href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'}>
                    <div className="h-full p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-300 cursor-pointer group relative overflow-hidden">
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"
                      />
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 border border-blue-400/30 group-hover:border-blue-400/50 transition-all relative z-10"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                      </motion.div>

                      <motion.h3
                        className="font-heading font-semibold text-white mb-2 relative z-10"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.label}
                      </motion.h3>

                      <motion.p
                        className="text-sm text-slate-400 mb-3 group-hover:text-slate-300 transition-colors relative z-10"
                        whileHover={{ x: 2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.description}
                      </motion.p>

                      <motion.p
                        className="text-base font-medium text-slate-300 group-hover:text-blue-400 transition-colors break-all relative z-10"
                        whileHover={{ x: 2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.value}
                      </motion.p>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* Why Contact Us */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="font-display text-2xl font-bold text-white mb-6"
                >
                  Why work with us?
                </motion.h2>
                <ul className="space-y-4">
                  {[
                    'Expert team with 15+ years of experience',
                    'Custom solutions tailored to your needs',
                    'Fast response time and dedicated support',
                    'Proven track record across industries',
                    'Transparent communication throughout',
                    'Competitive pricing models'
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-400/30"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                      </motion.div>
                      <span className="text-slate-300 group-hover:text-slate-200 transition-colors">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Quick Response */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="font-display text-2xl font-bold text-white mb-6"
                >
                  Response Times
                </motion.h2>
                <div className="space-y-4">
                  {[
                    { method: 'Email', time: '24-48 hours' },
                    { method: 'WhatsApp', time: '2-4 hours' },
                    { method: 'Phone Call', time: 'During business hours' },
                    { method: 'Portfolio Inquiry', time: 'Immediate' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.method}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                      whileHover={{ x: 8, scale: 1.02 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm transition-all"
                    >
                      <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{item.method}</span>
                      <span className="text-sm text-slate-400 group-hover:text-blue-400 transition-colors">{item.time}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Back to Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16 text-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/30"
              >
                <span>Back to Home</span>
                <motion.div whileHover={{ x: 4 }}>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}