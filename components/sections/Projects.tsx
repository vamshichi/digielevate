'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Beyond12 Education Platform',
      image: '/projects/beyond12.png',
      category: 'Education',
    },
    {
      title: 'GoBuddy Travel App',
      image: '/projects/gobuddy.png',
      category: 'Turism & Travel',
    },
    {
      title: 'Travel Booking Platform',
      image: '/projects/iot.png',
      category: 'Event Management',
    },
  ]

  return (
    <section className="py-20 md:py-32 border-t border-white/10">
      <div className="section-container">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">
              Featured Projects
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium digital experiences crafted for ambitious brands and businesses.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl"
            >
              
              {/* Image */}
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                
                <div className="text-primary text-sm uppercase tracking-[3px] mb-3">
                  {project.category}
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <motion.div
                    whileHover={{
                      rotate: 45,
                    }}
                    className="w-12 h-12 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center"
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}