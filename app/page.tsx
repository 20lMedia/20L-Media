import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function HomePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "20L Media",
        "url": "https://20lmedia.in/", // Updated with actual website URL
        "logo": "https://20lmedia.in/logo.jpeg", // Updated with actual logo URL
        "sameAs": [
          // Add social media links here if available
          // "https://twitter.com/yourhandle",
          // "https://linkedin.com/company/yourcompany",
        ]
      },
      {
        "@type": "WebSite",
        "url": "https://20lmedia.in/", // Updated with actual website URL
        "name": "20L Media | Omnichannel Marketing Solutions",
        "description": "20L Media specializes in omnichannel marketing solutions to help your business grow.",
        "keywords": "20L Media, Omnichannel marketing, digital marketing, marketing solutions",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://20lmedia.in/?s={search_term_string}", // Updated with actual search URL if applicable
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <div className="bg-[#030303]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </div>
  )
}
