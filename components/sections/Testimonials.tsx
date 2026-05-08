'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'CEO, TechFlow Inc.',
      image: '👩‍💼',
      content: 'DigiElevate Pro transformed our entire digital infrastructure. The team&apos;s expertise and dedication resulted in a 250% ROI within the first year.',
      rating: 5,
    },
    {
      name: 'Marcus Johnson',
      title: 'Founder, Growth Analytics',
      image: '👨‍💼',
      content: 'Working with their team was seamless. They delivered a custom dashboard that gave us unprecedented insight into our business metrics.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      title: 'Director of Operations, E-Store Pro',
      image: '👩‍🦰',
      content: 'The CRM system they built integrated perfectly with our workflow. Support has been outstanding every step of the way.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Loved by Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground">See what our clients have to say</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: '0 0 30px rgba(99, 102, 241, 0.2)',
              }}
              className="glass rounded-xl p-8 border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-border/50">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
