"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  targetText: string
  duration?: number
}

export default function AnimatedCounter({ targetText, duration = 2000 }: AnimatedCounterProps) {
  const [displayText, setDisplayText] = useState(targetText)
  const [isAnimating, setIsAnimating] = useState(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          setIsAnimating(true)

          const numericPart = parseInt(targetText.replace(/\D/g, ""))
          const nonNumericPart = targetText.replace(/\d+/g, "")
          
          if (isNaN(numericPart)) {
            return
          }

          const startTime = Date.now()
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const currentNumber = Math.floor(numericPart * progress)
            setDisplayText(currentNumber + nonNumericPart)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setDisplayText(targetText)
              setIsAnimating(false)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 },
    )

    const element = document.querySelector(`[data-counter="${targetText}"]`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [targetText, duration])

  return <span data-counter={targetText}>{displayText}</span>
}
