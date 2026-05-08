'use client'

import { motion } from 'framer-motion'

import {
  FaShoppingBag,
  FaCreditCard,
  FaCloud,
  FaHospital,
  FaIndustry,
  FaGraduationCap,
  FaTooth,
  FaPlaneDeparture,
  FaCalendarAlt,
  FaHotel,
} from 'react-icons/fa'

export default function Industries() {
  const industries = [
    {
      name: 'Dental Clinics',
      icon: FaTooth,
      description:
        'Smart appointment and patient management systems.',
    },
    {
      name: 'Event Industry',
      icon: FaCalendarAlt,
      description:
        'Event management platforms with seamless automation.',
    },
    {
      name: 'Travel & Tourism',
      icon: FaPlaneDeparture,
      description:
        'Luxury booking experiences for travel businesses.',
    },
    {
      name: 'Education',
      icon: FaGraduationCap,
      description:
        'Modern digital learning experiences for institutions.',
    },
    {
      name: 'E-Commerce',
      icon: FaShoppingBag,
      description:
        'Increase conversions with premium shopping experiences.',
    },
    {
      name: 'FinTech',
      icon: FaCreditCard,
      description:
        'Secure digital solutions for modern financial platforms.',
    },
    {
      name: 'SaaS',
      icon: FaCloud,
      description:
        'Scalable cloud platforms designed for rapid growth.',
    },
    {
      name: 'Healthcare',
      icon: FaHospital,
      description:
        'Reliable and compliant systems for healthcare providers.',
    },
    {
      name: 'Manufacturing',
      icon: FaIndustry,
      description:
        'Optimize production workflows and operational efficiency.',
    },
    {
      name: 'Hospitality',
      icon: FaHotel,
      description:
        'Premium digital systems for hotels and resorts.',
    },
  ]

  const containerVariants: any = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants: any = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
      },
    },
  }

  return (
    <section
      id="industries"
      className="relative overflow-hidden py-20 md:py-32 border-t border-white/10"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">
              Industries We Serve
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
            Delivering innovative digital solutions across diverse industries
            with scalable technology and premium user experiences.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {industries.map((industry, idx) => {
            const Icon = industry.icon

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 180,
                  damping: 18,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 cursor-pointer min-h-[260px] flex flex-col justify-between"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

                {/* Floating Glow */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-3xl rounded-full"
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
                    className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {industry.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Bottom Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '70%' }}
                  transition={{
                    duration: 1,
                    delay: idx * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="relative z-10 h-[2px] mt-8 bg-gradient-to-r from-primary to-transparent"
                />

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