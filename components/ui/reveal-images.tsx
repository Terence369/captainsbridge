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
  // Use the site's existing paragraph text split into segments, each mapped to existing site images
  const paragraph =
    "Situated in South India, Kochi is blessed with a rich coastline, a well-known port and an established maritime environment, and is notable for its positive side of the marine sector. By catering courses that touch various aspects of marine studies, a candidate can select from a wide range of courses and the few of the best upstage training centers."

  const items: ShowImageListItemProps[] = [
    {
      text: "Situated in South India, Kochi",
      images: [
        { src: "/images/home-hero.jpg", alt: "Kochi coastline" },
        { src: "/images/cards/offshore.svg", alt: "Offshore" },
      ],
    },
    {
      text: "is blessed with a rich coastline, a well-known port",
      images: [
        { src: "/images/cards/partners.svg", alt: "Port" },
        { src: "/images/cards/classroom.svg", alt: "Classroom" },
      ],
    },
    {
      text: "and an established maritime environment",
      images: [
        { src: "/images/courses-hero.jpg", alt: "Maritime environment" },
        { src: "/images/value-added-hero.jpg", alt: "Value added" },
      ],
    },
    {
      text: "and is notable for its positive side of the marine sector.",
      images: [
        { src: "/images/certification-hero.jpg", alt: "Marine sector" },
        { src: "/images/cards/placement.svg", alt: "Placement" },
      ],
    },
    {
      text: "By catering courses that touch various aspects of marine studies,",
      images: [
        { src: "/images/courses-hero.jpg", alt: "Courses" },
        { src: "/images/cards/mechanical.svg", alt: "Mechanical" },
      ],
    },
    {
      text: "a candidate can select from a wide range of courses",
      images: [
        { src: "/images/cards/crew.svg", alt: "Crew" },
        { src: "/images/cards/rigging.svg", alt: "Rigging" },
      ],
    },
    {
      text: "and the few of the best upstage training centers.",
      images: [
        { src: "/images/home-hero.jpg", alt: "Training center" },
        { src: "/images/cards/laboratory.svg", alt: "Laboratory" },
      ],
    },
  ]

  return (
    <div className={cn("reveal-list-root mx-auto max-w-4xl px-4 py-8 text-center", className)}>
      <div className="reveal-list-wrapper inline-block">
        <p className="reveal-paragraph text-center">{/* keep inline-wrapping structure */}
          {items.map((it, idx) => (
            <React.Fragment key={idx}>
              <RevealImageListItem text={it.text} images={it.images} />
              {" \u00A0"}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  )
}
