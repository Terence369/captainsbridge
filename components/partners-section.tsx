"use client"

import { useRef, useState } from "react"
import { Ship, Anchor, Shield, Waves } from "lucide-react"

function useIntersectionObserver(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useState(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, ...options },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, isVisible] as const
}

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

interface PartnerCard {
  title: string
  description: string
  icon: React.ReactNode
}

const partners: PartnerCard[] = [
  {
    title: "HYDROGEN SULPHIDE AWARENESS (H2S)",
    description:
      "Hydrogen Sulphide (H2S) is a highly toxic and flammable gas. Each year in C...",
    icon: <Ship className="w-12 h-12" />,
  },
  {
    title: "HELICOPTER UNDERWATER ESCAPE TRAINING (HUET)",
    description:
      "The course aims to train personnel intended to work offshore, using the hel...",
    icon: <Waves className="w-12 h-12" />,
  },
  {
    title: "BASIC OFFSHORE SAFETY EDUCATION AND EMERGENCY TRAINING (BOSET)",
    description:
      "The course is designed for personnel intending to ...",
    icon: <Shield className="w-12 h-12" />,
  },
  {
    title: "RIGGING AND SLINGING SAFETY LEVEL 2",
    description:
      "Rigging Level 2 training provides the knowledge and skills necessary for a p...",
    icon: <Anchor className="w-12 h-12" />,
  },
  {
    title: "LIFTING AND HOISTING SAFETY",
    description:
      "The course provides vital information for those assisting in working around...",
    icon: <Ship className="w-12 h-12" />,
  },
  {
    title: "CRANE OPERATORS THEORY (PRACTICAL ON DEMAND)",
    description:
      "Our Crane Operator Training Program will train our operators on the safe u...",
    icon: <Waves className="w-12 h-12" />,
  },
  {
    title: "COOKERY COURSE WITH HACCP",
    description:
      "On completion of this food safety training course, participants will be abl...",
    icon: <Shield className="w-12 h-12" />,
  },
  {
    title: "BASIC COOKING COURSE CERTIFICATION",
    description:
      "Get info about online programs in cooking fixed about program requirements...",
    icon: <Anchor className="w-12 h-12" />,
  },
]

export function PartnersSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#8B2332] mb-4">
              PARTNERS AND SUPPORTING ORGANIZATION
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-[#5A5A5A] max-w-4xl mx-auto leading-relaxed">
              The Institute for Cochin Maritime Institute strives to increase public understanding of the causes and
              consequences of marine degradation while also promoting solutions. Through our partnerships, we are working
              to further conservation of marine life and ocean environments around the world.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col items-center text-center">
                <div className="animate-float mb-4 text-[#8B2332]">{partner.icon}</div>
                <h3 className="text-sm font-bold text-[#8B2332] mb-3 leading-tight h-12 flex items-center justify-center">
                  {partner.title}
                </h3>
                <p className="text-xs text-[#5A5A5A] leading-relaxed">{partner.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
