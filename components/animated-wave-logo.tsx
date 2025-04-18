"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function AnimatedWaveLogo() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrameId: number
    const startTime = Date.now()

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime

      // Create a wave effect in the teal part of the logo
      // This is a simplified version that just moves the entire logo slightly
      const translateY = Math.sin((elapsed / 2000) * Math.PI) * 2

      if (container) {
        // Apply a subtle wave effect to the container
        container.style.transform = `translateY(${translateY}px)`
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative h-8 w-auto transition-transform">
      <Image src="/clickflow-logo.png" alt="Clickflow Logo" width={140} height={40} className="h-8 w-auto" />
    </div>
  )
}
