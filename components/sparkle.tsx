"use client"

import { useState, useEffect } from "react"

interface SparkleProps {
  color?: string
  size?: number
  count?: number
  duration?: number
}

export function Sparkles({ color = "#ffb723", size = 6, count = 15, duration = 1000 }: SparkleProps) {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])

  useEffect(() => {
    // Create initial sparkles
    const initialSparkles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: size * (0.5 + Math.random() * 0.5),
    }))
    setSparkles(initialSparkles)

    // Update sparkles periodically
    const interval = setInterval(() => {
      setSparkles((prev) =>
        prev.map((sparkle) => ({
          ...sparkle,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: size * (0.5 + Math.random() * 0.5),
        })),
      )
    }, duration)

    return () => clearInterval(interval)
  }, [count, size, duration])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: color,
            borderRadius: "50%",
            boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.size / 2}px ${color}`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}
