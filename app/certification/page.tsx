"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Anchor, Compass, Ship, LifeBuoy } from "lucide-react"
import YouTubeHeroBackground from "@/components/youtube-hero-background"

const offerings = [
  { title: "MARINE VALUE-ADDED SAFETY COURSES", desc: "We provide the best Value Added courses in maritime with the latest research and techniques.", image: "https://source.unsplash.com/800x600/?safety,offshore,training" },
  { title: "MARINE CREW MANAGEMENT", desc: "Ongoing crew management services for entire crews or specific nationalities/departments.", image: "https://source.unsplash.com/800x600/?crew,management,ship" },
  { title: "MARINE DOCUMENTATION", desc: "Full-service support for maritime documentation, pleasure crafts, commercial fishing vessels, and fleet.", image: "https://source.unsplash.com/800x600/?documents,maritime,office" },
  { title: "INDIAN CDC ASSISTANCE", desc: "Assistance for arranging CDC and guidance for meeting requirements across the maritime industry.", image: "https://source.unsplash.com/800x600/?certificate,cdc,card" },
  { title: "PLACEMENT GUIDANCE", desc: "Invitations to companies and organizations for placement interviews with relevant information.", image: "https://source.unsplash.com/800x600/?job,interview,placement" },
  { title: "MARINE – OFFSHORE COURSES", desc: "Broad range of courses for Marine and Offshore sectors with compliant training as per guidelines.", image: "https://source.unsplash.com/800x600/?oil,rig,offshore" },
]

const testimonials = [
  {
    name: "T. Kishore Kumar",
    role: "Deck Cadet",
    quote:
      "I'm very happy to join this institute. The institute has all the facilities required as per the norms of DG Shipping.",
  },
  {
    name: "Rahul Menon",
    role: "Engine Officer",
    quote:
      "Experienced faculty and practical training helped me excel at sea. Highly recommended for aspiring seafarers.",
  },
  {
    name: "Anita Sharma",
    role: "Navigation Officer",
    quote:
      "Modern infrastructure and supportive mentors prepared me well for real‑world responsibilities on board.",
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
    <div>
      <YouTubeHeroBackground videoId="UG4wQMfSp6g" overlayOpacity={0.1} height="half">
        <div className="h-[260px] w-full md:h-[360px] grid place-items-center relative z-10">
          <h1 className="text-center text-3xl font-bold text-black md:text-5xl">Certification</h1>
        </div>
      </YouTubeHeroBackground>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 bg-subtle">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-[#0B2A4A] md:text-3xl">COCHIN MARITIME ACADEMY WE OFFER</h2>
          <div className="mt-2 text-sm font-semibold text-[#0B2A4A] md:text-base">
            Focus: One of a kind in India
            <br />
            BSP (Basic Seafarers Package) Course — Approved by NCT New Delhi, Govt of India.
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o, i) => (
            <Card key={i} className="overflow-hidden border-0 shadow-md">
              <div className="h-48 w-full">
                <img
                  src={o.image}
                  alt={o.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-[#0B2A4A]">{o.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{o.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold text-[#0B2A4A]">Certifications</h3>
              <img src="https://picsum.photos/seed/certificates/1200/800" alt="Certificates" className="h-auto w-full rounded" />
            </CardContent>
          </Card>

          {/* Testimonial Carousel */}
          <Card className="border-0 bg-[#0B2A4A] text-white shadow-md overflow-hidden">
            <CardContent className="relative p-6">
              <h3 className="mb-2 text-lg font-semibold">Students Testimonial</h3>

              {/* Animated maritime icons loop */}
              <div className="relative mb-4 overflow-hidden">
                <div className="flex animate-[marquee_12s_linear_infinite] gap-6 opacity-80">
                  {[Ship, Anchor, Compass, LifeBuoy, Anchor, Ship].map((Icon, i) => (
                    <Icon key={i} className="h-6 w-6" />
                  ))}
                </div>
              </div>

              <blockquote className="min-h-[84px] text-balance italic leading-relaxed transition-all">
                “{testimonials[index].quote}”
              </blockquote>
              <div className="mt-3 text-sm font-semibold">
                {testimonials[index].name} <span className="opacity-80 font-normal">— {testimonials[index].role}</span>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button
                  aria-label="Previous"
                  className="rounded bg-white/10 p-2 hover:bg-white/20"
                  onClick={prev}
                >
                  <ChevronLeft />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <span
                      key={i}
                      className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
                    />
                  ))}
                </div>
                <button aria-label="Next" className="rounded bg-white/10 p-2 hover:bg-white/20" onClick={next}>
                  <ChevronRight />
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
