"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Smartphone, Monitor, Mail, Search, BarChart3, Megaphone, Palette, Video, Code } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Social Media Marketing",
    description: "Engage your audience across all social platforms with compelling content and strategic campaigns.",
    gradient: "from-indigo-500/[0.1] to-violet-500/[0.1]",
    iconColor: "text-indigo-400",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Build lasting relationships through personalized email campaigns that convert.",
    gradient: "from-amber-500/[0.1] to-orange-500/[0.1]",
    iconColor: "text-amber-400",
  },
  {
    icon: Search,
    title: "SEO & SEM",
    description: "Dominate search results with our comprehensive SEO and search engine marketing strategies.",
    gradient: "from-cyan-500/[0.1] to-blue-500/[0.1]",
    iconColor: "text-cyan-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Stunning visuals and creative assets that capture attention and drive engagement.",
    gradient: "from-pink-500/[0.1] to-rose-500/[0.1]",
    iconColor: "text-pink-400",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Tell your story through compelling video content optimized for every platform.",
    gradient: "from-blue-500/[0.1] to-indigo-500/[0.1]",
    iconColor: "text-blue-400",
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Crafting responsive, high-performance websites tailored to your brand's needs.",
    gradient: "from-green-500/[0.1] to-teal-500/[0.1]",
    iconColor: "text-green-400",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section id="services" className="relative py-20 md:py-32 bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-500/[0.02] via-transparent to-violet-500/[0.02]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Comprehensive omnichannel marketing solutions designed to elevate your brand and drive measurable growth
              across all platforms.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className={`p-6 rounded-xl bg-gradient-to-br ${service.gradient} border border-white/[0.08] backdrop-blur-sm group cursor-pointer`}
              >
                <service.icon
                  className={`w-12 h-12 ${service.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                />
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
