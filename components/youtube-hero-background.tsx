"use client"

interface YouTubeHeroBackgroundProps {
  videoId: string
  children?: React.ReactNode
  overlayOpacity?: number
  height?: "screen" | "half"
}

export default function YouTubeHeroBackground({
  videoId,
  children,
  overlayOpacity = 0.1,
  height = "screen",
}: YouTubeHeroBackgroundProps) {
  const minHeightClass = height === "half" ? "min-h-[50vh]" : "min-h-screen"

  return (
    <div className={`relative w-full ${minHeightClass} overflow-hidden`}>
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0`}
          title="Background Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            border: "none",
            pointerEvents: "none",
          }}
        />
      </div>

      <div
        className="absolute inset-0 z-5"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${overlayOpacity})`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  )
}
