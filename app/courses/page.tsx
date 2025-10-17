"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import YouTubeHeroBackground from "@/components/youtube-hero-background"

const courses = [
  { title: "HYDROGEN SULPHIDE AWARENESS (H2S)", image: "https://source.unsplash.com/800x600/?hazmat,gas,ship" },
  { title: "HELICOPTER UNDERWATER ESCAPE TRAINING (HUET)", image: "https://source.unsplash.com/800x600/?helicopter,rescue,sea" },
  { title: "BASIC OFFSHORE SAFETY EDUCATION AND EMERGENCY TRAINING (BOSET)", image: "https://source.unsplash.com/800x600/?offshore,safety,training" },
  { title: "RIGGING AND SLINGING SAFETY LEVEL 2", image: "https://source.unsplash.com/800x600/?rigging,crane,ship" },
  { title: "LIFTING AND HOISTING SAFETY", image: "https://source.unsplash.com/800x600/?lifting,hoist,crew" },
  { title: "CRANE OPERATIONS THEORY (PRACTICAL ON DEMAND)", image: "https://source.unsplash.com/800x600/?crane,operator,shipyard" },
  { title: "COOKERY COURSE WITH HACCP", image: "https://source.unsplash.com/800x600/?commercial,kitchen,cookery" },
  { title: "BASIC COOKING COURSE CERTIFICATION", image: "https://source.unsplash.com/800x600/?cooking,classroom,chef" },
  { title: "PSD CROWD MANAGEMENT", image: "https://source.unsplash.com/800x600/?crowd,management,training" },
  { title: "PSD HUMAN BEHAVIOUR", image: "https://source.unsplash.com/800x600/?psychology,training,students" },
  { title: "HOSPITALITY & SPANISH COURSE", image: "https://source.unsplash.com/800x600/?hospitality,training,service" },
  { title: "SHIP BOARD SAFETY & SECURITY (SOFF)", image: "https://source.unsplash.com/800x600/?ship,bridge,crew" },
  { title: "SECURITY FACILITY CODE & AWARENESS", image: "https://source.unsplash.com/800x600/?security,training,maritime" },
  { title: "SHIPPING NEW ENTRY FOR FITTER & WELDERS", image: "https://source.unsplash.com/800x600/?welder,workshop,ship" },
  { title: "SHIPPING NEW ENTRY TO MECHANICAL & REFRIGERATION TECHNICIANS", image: "https://source.unsplash.com/800x600/?mechanic,technician,engine" },
  { title: "ELECTRICAL & ELECTRONIC TECHNICIANS BRIDGING COURSE", image: "https://source.unsplash.com/800x600/?electrical,technician,training" },
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
      <YouTubeHeroBackground videoId="UG4wQMfSp6g" overlayOpacity={0.3}>
        <div className="h-[260px] w-full md:h-[360px] grid place-items-center relative z-10">
          <h1 className="text-center text-3xl font-bold text-black md:text-5xl">Courses</h1>
        </div>
      </YouTubeHeroBackground>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 bg-subtle">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[#0B2A4A] md:text-3xl">Partners and Supporting Organisation</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
            Training modules include offshore, safety, hospitality, and technical specializations across the maritime
            industry. Explore highlighted programs below.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <Card
              key={i}
              className="overflow-hidden border-0 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-40 w-full">
                <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
              </div>
              <CardContent className="p-5">
                <h3 className="mb-2 text-base font-semibold text-[#0B2A4A]">{course.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-neutral-600">
                  Concise overview of the course outcomes, key competencies, and duration with hands‑on practice.
                </p>
                <Button className="w-full bg-[#0B2A4A] text-white hover:bg-[#081E35]">View Detail</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <h3 className="mb-4 text-center text-xl font-semibold text-[#0B2A4A]">
            SHORT TERM SAFETY VALUE ADDED COURSES — REGULAR COURSES
          </h3>
          <div className="overflow-x-auto rounded border">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#0B2A4A] text-white">
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
