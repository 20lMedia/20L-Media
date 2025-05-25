"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
// In a production environment, use environment variables for security
const supabaseUrl = 'https://ypbinkglyezaoworbtdl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwYmlua2dseWV6YW93b3JidGRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwNjg3NjAsImV4cCI6MjA2MzY0NDc2MH0.Uq2UGzUt2IErI8gMLyn8aqnCfJ0L-GUu-2yspnXxPAc'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Assuming you have a 'contacts' table in Supabase
      const { error } = await supabase
        .from('contacts')
        .insert([formData])

      if (error) {
        console.error('Error submitting form:', error)
        setSubmitStatus('error')
      } else {
        console.log('Form submitted successfully:', formData)
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', message: '' }); // Clear form
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.02] via-transparent to-indigo-500/[0.02]" />

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
              Let's Start Your Journey
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your marketing strategy? Get in touch with our team and let's create something
              extraordinary together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#faebd7]-500/[0.1] border border-[#faebd7]-500/[0.2] flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#faebd7]-500" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-white/60">connect@20lmedia.in</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#faebd7]-500/[0.1] border border-[#faebd7]-500/[0.2] flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#faebd7]-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Phone</div>
                      <div className="text-white/60">+91 94880 19244</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#faebd7]-500/[0.1] border border-[#faebd7]-500/[0.2] flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#faebd7]-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Office</div>
                      <div className="text-white/60">3, Rajiv Gandhi Street, Mudaliarpet Pondicherry 04</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-500/[0.05] to-rose-500/[0.05] border border-white/[0.08]">
                <h4 className="text-lg font-semibold text-white mb-3">Why Choose 20L Media?</h4>
                <ul className="space-y-2 text-white/70">
                  <li>• Data-driven strategies that deliver measurable ROI</li>
                  <li>• Full-service omnichannel marketing expertise</li>
                  <li>• Dedicated account management and support</li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/[0.02] border-white/[0.1] text-white placeholder:text-white/40 focus:border-indigo-400"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/[0.02] border-white/[0.1] text-white placeholder:text-white/40 focus:border-indigo-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white/[0.02] border-white/[0.1] text-white placeholder:text-white/40 focus:border-indigo-400"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-white/[0.02] border-white/[0.1] text-white placeholder:text-white/40 focus:border-indigo-400 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#4682a1] to-[#fa9494] hover:from-[#4682a1] hover:to-[#f88383] text-white border-0 transition-all duration-300 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                {submitStatus === 'success' && (
                  <p className="text-green-500 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
