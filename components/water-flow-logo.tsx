"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function WaterFlowLogo() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create the water flow effect
    const waterFlow = document.createElement("div")
    waterFlow.className = "absolute bottom-0 left-0 right-0 h-3 overflow-hidden"

    // Create multiple water waves for a more realistic effect
    for (let i = 0; i < 3; i++) {
      const wave = document.createElement("div")
      wave.className = "absolute inset-0"

      // Create a gradient background that will animate
      wave.style.background = "linear-gradient(90deg, #14B8A6, #0EA5E9, #14B8A6, #0EA5E9)"
      wave.style.backgroundSize = "200% 100%"
      wave.style.animation = `flowAnimation ${3 + i * 0.5}s linear infinite`
      wave.style.opacity = `${0.8 - i * 0.2}`
      wave.style.transform = `translateY(${i * 2}px)`

      waterFlow.appendChild(wave)
    }

    // Add the water flow to the container
    container.appendChild(waterFlow)

    // Add the animation keyframes to the document
    const style = document.createElement("style")
    style.textContent = `
      @keyframes flowAnimation {
        0% {
          background-position: 0% 0%;
        }
        100% {
          background-position: 200% 0%;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative h-8 w-auto">
      <Image src="/clickflow-logo.png" alt="Clickflow Logo" width={140} height={40} className="h-8 w-auto" />
    </div>
  )
}
