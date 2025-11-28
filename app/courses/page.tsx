"use client"

import { Card, CardContent } from "@/components/ui/card"
import ParallaxImage from "@/components/parallax-image"
import { Ship, Package, Anchor } from "lucide-react"

const operations = [
  {
    category: "Maritime Business Diversification",
    icon: Ship,
    overview: "Strategic business expansion in maritime sector covering regulatory frameworks, operational structures, and market positioning.",
    benefits: ["Sustainable growth strategies", "Market expansion", "Risk management"],
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
    icon: Package,
    overview: "Specialized handling and management of diverse cargo types with tailored logistics solutions for optimal efficiency.",
    benefits: ["Specialized expertise", "Efficient loading", "Cost optimization"],
    items: [
      "Container Cargo",
      "Break-Bulk Cargo",
      "Project Cargo",
    ],
    image: "https://images.pexels.com/photos/6169192/pexels-photo-6169192.jpeg",
  },
  {
    category: "Shore-Based Operations",
    icon: Anchor,
    overview: "Comprehensive land-based maritime services ensuring seamless cargo flow, port management, and logistical excellence.",
    benefits: ["Faster turnaround", "Quality assurance", "Enhanced safety"],
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
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-black md:text-4xl mb-4 leading-tight heading-premium text-primary-cyan">
            OPERATIONS
          </h2>
          <p className="text-base leading-relaxed md:text-lg body-premium text-dark-secondary">
            Comprehensive maritime business operations covering diversification strategies, cargo management, and shore-based services essential for maritime success.
          </p>
          <div className="mt-6 flex justify-center gap-2 flex-wrap">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary-cyan rounded-full">
              {operations.length} Categories
            </span>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-cyan bg-gray-100 rounded-full">
              {operations.reduce((sum, op) => sum + op.items.length, 0)}+ Services
            </span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {operations.map((operation, i) => {
            const IconComponent = operation.icon
            return (
              <Card key={i} className="overflow-hidden border-0 shadow-md transition hover:-translate-y-2 hover:shadow-xl group h-full flex flex-col" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                <div className="h-40 w-full overflow-hidden">
                  <ParallaxImage src={operation.image} alt={operation.category} className="h-full w-full" intensity={0.12} zoom={0.06} />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-primary-cyan/10 rounded-lg flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-primary-cyan" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-base font-bold uppercase heading-premium text-primary-cyan break-words">
                        {operation.category}
                      </h3>
                      <span className="text-xs text-gray-500 font-semibold">
                        {operation.items.length} Services
                      </span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-dark-secondary mb-4 py-3 border-t border-b border-gray-100">
                    {operation.overview}
                  </p>

                  <div className="mb-4 space-y-2">
                    <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Key Benefits:</p>
                    <div className="flex flex-wrap gap-1">
                      {operation.benefits.map((benefit, idx) => (
                        <span key={idx} className="text-xs bg-gray-50 text-gray-700 px-2 py-1 rounded border border-gray-200">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Services:</p>
                    <ul className="space-y-1.5">
                      {operation.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-xs leading-relaxed text-dark-secondary">
                          <span className="text-primary-cyan font-bold flex-shrink-0">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

      </section>
    </div>
  )
}
