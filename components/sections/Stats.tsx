'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import {
  FaBuilding,
  FaStar,
  FaMoneyBillWave,
  FaCalendarAlt,
} from 'react-icons/fa'

function AnimatedCounter({
  end,
  duration = 2,
  isDecimal = false,
}: {
  end: number
  duration?: number
  isDecimal?: boolean
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime

      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)

      const currentValue = progress * end

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
    </span>
  )
}

export default function Stats() {
  const stats = [
    {
      value: 500,
      suffix: '+',
      label: 'Businesses Transformed',
      icon: <FaBuilding />,
    },
    {
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction Rate',
      icon: <FaStar />,
    },
    {
      value: 2.5,
      suffix: 'B+',
      label: 'Revenue Generated for Clients',
      icon: <FaMoneyBillWave />,
      isDecimal: true,
    },
    {
      value: 15,
      suffix: '+',
      label: 'Years of Industry Experience',
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
              Proven Results That Matter
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We deliver measurable impact across every partnership with premium digital solutions.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
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

              {/* Counter */}
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-3"
              >
                <AnimatedCounter
                  end={stat.value}
                  isDecimal={stat.isDecimal}
                />
                {stat.suffix}
              </motion.div>

              {/* Label */}
              <p className="relative z-10 text-muted-foreground text-sm md:text-base leading-relaxed">
                {stat.label}
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