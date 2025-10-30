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
    <div 
      className="sticky top-24 z-40 w-full overflow-hidden h-16 flex items-center border-b border-white/10"
      style={{ backgroundColor: 'rgb(0, 0, 0)' }}
    >
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          display: flex;
          animation: marquee 50s linear infinite;
          gap: 2rem;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          white-space: nowrap;
          flex-shrink: 0;
          padding: 0 1.5rem;
          font-weight: 600;
          font-size: 0.9375rem;
          font-family: 'Alata', serif;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: rgb(255, 255, 255);
          transition: all 0.3s ease-out;
        }

        .marquee-item:hover {
          color: rgb(0, 152, 183);
          transform: scale(1.05);
        }

        .marquee-item svg {
          color: rgb(222, 140, 4);
          flex-shrink: 0;
          transition: all 0.3s ease-out;
        }

        .marquee-item:hover svg {
          color: rgb(0, 152, 183);
          transform: rotate(15deg);
        }
      `}</style>

      <div className="flex items-center h-full w-full">
        <div className="marquee-track">
          {marqueeItems.concat(marqueeItems).concat(marqueeItems).map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="marquee-item">
                <Icon size={20} />
                <span>{item.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
