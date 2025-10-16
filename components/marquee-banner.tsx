"use client"

import { Ship, Anchor, Compass, Award } from "lucide-react"

const marqueeItems = [
  { icon: Ship, text: "Premier Maritime Training Institute" },
  { icon: Anchor, text: "World-Class Facilities" },
  { icon: Compass, text: "Expert Faculty & Industry Mentors" },
  { icon: Award, text: "100% Placement Support" },
  { icon: Ship, text: "Comprehensive Maritime Courses" },
  { icon: Anchor, text: "International Certifications" },
]

export default function MarqueeBanner() {
  return (
    <div className="sticky top-0 z-40 w-full overflow-hidden bg-[#D4AF37] h-14">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          display: flex;
          animation: scroll 40s linear infinite;
          gap: 1.5rem;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
          flex-shrink: 0;
          padding: 0 1rem;
          font-weight: 600;
          font-size: 0.875rem;
          color: #0b2a4a;
        }
      `}</style>

      <div className="flex items-center h-full">
        <div className="marquee-track">
          {marqueeItems.concat(marqueeItems).map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="marquee-item">
                <Icon size={18} />
                <span>{item.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
