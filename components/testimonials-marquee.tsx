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
    <div className="w-full overflow-hidden" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
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
              <Card 
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full group"
                style={{ backgroundColor: 'rgb(245, 243, 239)' }}
              >
                <CardContent className="p-6 text-center flex flex-col h-full justify-between">
                  <div>
                    <div className="mb-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover border-4 transition-all group-hover:border-cyan-500"
                        style={{ borderColor: 'rgb(222, 140, 4)' }}
                      />
                    </div>
                    <p className="italic mb-4 leading-relaxed text-sm text-gray-700">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg" style={{ color: 'rgb(222, 140, 4)' }}>
                          ★
                        </span>
                      ))}
                    </div>
                    <h4 className="font-bold text-base uppercase" style={{ fontFamily: 'var(--font-display)', color: 'rgb(0, 152, 183)', letterSpacing: '0.8px' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-xs font-semibold text-gray-600">
                      {testimonial.role}
                    </p>
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
