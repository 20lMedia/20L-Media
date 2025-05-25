"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Alex J Rock",
    role: "Managing Partner, Design N Build",
    content:
      "20L Media redefined our digital presence with a stunning, high-performance website. Their team combined sleek design with seamless functionality, delivering a user experience that truly stands out. We are really with the result.",
    rating: 5,
    avatar: "/logo-dnb.jpeg",
  },
  {
    name: "Karthikeyan",
    role: "CEO, Lakshmi Interiors",
    content:
      "The team’s strategic thinking and execution are exceptional. They don’t just build websites; they craft complete digital experiences that align perfectly with our brand and business goals, it was great experince.",
    rating: 5,
    avatar: "/SLI.png",
  },
  {
    name: "Sai Prasath",
    role: "Founder, WebDest",
    content:
      "Partnering with 20L Media was a turning point for our brand. Their design-first approach and technical expertise gave us a website that not only looks incredible but functions flawlessly—setting us apart in a competitive market.",
    rating: 5,
    avatar: "/WebDest1.png",
  },

]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="testimonials" className="relative py-20 md:py-32 bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.02] via-transparent to-cyan-500/[0.02]" />

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
              Client Success Stories
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our clients say about their transformative experiences with
              20L Media.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>

                <p className="text-white/80 leading-relaxed mb-6 relative z-10">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-white/[0.1]"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/60">{testimonial.role}</div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] to-rose-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
