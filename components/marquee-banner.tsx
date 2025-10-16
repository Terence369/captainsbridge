"use client"

import { Anchor, Ship, Compass, Award } from "lucide-react"

export default function MarqueeBanner() {
  const items = [
    { icon: Ship, text: "Premier Maritime Training Institute" },
    { icon: Anchor, text: "World-Class Facilities" },
    { icon: Compass, text: "Expert Faculty & Industry Mentors" },
    { icon: Award, text: "100% Placement Support" },
    { icon: Ship, text: "Comprehensive Maritime Courses" },
    { icon: Anchor, text: "International Certifications" },
  ]

  return (
    <div className="w-full overflow-hidden bg-[#D4AF37]">
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .marquee-content {
          animation: marquee 35s linear infinite;
          display: flex;
          white-space: nowrap;
          gap: 2rem;
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex items-center py-3 h-fit">
        <div className="marquee-content">
          {items.concat(items).map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="flex items-center gap-2 px-4 font-semibold text-[#0B2A4A]">
                <Icon size={20} />
                <span className="text-sm">{item.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
