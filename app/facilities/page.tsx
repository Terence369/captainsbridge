"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import YouTubeHeroBackground from "@/components/youtube-hero-background"

const facilities = [
  { title: "SPACIOUS CLASS ROOMS WITH WELL EQUIPPED FURNITURE", desc: "Spacious, well-ventilated and excellently furnished classrooms to make learning comfortable and enjoyable. Individual tables and chairs are provided to students.", image: "https://source.unsplash.com/800x600/?classroom,lecture,maritime" },
  { title: "ADVANCED COMPUTER LAB FACILITY", desc: "State-of-the-art teaching lab supporting a wide range of spatial information system research projects and simulation-based training.", image: "https://source.unsplash.com/800x600/?computer,lab,simulation" },
  { title: "FOOD SAFETY AND HACCP TRAINING", desc: "Understanding of management systems approach to food safety and skills required to implement and maintain a Food Safety System.", image: "https://source.unsplash.com/800x600/?food,safety,kitchen" },
  { title: "PLACEMENT GUIDELINES", desc: "Unique at-sea placement program where cadets train on various ship types across different marine sectors.", image: "https://source.unsplash.com/800x600/?interview,placement,candidates" },
  { title: "ACCREDITATIONS / APPROVALS", desc: "Courses approved by STCW Council with guidance from an advisory board of industry experts and academic leaders.", image: "https://source.unsplash.com/800x600/?certificate,approval,document" },
  { title: "PARTNERS & SUPPORTING ORGANISATIONS", desc: "Extended knowledge, expertise, and network from supporting partners keep our standards relevant.", image: "https://source.unsplash.com/800x600/?meeting,partners,handshake" },
  { title: "LABORATORY FACILITY FOR HANDS-ON TRAINING", desc: "First-hand experience with course concepts; opportunity to explore practical methods used by industry specialists.", image: "https://source.unsplash.com/800x600/?laboratory,experiment,training" },
]

export default function FacilitiesPage() {
  return (
    <div>
      <YouTubeHeroBackground videoId="UG4wQMfSp6g" overlayOpacity={0.3} height="half">
        <div className="h-[260px] w-full md:h-[360px] grid place-items-center relative z-10">
          <h1 className="text-center text-3xl font-bold text-black md:text-5xl">Facilities</h1>
        </div>
      </YouTubeHeroBackground>

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
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-[#0B2A4A]">{f.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-neutral-600">{f.desc}</p>
                <Button className="bg-[#0B2A4A] text-white hover:bg-[#081E35]">View Detail</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
