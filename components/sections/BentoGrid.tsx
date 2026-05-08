'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  Lock,
  Smartphone,
  Database,
  ArrowUpRight,
} from 'lucide-react'

export default function BentoGrid() {
  const features = [
    {
      title: 'Lightning Fast',
      description:
        'Optimized performance that keeps your users engaged with ultra-fast loading experiences and seamless interactions.',
      icon: Zap,
      span: 'md:col-span-2',
    },
    {
      title: 'Enterprise Security',
      description:
        'Advanced security architecture with enterprise-grade encryption, secure infrastructure, and data protection.',
      icon: Lock,
      span: 'md:col-span-2',
    },
    {
      title: 'Mobile First',
      description:
        'Responsive digital experiences crafted perfectly for mobile, tablet, and desktop users.',
      icon: Smartphone,
      span: 'md:col-span-1',
    },
    {
      title: 'Data Driven',
      description:
        'Smart analytics and actionable insights to help your business scale strategically.',
      icon: Database,
      span: 'md:col-span-1',
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

  const cardVariants: any = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      },
    },
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-32 border-t border-white/10">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
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
          className="text-center mb-20"
        >
          <motion.h2
            initial={{
              opacity: 0,
              letterSpacing: '10px',
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: '0px',
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">
              Powerful Features Built In
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
            Everything your business needs to scale faster, perform better,
            and create premium digital experiences.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 180,
                  damping: 18,
                }}
                className={`group relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 flex flex-col justify-between cursor-pointer ${feature.span}`}
              >
                
                {/* Hover Gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

                {/* Floating Glow Orb */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 blur-3xl rounded-full"
                />

                {/* Shine Effect */}
                <motion.div
                  animate={{
                    x: ['-120%', '220%'],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: 'linear',
                  }}
                  className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                />

                {/* Content */}
                <div className="relative z-10">
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.1,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                    }}
                    className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed break-words">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="relative z-10 flex items-center justify-between mt-10">
                  
                  {/* Animated Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '70%' }}
                    transition={{
                      duration: 1,
                      delay: idx * 0.15,
                    }}
                    viewport={{ once: true }}
                    className="h-[2px] bg-gradient-to-r from-primary to-transparent"
                  />

                  {/* Arrow */}
                  <motion.div
                    whileHover={{
                      rotate: 45,
                      scale: 1.1,
                    }}
                    className="w-11 h-11 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center"
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-primary via-white to-primary transition-all duration-700" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}