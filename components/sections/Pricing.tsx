'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small projects and startups',
      price: '$5,000',
      period: 'one-time',
      features: [
        'Website development',
        'Basic SEO optimization',
        'Mobile responsive design',
        'Email support',
        '3 months support',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: '$15,000',
      period: 'one-time',
      features: [
        'Custom web application',
        'Dashboard development',
        'Advanced SEO',
        'Priority support',
        '6 months support',
        'Performance optimization',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For large-scale transformations',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Full-stack solutions',
        'CRM integration',
        'Advanced analytics',
        '24/7 dedicated support',
        '12+ months support',
        'Custom integrations',
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-32 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Simple, Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">Choose the plan that fits your needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`glass rounded-2xl p-8 border transition-all relative ${
                plan.highlighted
                  ? 'md:scale-105 border-primary ring-1 ring-primary/50'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-colors ${
                  plan.highlighted
                    ? 'bg-primary text-primary-foreground hover:opacity-90'
                    : 'border border-primary/40 text-primary hover:bg-primary/5'
                }`}
              >
                Get Started
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, fidx) => (
                  <motion.div
                    key={fidx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + fidx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">All plans include a free consultation and custom proposal</p>
          <button className="px-8 py-3 border border-primary/40 text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
            Schedule Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  )
}
