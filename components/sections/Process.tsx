'use client'

import { motion } from 'framer-motion'
import {
  Lightbulb,
  Settings,
  Rocket,
  BarChart4,
  ArrowRight,
} from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Discovery & Strategy',
      description:
        'We deep-dive into your business goals, challenges, and vision to craft a tailored strategy.',
    },
    {
      icon: Settings,
      title: 'Design & Development',
      description:
        'Our team builds custom solutions using cutting-edge technologies and industry best practices.',
    },
    {
      icon: Rocket,
      title: 'Launch & Optimize',
      description:
        'We deploy your solution and optimize every aspect for peak performance and user experience.',
    },
    {
      icon: BarChart4,
      title: 'Support & Growth',
      description:
        'Ongoing support and strategic guidance to help your business grow and evolve.',
    },
  ]

  return (
    <section
      id="process"
      className="relative overflow-hidden py-20 md:py-32 border-t border-white/10"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-[140px] rounded-full"
        />
      </div>

      <div className="section-container relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.h2
            initial={{ opacity: 0, letterSpacing: '10px' }}
            whileInView={{ opacity: 1, letterSpacing: '0px' }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">Our Process</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            From strategy to execution, we follow a refined process designed to
            deliver premium results with precision and speed.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">

          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent -translate-x-1/2" />

          <div className="space-y-20">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isEven = idx % 2 === 0

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                >

                  {/* LEFT SIDE */}
                  <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
                    <motion.div
                      whileHover={{
                        y: -10,
                        scale: 1.02,
                      }}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl p-8"
                    >
                      {/* Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

                      <div className="relative z-10">

                        {/* Header */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>

                          <div>
                            <div className="text-sm uppercase tracking-[3px] text-primary/70 mb-1">
                              Step {idx + 1}
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* CENTER NUMBER */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 180,
                        damping: 12,
                      }}
                      className="relative w-20 h-20 rounded-full border-4 border-primary bg-background flex items-center justify-center"
                    >
                      <span className="text-2xl font-bold text-primary">
                        {idx + 1}
                      </span>

                      {/* Pulse */}
                      <motion.div
                        animate={{
                          scale: [1, 1.5],
                          opacity: [0.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="absolute inset-0 rounded-full border border-primary"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
            <a href='/#contact'>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(99,102,241,0.5)',
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300"
          >
            Let&apos;s Get Started

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
          </a>
        </motion.div>
      </div>
    </section>
  )
}