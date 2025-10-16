"use client"

import { useRouter } from "next/navigation"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { VideoBackground } from "@/components/video-background"

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

const facilities = [
  {
    title: "SPACIOUS CLASS ROOMS WITH WELL EQUIPPED FURNITURE",
    desc: "Spacious, well-ventilated and excellently furnished classrooms to make learning comfortable and enjoyable. Individual tables and chairs are provided to students.",
  },
  {
    title: "ADVANCED COMPUTER LAB FACILITY",
    desc: "State-of-the-art teaching lab supporting a wide range of spatial information system research projects and simulation-based training.",
  },
  {
    title: "FOOD SAFETY AND HACCP TRAINING",
    desc: "Understanding of management systems approach to food safety and skills required to implement and maintain a Food Safety System.",
  },
  {
    title: "PLACEMENT GUIDELINES",
    desc: "Unique at-sea placement program where cadets train on various ship types across different marine sectors.",
  },
  {
    title: "ACCREDITATIONS / APPROVALS",
    desc: "Courses approved by STCW Council with guidance from an advisory board of industry experts and academic leaders.",
  },
  {
    title: "PARTNERS & SUPPORTING ORGANISATIONS",
    desc: "Extended knowledge, expertise, and network from supporting partners keep our standards relevant.",
  },
  {
    title: "LABORATORY FACILITY FOR HANDS-ON TRAINING",
    desc: "First-hand experience with course concepts; opportunity to explore practical methods used by industry specialists.",
  },
]

function FacilityKnowMoreButton({ title }: { title: string }) {
  const router = useRouter()

  const handleKnowMore = () => {
    const message = `Hey, I would like to know more about ${title}`
    router.push(`/contact?message=${encodeURIComponent(message)}`)
  }

  return (
    <Button
      onClick={handleKnowMore}
      className="bg-[#8B2332] text-white hover:bg-[#6B1B2A]"
    >
      View Detail
    </Button>
  )
}

export default function FacilitiesPage() {
  return (
    <div>
      <section className="relative h-[260px] md:h-[360px]">
        <VideoBackground
          fallbackImage="https://images.unsplash.com/photo-1581092918092-42ea3da38cd1?w=1920&h=1080&fit=crop"
        />
        <div className="absolute inset-0 grid place-items-center bg-[#8B2332]/50">
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">Facilities</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[#8B2332] md:text-3xl">COCHIN MARITIME ACADEMY FACILITIES</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
            We are enriched with an outstanding faculty team, comprising of high profile and experienced Captains and
            Chief-Officers who are capable of providing excellent academic training in all our courses.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <Card
                className="group overflow-hidden border-0 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg h-full"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop`}
                    alt={f.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="mb-2 text-lg font-semibold text-[#8B2332]">{f.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-neutral-600 flex-grow">{f.desc}</p>
                  <FacilityKnowMoreButton title={f.title} />
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  )
}
