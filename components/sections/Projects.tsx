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
      link: 'https://www.beyondgrade12.ca/',
    },
    {
      title: 'GoBuddy Travel App',
      image: '/projects/gobuddy.png',
      category: 'Travel & Tourism',
      link: 'https://www.gobuddyholidays.com/',
    },
    {
      title: 'Chaibaaz Website',
      image: '/projects/chaibaaz.png',
      category: 'Food & Beverage',
      link: 'https://chaibaaz.ca',
    },
    {
      title: 'CRM Dashboard System',
      image: '/projects/dashboard.png',
      category: 'Business Solutions',
      link: '',
    },
    {
      title: 'E-Commerce Platform',
      image: '/projects/linowares.png',
      category: 'Online Store',
      link: 'https://linowears.com/',
    },
    {
      title: 'Event Booking Platform',
      image: '/projects/iot.png',
      category: 'Event Management',
      link: 'https://www.iotsecworldsummit.com/',
    },
  ]

  return (
    <section className="relative py-20 md:py-32 border-t border-white/10 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-[140px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">
              Featured Projects
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Premium digital products, platforms, and business solutions crafted
            for ambitious brands and growing businesses.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link || undefined}
              target={project.link ? '_blank' : undefined}
              rel={project.link ? 'noopener noreferrer' : undefined}
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
                delay: idx * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl min-h-[460px] h-full"
            >
              
              {/* Image */}
              <div className="relative h-[280px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Category */}
                <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs tracking-[2px] uppercase">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-1 p-8">
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Premium scalable digital experience designed for modern businesses and high-performance brands.
                  </p>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-8">
                  
                  <div className="h-[2px] w-full max-w-[70%] bg-gradient-to-r from-primary to-transparent" />

                  <motion.div
                    whileHover={{
                      rotate: 45,
                      scale: 1.1,
                    }}
                    className="min-w-[52px] h-[52px] rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center ml-4"
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-3xl border border-primary/0 group-hover:border-primary/20 transition duration-500" />

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-primary via-white to-primary transition-all duration-700" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}