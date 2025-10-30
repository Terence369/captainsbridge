"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Anchor, Compass, Ship, LifeBuoy } from "lucide-react"

const offerings = [
  { title: "MARINE VALUE-ADDED SAFETY COURSES", desc: "We provide the best Value Added courses in maritime with the latest research and techniques.", image: "https://images.pexels.com/photos/3207531/pexels-photo-3207531.jpeg" },
  { title: "MARINE CREW MANAGEMENT", desc: "Ongoing crew management services for entire crews or specific nationalities/departments.", image: "https://images.pexels.com/photos/3660828/pexels-photo-3660828.jpeg" },
  { title: "MARINE DOCUMENTATION", desc: "Full-service support for maritime documentation, pleasure crafts, commercial fishing vessels, and fleet.", image: "https://images.pexels.com/photos/8830663/pexels-photo-8830663.jpeg" },
  { title: "INDIAN CDC ASSISTANCE", desc: "Assistance for arranging CDC and guidance for meeting requirements across the maritime industry.", image: "https://images.pexels.com/photos/7942524/pexels-photo-7942524.jpeg" },
  { title: "PLACEMENT GUIDANCE", desc: "Invitations to companies and organizations for placement interviews with relevant information.", image: "https://images.pexels.com/photos/7647956/pexels-photo-7647956.jpeg" },
  { title: "MARINE – OFFSHORE COURSES", desc: "Broad range of courses for Marine and Offshore sectors with compliant training as per guidelines.", image: "https://images.pexels.com/photos/3192669/pexels-photo-3192669.jpeg" },
]

const testimonials = [
  {
    name: "T. Kishore Kumar",
    role: "Deck Cadet",
    course: "BSP (Basic Seafarers Package)",
    year: "2024",
    photo: "https://images.pexels.com/photos/34290769/pexels-photo-34290769.jpeg",
    quote:
      "I'm very happy to join this institute. The institute has all the facilities required as per the norms of DG Shipping. Classroom resources and bridge simulator sessions were exactly what I needed to build confidence before sailing.",
  },
  {
    name: "Rahul Menon",
    role: "Engine Officer",
    course: "Marine Engineering Bridging",
    year: "2023",
    photo: "https://images.pexels.com/photos/8487402/pexels-photo-8487402.jpeg",
    quote:
      "Experienced faculty and practical training helped me excel at sea. The workshops and ERM drills improved my troubleshooting skills and teamwork under pressure.",
  },
  {
    name: "Anita Sharma",
    role: "Navigation Officer",
    course: "Deck Officer Prep",
    year: "2023",
    photo: "https://images.pexels.com/photos/20889911/pexels-photo-20889911.jpeg",
    quote:
      "Modern infrastructure and supportive mentors prepared me for real‑world responsibilities on board. ECDIS practice and COLREGs scenarios were especially helpful.",
  },
  {
    name: "Arjun Nair",
    role: "GP Rating",
    course: "Safety & Survival",
    year: "2024",
    photo: "https://images.pexels.com/photos/769773/pexels-photo-769773.jpeg",
    quote:
      "From firefighting drills to survival craft handling, every session was hands‑on. Placement support guided me through interviews and documentation.",
  },
  {
    name: "Priya Verma",
    role: "Chief Mate (Asp.)",
    course: "Management Level Refresher",
    year: "2024",
    photo: "https://images.pexels.com/photos/23020753/pexels-photo-23020753.jpeg",
    quote:
      "Leadership modules, audit readiness, and incident reporting workshops made a real difference. The academy's mentors care about long‑term growth.",
  },
]

export default function CertificationPage() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4500)
    return () => clearInterval(id)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  return (
    <div style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
      <div className="relative min-h-[50vh] w-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('https://images.pexels.com/photos/7942524/pexels-photo-7942524.jpeg')" }}>
        <div className="h-[260px] w-full md:h-[360px] grid place-items-center relative z-10">
          <h1 className="text-center text-5xl font-black md:text-6xl leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'rgb(0, 152, 183)', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            Certification
          </h1>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16" style={{ backgroundColor: 'rgb(245, 243, 239)' }}>
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <h2 className="text-3xl font-black md:text-4xl mb-4 leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'rgb(0, 152, 183)', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            Cochin Maritime Academy We Offer
          </h2>
          <div className="text-base font-semibold md:text-lg" style={{ fontFamily: 'var(--font-display)', color: 'rgb(222, 140, 4)', letterSpacing: '0.8px' }}>
            Focus: One of a kind in India
            <br />
            BSP (Basic Seafarers Package) Course — Approved by NCT New Delhi, Govt of India.
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o, i) => (
            <Card key={i} className="overflow-hidden border-0 shadow-md group hover:shadow-lg transition-all" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={o.image}
                  alt={o.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-bold uppercase" style={{ fontFamily: 'var(--font-display)', color: 'rgb(0, 152, 183)', letterSpacing: '0.8px' }}>
                  {o.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgb(51, 51, 51)' }}>
                  {o.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="border-0 shadow-md overflow-hidden" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-bold uppercase" style={{ fontFamily: 'var(--font-display)', color: 'rgb(0, 152, 183)', letterSpacing: '0.8px' }}>
                Certifications
              </h3>
              <img 
                src="https://images.pexels.com/photos/7942524/pexels-photo-7942524.jpeg" 
                alt="Certificates" 
                className="h-auto w-full rounded" 
                loading="lazy" 
                decoding="async" 
              />
            </CardContent>
          </Card>

          {/* Testimonial Carousel */}
          <Card className="border-0 shadow-md overflow-hidden" style={{ backgroundColor: 'rgb(0, 152, 183)' }}>
            <CardContent className="relative p-6">
              <h3 className="mb-4 text-lg font-bold uppercase text-white" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.8px' }}>
                Students Testimonial
              </h3>

              {/* Animated maritime icons loop */}
              <div className="relative mb-4 overflow-hidden">
                <div className="flex animate-[marquee_12s_linear_infinite] gap-6 opacity-80">
                  {[Ship, Anchor, Compass, LifeBuoy, Anchor, Ship].map((Icon, i) => (
                    <Icon key={i} className="h-6 w-6 text-white" />
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden" aria-roledescription="carousel">
                <div
                  className="flex w-full transition-transform duration-500"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                  {testimonials.map((t, i) => (
                    <div key={i} className="w-full shrink-0" role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${testimonials.length}`}>
                      <div className="flex items-start gap-4">
                        <img 
                          src={t.photo} 
                          alt={t.name} 
                          className="h-16 w-16 rounded-full object-cover ring-2"
                          style={{ ringColor: 'rgba(255, 255, 255, 0.3)' }}
                          loading="lazy" 
                          decoding="async" 
                        />
                        <div className="flex-1">
                          <blockquote className="text-balance italic leading-relaxed text-white">
                            "{t.quote}"
                          </blockquote>
                          <div className="mt-3 text-sm font-semibold text-white">
                            {t.name} <span className="opacity-80 font-normal">— {t.role}</span>
                          </div>
                          <div className="text-xs text-white/80 mt-1">
                            {t.course} • {t.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button
                  aria-label="Previous"
                  className="rounded p-2 transition-all hover:scale-110"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  onClick={prev}
                >
                  <ChevronLeft className="text-white" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <span
                      key={i}
                      className="h-2 w-2 rounded-full transition-all"
                      style={{ backgroundColor: i === index ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.4)' }}
                    />
                  ))}
                </div>
                <button 
                  aria-label="Next" 
                  className="rounded p-2 transition-all hover:scale-110"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  onClick={next}
                >
                  <ChevronRight className="text-white" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
