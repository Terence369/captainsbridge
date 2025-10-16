"use client"

import { useRouter } from "next/navigation"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { VideoBackground } from "@/components/video-background"

// Animation hook
function useIntersectionObserver(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
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

function CourseKnowMoreButton({ title }: { title: string }) {
  const router = useRouter()

  const handleKnowMore = () => {
    const message = `Hey, I would like to know more about ${title}`
    router.push(`/contact?message=${encodeURIComponent(message)}`)
  }

  return (
    <Button
      onClick={handleKnowMore}
      className="w-full bg-[#8B2332] text-white hover:bg-[#6B1B2A]"
    >
      Know More
    </Button>
  )
}

export default function CoursesPage() {
  return (
    <div>
      <section className="relative h-[260px] md:h-[360px]">
        <VideoBackground
          src="https://videos.pexels.com/video-files/3373097/3373097-preview-0.45s_GjIcsKQ.mp4"
          fallbackImage="/images/courses-hero.jpg"
        />
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
            <AnimatedSection key={i} delay={i * 100}>
              <Card
                className="overflow-hidden border-0 shadow-md transition hover:-translate-y-1 hover:shadow-lg h-full"
              >
                <div className="h-40 w-full">
                  <img
                    src={`https://images.unsplash.com/photo-1590080876-0ac91e3b9a2a?w=480&h=240&fit=crop`}
                    alt={title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-5 flex flex-col h-full">
                  <h3 className="mb-2 text-base font-semibold text-[#8B2332]">{title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-neutral-600 flex-grow">
                    Concise overview of the course outcomes, key competencies, and duration with hands‑on practice.
                  </p>
                  <CourseKnowMoreButton title={title} />
                </CardContent>
              </Card>
            </AnimatedSection>
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
