'use client'

import { motion } from 'framer-motion'
import {
  CheckCircle,
  Sparkles,
  ShieldCheck,
  Rocket,
} from 'lucide-react'

export default function About() {
  const benefits = [
    {
      text: 'Expert team with 15+ years of industry experience',
      icon: Sparkles,
    },
    {
      text: 'Proven track record of transforming businesses',
      icon: Rocket,
    },
    {
      text: 'Latest technologies and best practices',
      icon: ShieldCheck,
    },
    {
      text: 'Dedicated support and ongoing partnership',
      icon: CheckCircle,
    },
  ]

  const metrics = [
    { label: 'Performance', value: 98 },
    { label: 'Reliability', value: 99.9 },
    { label: 'Security', value: 100 },
    { label: 'Support', value: 24 },
  ]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden border-t border-white/10">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-[140px] rounded-full"
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Trusted Digital Growth Partner
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, letterSpacing: '10px' }}
              whileInView={{ opacity: 1, letterSpacing: '0px' }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text">
                Why Choose DigiElevate Pro?
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
            >
              We’re not just a service provider — we’re your strategic growth
              partner. Our enterprise-grade digital solutions are built to scale
              with your vision while delivering reliability, innovation, and
              long-term success.
            </motion.p>

            {/* Benefits */}
            <div className="space-y-5">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon

                return (
                  <motion.div
                    key={idx}
                    initial={{
                      opacity: 0,
                      x: -40,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: idx * 0.15,
                      duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      x: 8,
                    }}
                    className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-all duration-500"
                  >
                    <motion.div
                      whileHover={{
                        rotate: 10,
                        scale: 1.1,
                      }}
                      className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0"
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>

                    <span className="text-base md:text-lg text-foreground leading-relaxed">
                      {benefit.text}
                    </span>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA */}
            <a href='/#contact'>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 40px rgba(99,102,241,0.5)',
              }}
              whileTap={{ scale: 0.96 }}
              className="mt-10 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300"
            >
              Start Your Transformation
            </motion.button>
            </a>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Floating Glow */}
            <motion.div
              animate={{
                y: [0, 25, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-[120px]"
            />

            {/* Main Card */}
            <motion.div
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: -5,
              }}
              transition={{
                type: 'spring',
                stiffness: 120,
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-10"
            >
              {/* Animated Shine */}
              <motion.div
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: 'linear',
                }}
                className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              />

              <div className="relative z-10 space-y-8">
                {metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: idx * 0.15,
                      duration: 0.7,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-lg">
                        {metric.label}
                      </span>

                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          delay: idx * 0.2,
                        }}
                        className="text-primary font-bold"
                      >
                        {metric.value}%
                      </motion.span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${metric.value}%`,
                        }}
                        transition={{
                          duration: 1.5,
                          delay: idx * 0.2,
                          ease: 'easeOut',
                        }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-primary via-indigo-400 to-cyan-400 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}