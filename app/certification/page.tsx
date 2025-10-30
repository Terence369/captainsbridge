"use client"

import { Card, CardContent } from "@/components/ui/card"
import ParallaxImage from "@/components/parallax-image"
import { ChevronLeft, ChevronRight, Anchor, Compass, Ship, LifeBuoy } from "lucide-react"

const offerings = [
  { title: "MARINE VALUE-ADDED SAFETY COURSES", desc: "We provide the best Value Added courses in maritime with the latest research and techniques.", image: "/maritime-safety.jpg" },
  { title: "MARINE CREW MANAGEMENT", desc: "Ongoing crew management services for entire crews or specific nationalities/departments.", image: "/crew-management.jpg" },
  { title: "MARINE DOCUMENTATION", desc: "Full-service support for maritime documentation, pleasure crafts, commercial fishing vessels, and fleet.", image: "/marine-documentation.jpg" },
]

const testimonials = [
  {
    name: "T. Kishore Kumar",
    role: "Deck Cadet",
    course: "BSP (Basic Seafarers Package)",
    year: "2024",
    photo: "/professional-maritime-officer-portrait.jpg",
    quote: "I'm very happy to join this institute. The institute has all the facilities required as per the norms of DG Shipping...",
  },
  {
    name: "Rahul Menon",
    role: "Engine Officer",
    course: "Marine Engineering Bridging",
    year: "2023",
    photo: "/male-officer.jpg",
    quote: "Experienced faculty and practical training helped me excel at sea...",
  },
]

export default function CertificationPage() {
  return (
    <div className="bg-page-white">
      <div className="relative min-h-[50vh] w-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('https://images.pexels.com/photos/7942524/pexels-photo-7942524.jpeg')" }}>
        <div className="h-[260px] w-full md:h-[360px] grid place-items-center relative z-10">
          <h1 className="text-center text-5xl font-black md:text-6xl leading-tight heading-premium text-primary-cyan">
            Certification
          </h1>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 bg-section-cream">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <h2 className="text-3xl font-black md:text-4xl mb-4 leading-tight heading-premium text-primary-cyan">
            Cochin Maritime Academy We Offer
          </h2>
          <div className="text-base font-semibold md:text-lg heading-premium text-accent-gold">
            Focus: One of a kind in India
            <br />
            BSP (Basic Seafarers Package) Course — Approved by NCT New Delhi, Govt of India.
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o, i) => (
            <Card key={i} className="overflow-hidden border-0 shadow-md group hover:shadow-lg transition-all" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
              <div className="h-48 w-full overflow-hidden">
                <ParallaxImage src={o.image} alt={o.title} className="h-full w-full" intensity={0.12} zoom={0.06} />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-bold uppercase heading-premium text-primary-cyan">
                  {o.title}
                </h3>
                <p className="text-sm leading-relaxed text-dark-secondary">
                  {o.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="border-0 shadow-md overflow-hidden" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-bold uppercase heading-premium text-primary-cyan">
                Certifications
              </h3>
              <ParallaxImage src="/certificates-sample.jpg" alt="Certificates" className="w-full rounded" intensity={0.06} zoom={0.03} />
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md overflow-hidden" style={{ backgroundColor: 'rgb(0, 152, 183)' }}>
            <CardContent className="relative p-6">
              <h3 className="mb-4 text-lg font-bold uppercase text-white heading-premium">
                Students Testimonial
              </h3>

              <div className="relative mb-4 overflow-hidden">
                <div className="flex animate-[marquee_12s_linear_infinite] gap-6 opacity-80">
                  {[Ship, Anchor, Compass, LifeBuoy, Anchor, Ship].map((Icon, i) => (
                    <Icon key={i} className="h-6 w-6 text-white" />
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden">
                <div className="flex w-full">
                  {testimonials.map((t, i) => (
                    <div key={i} className="w-full shrink-0">
                      <div className="flex items-start gap-4">
                        <ParallaxImage src={t.photo} alt={t.name} className="h-16 w-16 rounded-full object-cover ring-2" intensity={0.06} zoom={0.04} />
                        <div className="flex-1">
                          <blockquote className="text-balance italic leading-relaxed text-white">"{t.quote}"</blockquote>
                          <div className="mt-3 text-sm font-semibold text-white">
                            {t.name} <span className="opacity-80 font-normal">— {t.role}</span>
                          </div>
                          <div className="text-xs text-white/80 mt-1">{t.course} • {t.year}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  )
}
