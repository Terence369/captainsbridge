"use client"

import { useRouter } from "next/navigation"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
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

function ValueAddedKnowMoreButton({ title }: { title: string }) {
  const router = useRouter()

  const handleKnowMore = () => {
    const message = `Hey, I would like to know more about ${title}`
    router.push(`/contact?message=${encodeURIComponent(message)}`)
  }

  return (
    <Button
      onClick={handleKnowMore}
      className="bg-[#8B2332] text-white hover:bg-[#6B1B2A] mt-4"
    >
      Learn More
    </Button>
  )
}

export default function ValueAddedCoursesPage() {
  const sections = [
    {
      title: "OFFSHORE OIL FIELD COURSES",
      content:
        "Specialized programs aligned with offshore operations including safety, survival, and equipment handling modules based on industry standards.",
    },
    {
      title: "PASSENGER / CRUISE / YACHT COURSES",
      content:
        "Hospitality and onboard service training focused on passenger handling, emergency procedures, and international etiquette.",
    },
    {
      title: "INLAND – NEAR COASTAL – MAIN FLEET COURSES",
      content:
        "Foundational and advanced training for deck and engine departments operating in coastal and main fleet sectors.",
    },
    {
      title: "PROJECT SKILLED",
      content:
        "Specialized craft courses and upskilling programs for project-based maritime roles with competency-based assessment.",
    },
    {
      title: "MANAGEMENT COURSES",
      content:
        "Leadership, documentation, and compliance training to prepare candidates for supervisory responsibilities.",
    },
  ]

  return (
    <div>
      <section className="relative h-[260px] md:h-[360px]">
        <VideoBackground
          src="https://videos.pexels.com/video-files/3045163/3045163-preview-0.45s_HPiS0oT.mp4"
          fallbackImage="/images/value-added-hero.jpg"
        />
        <div className="absolute inset-0 grid place-items-center bg-[#8B2332]/50">
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">Value Added Courses</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[#8B2332] md:text-3xl">Course Categories</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
            Content and layout inspired by the provided page: two-column sections on maritime-themed backgrounds. Each
            module has a clear overview so nothing is left blank.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((s, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div
                className="grid items-center gap-6 rounded-lg border bg-white/90 p-6 md:grid-cols-2"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop')`,
                  backgroundSize: "cover",
                }}
              >
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#8B2332]">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-700">{s.content}</p>
                  <ValueAddedKnowMoreButton title={s.title} />
                </div>
                <div className="rounded bg-white/90 p-4 shadow">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" alt={`${s.title} details`} className="h-auto w-full rounded" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-neutral-600">
          A complete courses list and downloadable brochure are available on request.
        </div>
      </section>
    </div>
  )
}
