 'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  BarChart3,
  Users,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description:
        'Custom-built web applications with cutting-edge technologies. Scalable, secure, and high-performance solutions tailored to your business needs.',
      features: ['React & Next.js', 'API Development', 'Full Stack Solutions'],
    },
    {
      icon: BarChart3,
      title: 'Dashboards',
      description:
        'Real-time analytics dashboards that transform raw data into actionable insights. Visualize metrics that matter to your business.',
      features: ['Real-time Data', 'Custom Analytics', 'Interactive Visualizations'],
    },
    {
      icon: Users,
      title: 'CRM Solutions',
      description:
        'Powerful CRM systems that streamline customer relationships and boost sales. Automate workflows and enhance team collaboration.',
      features: ['Customer Management', 'Sales Automation', 'Integration Ready'],
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description:
        'Strategic solutions designed to accelerate growth. From optimization to scaling, we help you reach new heights.',
      features: ['Performance Optimization', 'Scaling Strategies', 'Market Expansion'],
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section
      id="services"
      className="relative py-20 md:py-32 overflow-hidden border-t border-white/10"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-[140px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, letterSpacing: '8px' }}
            whileInView={{ opacity: 1, letterSpacing: '0px' }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">Our Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive digital solutions crafted to elevate your business,
            optimize operations, and accelerate long-term growth.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, idx) => {
            const Icon = service.icon

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 18,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

                {/* Top Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 6,
                    scale: 1.1,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                  }}
                  className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8"
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, fidx) => (
                      <motion.div
                        key={fidx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: fidx * 0.1,
                          duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(99,102,241,0.8)]" />

                        <span className="text-muted-foreground">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Button */}
                  <motion.button
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-lg"
                  >
                    Learn More

                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                      }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </div>

                {/* Bottom Shine */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-primary via-white to-primary transition-all duration-700" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}