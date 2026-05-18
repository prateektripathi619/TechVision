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
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Create mailto link with form data
    const mailtoLink = `mailto:prateek@gmail.com?subject=New Project Inquiry from ${formData.name}&body=Name: ${formData.name}%0DEmail: ${formData.email}%0DPhone: ${formData.phone}%0DCompany: ${formData.company}%0DService Required: ${formData.serviceType}%0D%0DProject Details:%0D${formData.description}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', serviceType: '', description: '' })
      setSubmitted(false)
    }, 2000)
  }
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'prateek@gmail.com',
      href: 'mailto:prateek@gmail.com',
      description: 'Get in touch via email'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7208124621',
      href: 'tel:+917208124621',
      description: 'Call us directly'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+91 7208124621',
      href: 'https://wa.me/917208124621',
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
    <main className="min-h-screen bg-zinc-950">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Get In Touch</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-zinc-100 mb-6">
              Let&apos;s Connect
            </h1>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto text-balance">
              Have a project in mind? Want to discuss your technology needs? Reach out using any of the methods below. I&apos;d love to hear from you.
            </p>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16 p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/50"
          >
            <h2 className="font-display text-3xl font-bold text-zinc-100 mb-2">
              Tell Us About Your Project
            </h2>
            <p className="text-zinc-500 mb-8">
              Fill in the details below and we&apos;ll get back to you shortly with a customized proposal.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                  />
                </div>
              </div>

              {/* Phone and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXXXXXXX"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  What Service Do You Need? *
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 focus:outline-none focus:border-zinc-600 transition-colors"
                >
                  <option value="">Select a service...</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Cloud & DevOps">Cloud & DevOps</option>
                  <option value="Backend Development">Backend Development</option>
                  <option value="AI & Machine Learning">AI & Machine Learning</option>
                  <option value="Enterprise Solutions">Enterprise Solutions</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Project Details & Requirements *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Describe your project, timeline, budget, and any specific requirements..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitted}
                className="w-full py-3 px-6 rounded-lg bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {submitted ? 'Message Sent!' : 'Send Project Details'}
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-center"
                >
                  Thank you! Your inquiry has been sent. We&apos;ll review your details and get back to you shortly.
                </motion.div>
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
                  whileHover={{ y: -4 }}
                  className="h-full"
                >
                  <Link href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'}>
                    <div className="h-full p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 cursor-pointer group">
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-zinc-800/80 flex items-center justify-center mb-4 group-hover:bg-zinc-700 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon className="w-6 h-6 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                      </motion.div>
                      
                      <h3 className="font-heading font-semibold text-zinc-100 mb-2">
                        {item.label}
                      </h3>
                      
                      <p className="text-sm text-zinc-500 mb-3">
                        {item.description}
                      </p>
                      
                      <p className="text-base font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors break-all">
                        {item.value}
                      </p>
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
            className="mt-16 pt-16 border-t border-zinc-800/50"
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* Why Contact Us */}
              <div>
                <h2 className="font-display text-2xl font-bold text-zinc-100 mb-6">
                  Why work with us?
                </h2>
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
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-zinc-100" />
                      </div>
                      <span className="text-zinc-400">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Quick Response */}
              <div>
                <h2 className="font-display text-2xl font-bold text-zinc-100 mb-6">
                  Response Times
                </h2>
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
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/50 transition-all"
                    >
                      <span className="text-zinc-300 font-medium">{item.method}</span>
                      <span className="text-sm text-zinc-500">{item.time}</span>
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
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors text-zinc-300 hover:text-zinc-100"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
