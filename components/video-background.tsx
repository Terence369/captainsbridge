"use client"

interface VideoBackgroundProps {
  src: string
  fallbackImage?: string
  className?: string
}

export function VideoBackground({
  src,
  fallbackImage = "/placeholder.svg",
  className = "",
}: VideoBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
        poster={fallbackImage}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}
