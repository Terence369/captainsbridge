"use client"

import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { VideoBackground } from "@/components/video-background"

// Animation hook
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

const courseCards = [
  "HYDROGEN SULPHIDE AWARENESS (H2S)",
  "HELICOPTER UNDERWATER ESCAPE TRAINING (HUET)",
  "BASIC OFFSHORE SAFETY EDUCATION AND EMERGENCY TRAINING (BOSET)",
  "RIGGING AND SLINGING SAFETY LEVEL 2",
  "LIFTING AND HOISTING SAFETY",
  "CRANE OPERATIONS THEORY (PRACTICAL ON DEMAND)",
  "COOKERY COURSE WITH HACCP",
  "BASIC COOKING COURSE CERTIFICATION",
  "PSD CROWD MANAGEMENT",
  "PSD HUMAN BEHAVIOUR",
  "HOSPITALITY & SPANISH COURSE",
  "SHIP BOARD SAFETY & SECURITY (SOFF)",
  "SECURITY FACILITY CODE & AWARENESS",
  "SHIPPING NEW ENTRY FOR FITTER & WELDERS",
  "SHIPPING NEW ENTRY TO MECHANICAL & REFRIGERATION TECHNICIANS",
  "ELECTRICAL & ELECTRONIC TECHNICIANS BRIDGING COURSE",
]

const table = [
  ["S-01", "MARINE ENGLISH", "30-45 DAYS"],
  ["S-02", "BASIC FIRE PREVENTION", "3 DAYS"],
  ["S-03", "PERSONAL SURVIVAL TECHNIQUES", "2 DAYS"],
  ["S-04", "ELEMENTARY FIRST AID", "2 DAYS"],
  ["S-05", "PERSONAL SAFETY & SOCIAL RESPONSIBILITIES", "2 DAYS"],
  ["S-06", "SECURITY AWARENESS", "1 DAY"],
  ["S-07", "CARGO HANDLING SAFETY", "2 DAYS"],
]

export default function CoursesPage() {
  return (
    <div>
      <section className="relative">
        <img src="/images/courses-hero.jpg" alt="Courses" className="h-[260px] w-full object-cover md:h-[360px]" />
        <div className="absolute inset-0 grid place-items-center bg-[#8B2332]/50">
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">Courses</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[#8B2332] md:text-3xl">Partners and Supporting Organisation</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
            Training modules include offshore, safety, hospitality, and technical specializations across the maritime
            industry. Explore highlighted programs below.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courseCards.map((title, i) => (
            <Card
              key={i}
              className="overflow-hidden border-0 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-40 w-full">
                <img
                  src={`/.jpg?height=240&width=480&query=${encodeURIComponent("maritime training course")}`}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="mb-2 text-base font-semibold text-[#8B2332]">{title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-neutral-600">
                  Concise overview of the course outcomes, key competencies, and duration with hands‑on practice.
                </p>
                <Button className="w-full bg-[#8B2332] text-white hover:bg-[#6B1B2A]">View Detail</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <h3 className="mb-4 text-center text-xl font-semibold text-[#8B2332]">
            SHORT TERM SAFETY VALUE ADDED COURSES — REGULAR COURSES
          </h3>
          <div className="overflow-x-auto rounded border">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#8B2332] text-white">
                <tr>
                  <th className="px-4 py-3">Code</th>
                  <th className="px-4 py-3">Shipping & Maritime Course</th>
                  <th className="px-4 py-3">Duration</th>
                </tr>
              </thead>
              <tbody>
                {table.map((row, i) => (
                  <tr key={i} className={i % 2 ? "bg-neutral-50" : "bg-white"}>
                    <td className="px-4 py-3 font-medium">{row[0]}</td>
                    <td className="px-4 py-3">{row[1]}</td>
                    <td className="px-4 py-3">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
