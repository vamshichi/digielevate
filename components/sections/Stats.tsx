'use client'

import { motion } from 'framer-motion'
import {
  FaBuilding,
  FaStar,
  FaMoneyBillWave,
  FaCalendarAlt,
} from 'react-icons/fa'

export default function Stats() {
  const stats = [
    {
      title: 'Custom Web Development',
      description:
        'Modern and scalable websites built with the latest technologies.',
      icon: <FaBuilding />,
    },
    {
      title: 'Modern UI/UX Experiences',
      description:
        'Clean, responsive, and premium user experiences for every device.',
      icon: <FaStar />,
    },
    {
      title: 'CRM & Dashboard Solutions',
      description:
        'Powerful admin dashboards and business management systems.',
      icon: <FaMoneyBillWave />,
    },
    {
      title: 'Dedicated Client Support',
      description:
        'Reliable communication and continuous support throughout projects.',
      icon: <FaCalendarAlt />,
    },
  ]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden border-t border-white/10">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ letterSpacing: '10px', opacity: 0 }}
            whileInView={{ letterSpacing: '0px', opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">
              Built for Modern Businesses
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We create modern digital experiences that help businesses grow,
            scale, and stand out online.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: idx * 0.15,
                type: 'spring',
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center group transition-all duration-500"
            >
              
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-primary/10 to-transparent" />

              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.15,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative z-10 text-5xl text-primary mb-6 flex justify-center"
              >
                {stat.icon}
              </motion.div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold text-white mb-4">
                {stat.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-muted-foreground text-sm md:text-base leading-relaxed">
                {stat.description}
              </p>

              {/* Bottom Shine */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}