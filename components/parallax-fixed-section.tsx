import React from "react"
import { cn } from "@/lib/utils"

type ParallaxFixedSectionProps = {
  imageUrl: string
  overlayClassName?: string
  className?: string
  containerClassName?: string
  children?: React.ReactNode
}

export default function ParallaxFixedSection({
  imageUrl,
  overlayClassName = "",
  className,
  containerClassName,
  children,
}: ParallaxFixedSectionProps) {
  return (
    <section className={cn("relative isolate", className)}>
      <div
        className={cn("absolute inset-0 -z-10 parallax-fixed-bg", "bg-center bg-no-repeat bg-cover")}
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-hidden
      />
      {overlayClassName ? <div className={cn("absolute inset-0 -z-10", overlayClassName)} aria-hidden /> : null}
      <div className={cn("relative z-10", containerClassName)}>{children}</div>
    </section>
  )
}
