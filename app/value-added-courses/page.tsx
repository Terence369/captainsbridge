"use client"

import YouTubeHeroBackground from "@/components/youtube-hero-background"

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
      <YouTubeHeroBackground videoId="UG4wQMfSp6g" overlayOpacity={0.1} height="half">
        <div className="h-[260px] w-full md:h-[360px] grid place-items-center relative z-10">
          <h1 className="text-center text-3xl font-bold text-black md:text-5xl">Value Added Courses</h1>
        </div>
      </YouTubeHeroBackground>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 bg-subtle">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[#0B2A4A] md:text-3xl">Course Categories</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
            Content and layout inspired by the provided page: two-column sections on maritime-themed backgrounds. Each
            module has a clear overview so nothing is left blank.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((s, i) => (
            <div
              key={i}
              className="grid items-center gap-6 rounded-lg border bg-white/90 p-6 md:grid-cols-2 bg-ocean-pattern"
            >
              <div>
                <h3 className="mb-2 text-xl font-semibold text-[#0B2A4A]">{s.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-700">{s.content}</p>
              </div>
              <div className="rounded bg-white/90 p-4 shadow">
                <img src={`https://source.unsplash.com/1200x800/?${encodeURIComponent(s.title.split(' ').slice(0,3).join(','))}`} alt={`${s.title} details`} className="h-auto w-full rounded" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-neutral-600">
          A complete courses list and downloadable brochure are available on request.
        </div>
      </section>
    </div>
  )
}
