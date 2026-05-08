'use client'

import { motion } from 'framer-motion'

import {
  ArrowRight,
  Mail,
  User,
  Phone,
  Building2,
  MessageSquare,
} from 'lucide-react'

import { useState } from 'react'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log(formData)

    setSubmitted(true)

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    })

    setTimeout(() => {
      setSubmitted(false)
    }, 4000)
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-32 border-t border-white/10">
      
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-[140px] rounded-full"
        />
      </div>

      <div className="section-container relative z-10">
        
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{
                opacity: 0,
                letterSpacing: '10px',
              }}
              whileInView={{
                opacity: 1,
                letterSpacing: '0px',
              }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="gradient-text">
                Ready to Transform Your Business?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Let’s discuss your project, understand your business goals,
              and build a premium digital experience together.
            </motion.p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 md:p-12"
          >
            
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-100" />

            {/* Floating Glow */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 blur-[120px] rounded-full"
            />

            <form
              onSubmit={handleSubmit}
              className="relative z-10"
            >
              
              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Full Name
                  </label>

                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-14 rounded-2xl bg-white/[0.04] border border-white/10 pl-12 pr-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-14 rounded-2xl bg-white/[0.04] border border-white/10 pl-12 pr-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full h-14 rounded-2xl bg-white/[0.04] border border-white/10 pl-12 pr-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Company Name
                  </label>

                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

                    <input
                      type="text"
                      name="company"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full h-14 rounded-2xl bg-white/[0.04] border border-white/10 pl-12 pr-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Service Select */}
              <div className="mt-6">
                <label className="text-sm text-muted-foreground mb-2 block">
                  Service Required
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full h-14 rounded-2xl bg-white/[0.04] border border-white/10 px-4 text-white focus:outline-none focus:border-primary transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="Web Development">
                    Web Development
                  </option>
                  <option value="UI/UX Design">
                    UI/UX Design
                  </option>
                  <option value="Dashboard Development">
                    Dashboard Development
                  </option>
                  <option value="CRM Solutions">
                    CRM Solutions
                  </option>
                  <option value="SEO & Marketing">
                    SEO & Marketing
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className="text-sm text-muted-foreground mb-2 block">
                  Project Details
                </label>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-muted-foreground" />

                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl bg-white/[0.04] border border-white/10 pl-12 pr-4 py-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    '0 0 40px rgba(99,102,241,0.4)',
                }}
                whileTap={{
                  scale: 0.96,
                }}
                type="submit"
                className="mt-8 w-full h-14 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg flex items-center justify-center gap-3"
              >
                Schedule Free Consultation

                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </form>

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="mt-6 p-4 rounded-2xl border border-primary/20 bg-primary/10 text-primary text-center"
              >
                Thank you! Our team will contact you shortly.
              </motion.div>
            )}
          </motion.div>

          {/* Bottom Info */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Free consultation included
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              No hidden charges
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              24-hour response time
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}