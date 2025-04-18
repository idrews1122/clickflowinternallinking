"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function AnimatedLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 140
    canvas.height = 40

    // Load the Clickflow logo
    const logoImg = new Image()
    logoImg.crossOrigin = "anonymous"
    logoImg.src = "/clickflow-logo.png"

    let animationFrameId: number | null = null
    let offset = 0
    const waveHeight = 4
    const waveSpeed = 0.05

    const drawLogo = () => {
      if (!ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw logo
      if (logoImg.complete) {
        ctx.drawImage(logoImg, 0, 0, canvas.width, canvas.height)

        // Get teal part of logo (lower part)
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const data = imageData.data

        // Create a new image data for the animated wave
        const newImageData = ctx.createImageData(canvas.width, canvas.height)
        const newData = newImageData.data

        // Modify the teal part with wave animation
        for (let x = 0; x < canvas.width; x++) {
          // Calculate wave Y offset for this x position
          const waveY = Math.sin(x * 0.1 + offset) * waveHeight

          for (let y = 0; y < canvas.height; y++) {
            const idx = (y * canvas.width + x) * 4

            // If this pixel is in the teal/turquoise part of the logo (using a color threshold)
            if (
              idx < data.length &&
              data[idx] < 100 &&
              data[idx + 1] > 150 &&
              data[idx + 2] > 150 &&
              data[idx + 3] > 100
            ) {
              // Sample from a shifted y position for the wave effect
              const sourceY = Math.max(0, Math.min(canvas.height - 1, Math.round(y + waveY)))
              const sourceIdx = (sourceY * canvas.width + x) * 4

              if (sourceIdx < data.length) {
                newData[idx] = data[sourceIdx]
                newData[idx + 1] = data[sourceIdx + 1]
                newData[idx + 2] = data[sourceIdx + 2]
                newData[idx + 3] = data[sourceIdx + 3]
              }
            } else if (idx < data.length) {
              // Copy non-teal pixels directly
              newData[idx] = data[idx]
              newData[idx + 1] = data[idx + 1]
              newData[idx + 2] = data[idx + 2]
              newData[idx + 3] = data[idx + 3]
            }
          }
        }

        // Draw the modified image with the wave effect
        ctx.putImageData(newImageData, 0, 0)
      }

      // Update animation parameters
      offset += waveSpeed

      // Continue animation loop
      animationFrameId = requestAnimationFrame(drawLogo)
    }

    // Start animation when image loads
    logoImg.onload = () => {
      drawLogo()
    }

    // Handle errors with image loading
    logoImg.onerror = () => {
      console.error("Error loading logo image")
    }

    // Start animation even if image is already loaded
    if (logoImg.complete) {
      drawLogo()
    }

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <div className="relative h-8 w-[140px]">
      <canvas ref={canvasRef} className="h-full w-full" style={{ height: "32px", width: "140px" }} />
      {/* Fallback image in case canvas doesn't work */}
      <div className="absolute top-0 left-0 opacity-0">
        <Image src="/clickflow-logo.png" alt="Clickflow Logo" width={140} height={40} className="h-8 w-auto" />
      </div>
    </div>
  )
}
