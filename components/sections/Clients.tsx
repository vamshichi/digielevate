'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Clients() {
  const logos = [
    '/clients/lino.png',
    '/clients/beyond12.png',
    '/clients/chaibaaz.png',
    '/clients/genfinity.png',
    '/clients/gobuddy.png',
    '/clients/iot.png',
  ]

  // Duplicate for seamless infinite scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <section className="relative py-20 border-t border-white/10 overflow-hidden">
      <div className="section-container">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">
              Trusted By Leading Brands
            </span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl">
            Businesses worldwide trust DigiElevate Pro
          </p>
        </div>

        {/* Fade Edges */}
        <div className="relative overflow-hidden">
          
          {/* Left Fade */}
          <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />

          {/* Marquee */}
          <motion.div
            animate={{
              x: ['0%', '-33.333%'],
            }}
            transition={{
              ease: 'linear',
              duration: 25,
              repeat: Infinity,
            }}
            className="flex w-max gap-8"
          >
            {duplicatedLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="group flex items-center justify-center min-w-[220px] h-[120px] rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-8"
              >
                <Image
                  src={logo}
                  alt="Client Logo"
                  width={140}
                  height={60}
                  className="object-contain opacity-70 group-hover:opacity-100 transition duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}