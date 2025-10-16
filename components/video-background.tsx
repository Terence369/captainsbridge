"use client"

import { useState } from "react"

interface VideoBackgroundProps {
  src?: string
  fallbackImage?: string
  className?: string
}

export function VideoBackground({
  src,
  fallbackImage = "/placeholder.svg",
  className = "",
}: VideoBackgroundProps) {
  const [videoError, setVideoError] = useState(false)

  if (!src || videoError) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <img
          src={fallbackImage}
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
        poster={fallbackImage}
        onError={() => setVideoError(true)}
      >
        <source src={src} type="video/mp4" />
      </video>
      <img
        src={fallbackImage}
        alt="Background Fallback"
        className="absolute inset-0 h-full w-full object-cover -z-10"
      />
    </div>
  )
}
