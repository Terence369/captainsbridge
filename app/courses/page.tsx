"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const courses = [
  { title: "HYDROGEN SULPHIDE AWARENESS (H2S)", image: "/images/cards/safety.svg" },
  { title: "HELICOPTER UNDERWATER ESCAPE TRAINING (HUET)", image: "/images/cards/helicopter.svg" },
  { title: "BASIC OFFSHORE SAFETY EDUCATION AND EMERGENCY TRAINING (BOSET)", image: "/images/cards/offshore.svg" },
  { title: "RIGGING AND SLINGING SAFETY LEVEL 2", image: "/images/cards/rigging.svg" },
  { title: "LIFTING AND HOISTING SAFETY", image: "/images/cards/lifting.svg" },
  { title: "CRANE OPERATIONS THEORY (PRACTICAL ON DEMAND)", image: "/images/cards/crane.svg" },
  { title: "COOKERY COURSE WITH HACCP", image: "/images/cards/cookery.svg" },
  { title: "BASIC COOKING COURSE CERTIFICATION", image: "/images/cards/cookery.svg" },
  { title: "PSD CROWD MANAGEMENT", image: "/images/cards/crowd.svg" },
  { title: "PSD HUMAN BEHAVIOUR", image: "/images/cards/crowd.svg" },
  { title: "HOSPITALITY & SPANISH COURSE", image: "/images/cards/hospitality.svg" },
  { title: "SHIP BOARD SAFETY & SECURITY (SOFF)", image: "/images/cards/offshore.svg" },
  { title: "SECURITY FACILITY CODE & AWARENESS", image: "/images/cards/partners.svg" },
  { title: "SHIPPING NEW ENTRY FOR FITTER & WELDERS", image: "/images/cards/welder.svg" },
  { title: "SHIPPING NEW ENTRY TO MECHANICAL & REFRIGERATION TECHNICIANS", image: "/images/cards/mechanical.svg" },
  { title: "ELECTRICAL & ELECTRONIC TECHNICIANS BRIDGING COURSE", image: "/images/cards/electrical.svg" },
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
      <div className="relative min-h-[50vh] w-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url('https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg')" }}>
        <div className="h-[260px] w-full md:h-[360px] grid place-items-center relative z-10">
          <h1 className="text-center text-3xl font-bold text-black md:text-5xl">Courses</h1>
        </div>
      </div>

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
                <img src={course.image} alt={course.title} className="h-full w-full object-cover" loading="lazy" decoding="async" />
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
