"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  name: string
  role: string
  quote: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: "T. KISHORE KUMAR",
    role: "Deck Cadet",
    quote: "I'm very happy to join this institute. The institute has all the facilities required as per the norms of DG Shipping.",
    image: "/professional-maritime-officer-portrait.jpg",
  },
  {
    name: "RAHUL MENON",
    role: "Engine Officer",
    quote: "Excellent training facilities and experienced faculty. The practical approach to teaching helped me excel in my career.",
    image: "/maritime-engineer-officer-portrait.jpg",
  },
  {
    name: "ANITA SHARMA",
    role: "Navigation Officer",
    quote: "The comprehensive curriculum and modern infrastructure at Cochin Maritime prepared me well for the maritime industry.",
    image: "/female-maritime-officer-portrait.jpg",
  },
  {
    name: "VIKRAM PATEL",
    role: "Chief Engineer",
    quote: "Outstanding faculty and world-class infrastructure. The institute prepared me exceptionally well for my career at sea.",
    image: "/professional-maritime-officer-portrait.jpg",
  },
  {
    name: "PRIYA DESHMUKH",
    role: "Deck Officer",
    quote: "The hands-on training and mentorship at Cochin Maritime made all the difference in my professional development.",
    image: "/female-maritime-officer-portrait.jpg",
  },
  {
    name: "ARJUN KUMAR",
    role: "Cadet",
    quote: "Best maritime academy in the region. The courses are comprehensive and the faculty is highly experienced.",
    image: "/maritime-engineer-officer-portrait.jpg",
  },
  {
    name: "SNEHA NAIR",
    role: "Navigation Officer",
    quote: "The combination of theoretical knowledge and practical training gave me the confidence to excel in the maritime industry.",
    image: "/female-maritime-officer-portrait.jpg",
  },
  {
    name: "RAJESH IYER",
    role: "Engine Officer",
    quote: "Cochin Maritime's approach to maritime education is modern, industry-relevant, and truly world-class.",
    image: "/maritime-engineer-officer-portrait.jpg",
  },
  {
    name: "DIVYA SHARMA",
    role: "First Officer",
    quote: "The institute's focus on safety standards and international norms is commendable and sets it apart.",
    image: "/professional-maritime-officer-portrait.jpg",
  },
]

export default function TestimonialsMarquee() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-[#0B2A4A] via-[#0B2A4A]/95 to-[#0B2A4A]">
      <style jsx>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonials-marquee-track {
          display: flex;
          animation: marqueeScroll 40s linear infinite;
          gap: 2rem;
          padding: 2rem 0;
          ${isPaused ? "animation-play-state: paused;" : ""}
        }

        .testimonial-card-wrapper {
          flex-shrink: 0;
          width: 380px;
        }

        @media (max-width: 768px) {
          .testimonial-card-wrapper {
            width: 300px;
          }
        }
      `}</style>

      <div
        className="flex items-center px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="testimonials-marquee-track">
          {testimonials.concat(testimonials).concat(testimonials).map((testimonial, idx) => (
            <div key={idx} className="testimonial-card-wrapper">
              <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                <CardContent className="p-6 text-center flex flex-col h-full justify-between">
                  <div>
                    <div className="mb-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-[#D4AF37]"
                      />
                    </div>
                    <p className="text-[#5A5A5A] italic mb-4 leading-relaxed text-sm">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#D4AF37] text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                    <h4 className="font-bold text-[#0B2A4A] text-base">{testimonial.name}</h4>
                    <p className="text-[#5A5A5A] text-xs font-semibold">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
