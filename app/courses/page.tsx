"use client"

import { Card, CardContent } from "@/components/ui/card"
import ParallaxImage from "@/components/parallax-image"

const operations = [
  {
    category: "Maritime Business Diversification",
    items: [
      "Port Operations",
      "Legal & Regulatory Structure",
      "Cargo Planning & Routing",
      "Maritime Compliance",
      "Marine Insurance",
      "Crew Manning & Training",
    ],
    image: "https://images.pexels.com/photos/31642540/pexels-photo-31642540.jpeg",
  },
  {
    category: "Cargo Segments",
    items: [
      "Container Cargo",
      "Break-Bulk Cargo",
      "Project Cargo",
    ],
    image: "https://images.pexels.com/photos/6169192/pexels-photo-6169192.jpeg",
  },
  {
    category: "Shore-Based Operations",
    items: [
      "Berth Management",
      "Cargo Handling",
      "Storage & Warehousing",
      "Customs & Documentation",
      "Value-Added Port Services",
      "Fuel Bunkering",
      "Loading & Discharging",
      "Ship Chartering & Brokerage",
      "Vessel Repair & Maintenance",
      "Spare Procurement",
      "Technical Assistance",
    ],
    image: "https://images.pexels.com/photos/7019310/pexels-photo-7019310.jpeg",
  },
]

export default function CoursesPage() {
  return (
    <div className="bg-page-white">
      <div className="relative w-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2F15aff742c7404b1eb1508baa387ebaa3)", minHeight: "420px", backgroundRepeat: "no-repeat", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>
        <div className="h-[260px] w-full md:h-[360px] grid place-items-center relative z-10">
          <h1 className="text-center text-5xl font-black md:text-6xl leading-tight heading-premium" style={{ color: "rgba(0, 0, 0, 1)" }}>
            GROUP SHIPPING SERVICES
          </h1>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 bg-page-white">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-black md:text-4xl mb-4 leading-tight heading-premium text-primary-cyan">
            OPERATIONS
          </h2>
          <p className="text-base leading-relaxed md:text-lg body-premium">
            Comprehensive maritime business operations covering diversification strategies, cargo management, and shore-based services essential for maritime success.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {operations.map((operation, i) => (
            <Card key={i} className="overflow-hidden border-0 shadow-md transition hover:-translate-y-1 hover:shadow-lg group" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
              <div className="h-40 w-full overflow-hidden">
                <ParallaxImage src={operation.image} alt={operation.category} className="h-full w-full" intensity={0.12} zoom={0.06} />
              </div>
              <CardContent className="p-5 flex flex-col flex-grow">
                <h3 className="mb-4 text-base font-bold uppercase heading-premium text-primary-cyan break-words">
                  {operation.category}
                </h3>
                <ul className="space-y-2 flex-grow">
                  {operation.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm leading-relaxed text-dark-secondary">
                      <span className="text-primary-cyan font-bold mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

      </section>
    </div>
  )
}
