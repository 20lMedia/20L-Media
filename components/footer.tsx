"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const footerLinks = {
  Services: [
    "Social Media Marketing",
    "Digital Advertising",
    "Email Marketing",
    "SEO & SEM",
    "Analytics & Insights",
    "Brand Strategy",
  ],
  Company: ["About Us", "Our Team", "Careers", "Case Studies", "Blog", "Contact"],
  Legal: ["Privacy Policy", "Terms & Conditions", "Cookie policy"],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/20lMedia", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/20lmedia/", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@20lmedia_agency", label: "YouTube" },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#030303] border-t border-white/[0.08] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/[0.02] to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4682a1] to-[#faebd7]">
                20L Media
              </div>
              <p className="text-white/60 leading-relaxed mb-6">
                Transforming brands through innovative omnichannel marketing strategies that drive growth and create
                lasting connections.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-6 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-white/60 text-sm mb-4 md:mb-0">© 2025 20L Media. All rights reserved.</div>
          <div className="flex space-x-6 text-sm">
            <a href="/Legal/Privacy Policy.pdf" target="_blank" className="text-white/60 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/Legal/Terms & Conditions.pdf" target="_blank" className="text-white/60 hover:text-white transition-colors duration-300">
              Terms & Conditions
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
