"use client"

import { Card, CardContent } from "@/components/ui/card"

const offerings = [
  {
    title: "MARINE VALUE-ADDED SAFETY COURSES",
    desc: "We provide the best Value Added courses in maritime with the latest research and techniques.",
  },
  {
    title: "MARINE CREW MANAGEMENT",
    desc: "Ongoing crew management services for entire crews or specific nationalities/departments.",
  },
  {
    title: "MARINE DOCUMENTATION",
    desc: "Full-service support for maritime documentation, pleasure crafts, commercial fishing vessels, and fleet.",
  },
  {
    title: "INDIAN CDC ASSISTANCE",
    desc: "Assistance for arranging CDC and guidance for meeting requirements across the maritime industry.",
  },
  {
    title: "PLACEMENT GUIDANCE",
    desc: "Invitations to companies and organizations for placement interviews with relevant information.",
  },
  {
    title: "MARINE – OFFSHORE COURSES",
    desc: "Broad range of courses for Marine and Offshore sectors with compliant training as per guidelines.",
  },
]

export default function CertificationPage() {
  return (
    <div>
      <section className="relative">
        <img
          src="/images/certification-hero.jpg"
          alt="Certification"
          className="h-[260px] w-full object-cover md:h-[360px]"
        />
        <div className="absolute inset-0 grid place-items-center bg-[#8B2332]/50">
          <h1 className="text-center text-3xl font-bold text-white md:text-5xl">Certification</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-[#8B2332] md:text-3xl">COCHIN MARITIME ACADEMY WE OFFER</h2>
          <div className="mt-2 text-sm font-semibold text-[#8B2332] md:text-base">
            Focus: One of a kind in India
            <br />
            BSP (Basic Seafarers Package) Course — Approved by NCT New Delhi, Govt of India.
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o, i) => (
            <Card key={i} className="overflow-hidden border-0 shadow-md">
              <div className="h-48 w-full">
                <img
                  src={`/.jpg?height=300&width=600&query=${encodeURIComponent("maritime certification")}`}
                  alt={o.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-[#8B2332]">{o.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{o.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold text-[#8B2332]">Certifications</h3>
              <img src="/maritime-certificates.jpg" alt="Certificates" className="h-auto w-full rounded" />
            </CardContent>
          </Card>
          <Card className="border-0 bg-[#8B2332] text-white shadow-md">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Students Testimonial</h3>
              <blockquote className="italic leading-relaxed">
                "I'm very happy to join this institute. The institute has all the facilities required as per the norms
                of DG Shipping."
              </blockquote>
              <div className="mt-4 text-sm font-semibold">T. Kishore Kumar</div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
