"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Left — Logo + Description */}
          <div className="flex flex-col gap-4">
            <motion.a
              href="#"
              className="flex items-center gap-2 w-fit"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 rounded-lg bg-primary" />
                <div className="absolute inset-1 rounded-md bg-background flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">N</span>
                </div>
              </div>
              <span className="text-xl font-bold">Nexore</span>
            </motion.a>

            <p className="text-muted-foreground text-sm max-w-xs">
              Empowering businesses with AI automation and modern web solutions.
            </p>
          </div>

          {/* Center — Nav Links */}
          <div className="flex flex-col items-center gap-3 mt-3">
            <p className="text-sm font-medium mb-1">Quick Links</p>
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Right — Social Icons */}
          <div className="flex flex-col items-end gap-4">
            <p className="text-sm font-medium">Follow Us</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-center gap-2">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nexore. All rights reserved.
          </p>
           
        </div>
      </div>
    </footer>
  )
}