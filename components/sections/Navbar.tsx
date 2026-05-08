'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#process' },
    // { label: 'Pricing', href: '#pricing' },
    { label: 'Case Studies', href: '#industries' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border"
    >
      <div className="section-container flex items-center justify-between h-20">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="DigiElevate Pro"
            width={150}
            height={60}
            className="rounded h-12"
          />
          {/* <span className="text-xl font-bold gradient-text">DigiElevate</span> */}
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ color: 'hsl(var(--primary))' }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
        <a href='/#contact'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Contact us
        </motion.button>
        </a>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-border"
        >
          <div className="section-container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href='/#contact'>
              <button className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium">
                contact us
              </button>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
