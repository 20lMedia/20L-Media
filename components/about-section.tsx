"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Users, Zap, Award } from "lucide-react"

const stats = [
  { number: "3", label: "Campaigns Launched", icon: Target },
  { number: "5+", label: "Happy Clients", icon: Users },
  { number: "99%", label: "Success Rate", icon: Zap },
  { number: "6", label: "Team Members", icon: Award },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section id="about" className="relative py-20 md:py-32 bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.02] via-transparent to-rose-500/[0.02]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              About 20L Media
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              We are a forward-thinking omnichannel marketing agency that specializes in creating cohesive brand
              experiences across all digital and traditional platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">
                At 20L Media, we believe in the power of unified storytelling. Our mission is to help brands create
                meaningful connections with their audiences through strategic, data-driven omnichannel marketing
                campaigns that deliver measurable results.
              </p>
              <p className="text-white/70 leading-relaxed">
                We combine creativity with technology, ensuring every touchpoint in your customer journey is optimized
                for engagement, conversion, and long-term brand loyalty.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="relative flex justify-center">
              {/* Replaced statistic block with image */}
              <img
                src="/logo.jpeg"
                alt="20L Media Logo"
                className="w-2/3 h-auto object-contain rounded-3xl p-1 shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-indigo-400" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
