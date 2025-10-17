"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import DetailDialog, { type DetailDialogData } from "@/components/detail-dialog"

const courses = [
  { title: "HYDROGEN SULPHIDE AWARENESS (H2S)", image: "https://images.pexels.com/photos/7959357/pexels-photo-7959357.jpeg" },
  { title: "HELICOPTER UNDERWATER ESCAPE TRAINING (HUET)", image: "https://images.pexels.com/photos/7286074/pexels-photo-7286074.jpeg" },
  { title: "BASIC OFFSHORE SAFETY EDUCATION AND EMERGENCY TRAINING (BOSET)", image: "https://images.pexels.com/photos/3207531/pexels-photo-3207531.jpeg" },
  { title: "RIGGING AND SLINGING SAFETY LEVEL 2", image: "https://images.pexels.com/photos/29274538/pexels-photo-29274538.jpeg" },
  { title: "LIFTING AND HOISTING SAFETY", image: "https://images.pexels.com/photos/31856779/pexels-photo-31856779.jpeg" },
  { title: "CRANE OPERATIONS THEORY (PRACTICAL ON DEMAND)", image: "https://images.pexels.com/photos/31856779/pexels-photo-31856779.jpeg" },
  { title: "COOKERY COURSE WITH HACCP", image: "https://images.pexels.com/photos/7426529/pexels-photo-7426529.jpeg" },
  { title: "BASIC COOKING COURSE CERTIFICATION", image: "https://images.pexels.com/photos/6517077/pexels-photo-6517077.jpeg" },
  { title: "PSD CROWD MANAGEMENT", image: "https://images.pexels.com/photos/32870072/pexels-photo-32870072.jpeg" },
  { title: "PSD HUMAN BEHAVIOUR", image: "https://images.pexels.com/photos/7276564/pexels-photo-7276564.jpeg" },
  { title: "HOSPITALITY & SPANISH COURSE", image: "https://images.pexels.com/photos/33689/ship-boat-lake-garda-italy.jpg" },
  { title: "SHIP BOARD SAFETY & SECURITY (SOFF)", image: "https://images.pexels.com/photos/1654497/pexels-photo-1654497.jpeg" },
  { title: "SECURITY FACILITY CODE & AWARENESS", image: "https://images.pexels.com/photos/1725617/pexels-photo-1725617.jpeg" },
  { title: "SHIPPING NEW ENTRY FOR FITTER & WELDERS", image: "https://images.pexels.com/photos/2760344/pexels-photo-2760344.jpeg" },
  { title: "SHIPPING NEW ENTRY TO MECHANICAL & REFRIGERATION TECHNICIANS", image: "https://images.pexels.com/photos/3819524/pexels-photo-3819524.jpeg" },
  { title: "ELECTRICAL & ELECTRONIC TECHNICIANS BRIDGING COURSE", image: "https://images.pexels.com/photos/9242258/pexels-photo-9242258.jpeg" },
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
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogData, setDialogData] = useState<DetailDialogData | null>(null)

  const openDetails = (course: { title: string; image: string }) => {
    const description = `${course.title} — Overview: Hands-on modules, safety standards, and practical drills. Includes competency assessment and course completion guidance. For schedule, fees, and enrollment assistance, contact our team.`
    const contactMessage = `Inquiry about ${course.title}: Please share syllabus, next batch dates, fees, and prerequisites.`
    setDialogData({ title: course.title, description, image: course.image, contactMessage })
    setDialogOpen(true)
  }

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
                <Button className="w-full bg-[#0B2A4A] text-white hover:bg-[#081E35]" onClick={() => openDetails(course)}>View Detail</Button>
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
      <DetailDialog open={dialogOpen} onOpenChange={setDialogOpen} data={dialogData} />
    </div>
  )
}
