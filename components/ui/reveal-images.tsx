"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"

type ShowImage = { src: string; alt?: string }

type ShowImageListItemProps = {
  text: string
  images: ShowImage[]
}

export function RevealImageList({ className }: { className?: string }) {
  const items: ShowImageListItemProps[] = [
    {
      text: "Premier Maritime Training",
      images: [
        { src: "/images/home-hero.jpg", alt: "Maritime Training Vessel" },
        { src: "/images/cards/classroom.svg", alt: "Training Classroom" },
      ],
    },
    {
      text: "Certified Courses",
      images: [
        { src: "/images/certification-hero.jpg", alt: "Certification Programs" },
        { src: "/images/courses-hero.jpg", alt: "Marine Engineering Course" },
      ],
    },
    {
      text: "Career Excellence",
      images: [
        { src: "/images/value-added-hero.jpg", alt: "Marine Engineer Graduate" },
        { src: "/images/cards/placement.svg", alt: "Placement Support" },
      ],
    },
  ]

  const [active, setActive] = useState<number | null>(0)

  return (
    <div className={cn("mx-auto my-12 max-w-7xl px-4", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h3 className="text-3xl md:text-4xl font-black heading-premium text-primary-cyan">Our Expertise</h3>
          <p className="text-base body-premium text-dark-secondary max-w-xl">
            Explore our flagship offerings. Hover or focus each item to reveal contextual imagery and quick highlights of our maritime training capabilities.
          </p>

          <ul className="mt-6 space-y-3">
            {items.map((it, idx) => (
              <li key={it.text}>
                <button
                  onMouseEnter={() => setActive(idx)}
                  onFocus={() => setActive(idx)}
                  onMouseLeave={() => setActive(null)}
                  onBlur={() => setActive(null)}
                  className={cn(
                    "w-full text-left p-4 rounded-lg transition-colors duration-200 border",
                    active === idx ? "bg-section-light border-cyan" : "bg-white border-lighter-color",
                  )}
                >
                  <span className="block text-lg font-semibold heading-premium text-primary-cyan">
                    {it.text}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg bg-section-light">
          {items.map((it, idx) => (
            <div
              key={it.text}
              aria-hidden={active !== idx}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center",
                active === idx ? "opacity-100 scale-100 z-20" : "opacity-0 scale-95 z-10 pointer-events-none",
              )}
            >
              <div className="relative w-full h-full">
                {it.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    className={cn(
                      "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out",
                      i === 0 ? "transform scale-100" : "transform scale-105",
                    )}
                    style={{
                      opacity: active === idx ? (i === 0 ? 1 : 0.95) : 0,
                      transform: active === idx ? (i === 0 ? "scale(1)" : "scale(1.06)") : undefined,
                    }}
                  />
                ))}

                {/* subtle overlay when active to balance contrast */}
                <div
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    active === null ? "opacity-0" : active === idx ? "opacity-0" : "opacity-40",
                  )}
                  style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.0), rgba(0,0,0,0.12))" }}
                />
              </div>
            </div>
          ))}

          {/* default preview when none active: show first item */}
          {active === null && (
            <div className="absolute inset-0">
              <img src={items[0].images[0].src} alt={items[0].images[0].alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
