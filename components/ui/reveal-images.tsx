"use client"

import React from "react"
import { cn } from "@/lib/utils"

type ImageSource = { src: string; alt?: string }

type ShowImageListItemProps = {
  text: string
  images: [ImageSource, ImageSource]
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
  // renamed class variables to be descriptive
  const imageContainerClass = "absolute -right-10 -top-8 z-40 h-[160px] w-[224px]"
  const imageEffectClass =
    "relative duration-500 delay-100 shadow-sm group-hover:shadow-md opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-20 h-20 overflow-hidden transition-all rounded-md"

  return (
    <span className="reveal-item group relative inline-block align-baseline mx-2">
      <button
        type="button"
        className="reveal-trigger inline-block text-[28px] md:text-[32px] leading-[1.3] tracking-[-0.02em] font-bold lowercase text-[#0098b7] transition-colors duration-300 group-hover:opacity-50 focus:outline-none"
        aria-label={text}
      >
        {text}
      </button>

      {/* gold circle separator - more prominent */}
      <span className="reveal-separator inline-block w-4 h-4 bg-[#de8c04] mx-2.5 rounded-full align-middle" aria-hidden />

      <span className={imageContainerClass} aria-hidden>
        <span className={imageEffectClass}>
          <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover rounded-md" />
        </span>
      </span>
    </span>
  )
}

export function RevealImageList({ className }: { className?: string }) {
  // New comprehensive text about maritime education offerings
  const paragraph =
    "Certified maritime courses, advanced training, global placement opportunities, modern facilities, expert faculty, and industry-recognized accreditation."

  const items: ShowImageListItemProps[] = [
    {
      text: "Certified maritime courses",
      images: [
        { src: "/images/certification-hero.jpg", alt: "Maritime certification" },
        { src: "/images/cards/offshore.svg", alt: "Certified maritime" },
      ],
    },
    {
      text: "advanced training",
      images: [
        { src: "/images/courses-hero.jpg", alt: "Training programs" },
        { src: "/images/cards/classroom.svg", alt: "Advanced training classroom" },
      ],
    },
    {
      text: "global placement opportunities",
      images: [
        { src: "/images/facility-hero.jpg", alt: "Global opportunities" },
        { src: "/images/cards/placement.svg", alt: "Global placement" },
      ],
    },
    {
      text: "modern facilities",
      images: [
        { src: "/images/advanced-computer-lab-with-maritime-simulation.jpg", alt: "Modern facilities" },
        { src: "/images/cards/mechanical.svg", alt: "Modern equipment" },
      ],
    },
    {
      text: "expert faculty",
      images: [
        { src: "/images/maritime-training-classroom-with-students.jpg", alt: "Expert instructors" },
        { src: "/images/cards/crew.svg", alt: "Expert team" },
      ],
    },
    {
      text: "industry-recognized accreditation",
      images: [
        { src: "/images/certification-hero.jpg", alt: "Industry accreditation" },
        { src: "/images/cards/rigging.svg", alt: "Accreditation standards" },
      ],
    },
  ]

  return (
    <div className={cn("reveal-list-root mx-auto px-4 py-8 text-center", className)} style={{ maxWidth: '75vw' }}>
      <div className="reveal-list-wrapper inline-block">
        <p className="reveal-paragraph text-center text-[#333333] leading-relaxed">{/* continuous sentence with inline text */}
          {items.map((it, idx) => (
            <React.Fragment key={idx}>
              <RevealImageListItem text={it.text} images={it.images} />
              {idx < items.length - 1 ? null : ""}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  )
}
