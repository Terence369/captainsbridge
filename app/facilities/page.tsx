"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import DetailDialog, { type DetailDialogData } from "@/components/detail-dialog"

const facilities = [
  { title: "SPACIOUS CLASS ROOMS WITH WELL EQUIPPED FURNITURE", desc: "Spacious, well-ventilated and excellently furnished classrooms to make learning comfortable and enjoyable. Individual tables and chairs are provided to students.", image: "https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg" },
  { title: "ADVANCED COMPUTER LAB FACILITY", desc: "State-of-the-art teaching lab supporting a wide range of spatial information system research projects and simulation-based training.", image: "https://images.pexels.com/photos/5530484/pexels-photo-5530484.jpeg" },
  { title: "FOOD SAFETY AND HACCP TRAINING", desc: "Understanding of management systems approach to food safety and skills required to implement and maintain a Food Safety System.", image: "https://images.pexels.com/photos/7426529/pexels-photo-7426529.jpeg" },
  { title: "PLACEMENT GUIDELINES", desc: "Unique at-sea placement program where cadets train on various ship types across different marine sectors.", image: "https://images.pexels.com/photos/7647956/pexels-photo-7647956.jpeg" },
  { title: "ACCREDITATIONS / APPROVALS", desc: "Courses approved by STCW Council with guidance from an advisory board of industry experts and academic leaders.", image: "https://images.pexels.com/photos/7942524/pexels-photo-7942524.jpeg" },
  { title: "PARTNERS & SUPPORTING ORGANISATIONS", desc: "Extended knowledge, expertise, and network from supporting partners keep our standards relevant.", image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" },
  { title: "LABORATORY FACILITY FOR HANDS-ON TRAINING", desc: "First-hand experience with course concepts; opportunity to explore practical methods used by industry specialists.", image: "https://images.pexels.com/photos/19393164/pexels-photo-19393164.jpeg" },
]

export default function FacilitiesPage() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogData, setDialogData] = useState<DetailDialogData | null>(null)

  const openDetails = (f: { title: string; desc: string; image: string }) => {
    const description = `${f.desc} This facility is integral to day‑to‑day training and assessments, ensuring comfort, safety, and industry‑aligned outcomes.`
    const contactMessage = `Inquiry about facility: ${f.title}. Please share usage schedule, access rules, and availability.`
    setDialogData({ title: f.title, description, image: f.image, contactMessage })
    setDialogOpen(true)
  }

  return (
    <div>
      <div className="relative min-h-[50vh] w-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url('https://images.pexels.com/photos/8442545/pexels-photo-8442545.jpeg')" }}>
        <div className="h-[260px] w-full md:h-[360px] grid place-items-center relative z-10">
          <h1 className="text-center text-3xl font-bold text-black md:text-5xl">Facilities</h1>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 bg-subtle">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[#0B2A4A] md:text-3xl">COCHIN MARITIME ACADEMY FACILITIES</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
            We are enriched with an outstanding faculty team, comprising of high profile and experienced Captains and
            Chief-Officers who are capable of providing excellent academic training in all our courses.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f, i) => (
            <Card
              key={i}
              className="group overflow-hidden border-0 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-[#0B2A4A]">{f.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-neutral-600">{f.desc}</p>
                <Button className="bg-[#0B2A4A] text-white hover:bg-[#081E35]" onClick={() => openDetails(f)}>View Detail</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <DetailDialog open={dialogOpen} onOpenChange={setDialogOpen} data={dialogData} />
    </div>
  )
}
