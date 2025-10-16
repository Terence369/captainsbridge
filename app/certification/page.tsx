"use client"

import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { VideoBackground } from "@/components/video-background"

function useIntersectionObserver(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useState(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, ...options },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, isVisible] as const
}

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const offerings = [
  {
    title: "MARINE VALUE-ADDED SAFETY COURSES",
    desc: "We provide the best Value Added courses in maritime with the latest research and techniques.",
  },
  {
    title: "MARINE CREW MANAGEMENT",
    desc: "Ongoing crew management services for entire crews or specific nationalities/departments.",
  },
  {
    title: "MARINE DOCUMENTATION",
    desc: "Full-service support for maritime documentation, pleasure crafts, commercial fishing vessels, and fleet.",
  },
  {
    title: "INDIAN CDC ASSISTANCE",
    desc: "Assistance for arranging CDC and guidance for meeting requirements across the maritime industry.",
  },
  {
    title: "PLACEMENT GUIDANCE",
    desc: "Invitations to companies and organizations for placement interviews with relevant information.",
  },
  {
    title: "MARINE – OFFSHORE COURSES",
    desc: "Broad range of courses for Marine and Offshore sectors with compliant training as per guidelines.",
  },
]

function CertificationKnowMoreButton({ title }: { title: string }) {
  const router = useRouter()

  const handleKnowMore = () => {
    const message = `Hey, I would like to know more about ${title}`
    router.push(`/contact?message=${encodeURIComponent(message)}`)
  }

  return (
    <button
      onClick={handleKnowMore}
      className="text-[#8B2332] hover:text-[#D4AF37] font-semibold transition-colors mt-2"
    >
      Learn More →
    </button>
  )
}

export default function CertificationPage() {
  return (
    <div>
      <section className="relative h-[260px] md:h-[360px]">
        <VideoBackground
          src="https://videos.pexels.com/video-files/2961840/2961840-preview-0.45s_SqhX65y.mp4"
          fallbackImage="/images/certification-hero.jpg"
        />
        <div className="absolute inset-0 grid place-items-center bg-[#8B2332]/50">
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">Certification</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-[#8B2332] md:text-3xl">COCHIN MARITIME ACADEMY WE OFFER</h2>
          <div className="mt-2 text-sm font-semibold text-[#8B2332] md:text-base">
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
                  src={`/.jpg?height=300&width=600&query=${encodeURIComponent("maritime certification")}`}
                  alt={o.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-[#8B2332]">{o.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{o.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold text-[#8B2332]">Certifications</h3>
              <img src="/maritime-certificates.jpg" alt="Certificates" className="h-auto w-full rounded" />
            </CardContent>
          </Card>
          <Card className="border-0 bg-[#8B2332] text-white shadow-md">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Students Testimonial</h3>
              <blockquote className="italic leading-relaxed">
                "I'm very happy to join this institute. The institute has all the facilities required as per the norms
                of DG Shipping."
              </blockquote>
              <div className="mt-4 text-sm font-semibold">T. Kishore Kumar</div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
