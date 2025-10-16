"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
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
    quote:
      "I'm very happy to join this institute. The institute has all the facilities required as per the norms of DG Shipping.",
    image: "/placeholder.svg",
  },
  {
    name: "RAHUL MENON",
    role: "Engine Officer",
    quote:
      "Excellent training facilities and experienced faculty. The practical approach to teaching helped me excel in my career.",
    image: "/placeholder.svg",
  },
  {
    name: "ANITA SHARMA",
    role: "Navigation Officer",
    quote:
      "The comprehensive curriculum and modern infrastructure at Cochin Maritime prepared me well for the maritime industry.",
    image: "/placeholder.svg",
  },
  {
    name: "VIKRAM PATEL",
    role: "Chief Officer",
    quote:
      "Outstanding mentorship and real-world training that prepared me for leadership roles at sea.",
    image: "/placeholder.svg",
  },
  {
    name: "PRIYA NAIR",
    role: "Maritime Engineer",
    quote:
      "The hands-on experience and industry connections at Cochin Maritime are invaluable for career growth.",
    image: "/placeholder.svg",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isAutoPlay) return

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlay])

  const handlePrev = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlay(false)
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full">
      {/* Main Carousel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 mx-auto max-w-2xl">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-[#D4AF37]"
                    />
                  </div>
                  <p className="text-[#5A5A5A] italic mb-6 leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#D4AF37] text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <h4 className="font-bold text-[#8B2332] text-lg">{testimonial.name}</h4>
                  <p className="text-[#5A5A5A] text-sm">{testimonial.role}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 z-10 p-2 rounded-full bg-[#8B2332] text-white hover:bg-[#D4AF37] transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 z-10 p-2 rounded-full bg-[#8B2332] text-white hover:bg-[#D4AF37] transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-[#D4AF37]"
                : "w-3 bg-[#8B2332] hover:bg-[#D4AF37]"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="text-center mt-4">
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="text-sm text-[#5A5A5A] hover:text-[#8B2332] transition-colors"
        >
          {isAutoPlay ? "⏸ Auto-playing" : "▶ Resume auto-play"}
        </button>
      </div>
    </div>
  )
}
