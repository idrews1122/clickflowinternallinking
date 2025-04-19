"use client"

import { useEffect, useRef } from "react"

export default function FlowingLogo() {
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

    // Create a separate image for the flowing part
    const flowImg = new Image()
    flowImg.crossOrigin = "anonymous"
    flowImg.src = "/clickflow-flow.png" // This will be created dynamically

    let animationFrameId: number
    let offset = 0
    const flowSpeed = 1

    // Function to extract the teal/blue part of the logo
    const extractFlowPart = () => {
      if (!ctx) return

      // Create a temporary canvas to extract the flow part
      const tempCanvas = document.createElement("canvas")
      tempCanvas.width = canvas.width
      tempCanvas.height = canvas.height
      const tempCtx = tempCanvas.getContext("2d")
      if (!tempCtx) return

      // Draw the logo on the temp canvas
      tempCtx.drawImage(logoImg, 0, 0, canvas.width, canvas.height)

      // Get image data
      const imageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      // Create a new image data for just the flow part
      const flowData = tempCtx.createImageData(canvas.width, canvas.height)
      const flowDataArr = flowData.data

      // Extract only the teal/blue pixels
      for (let i = 0; i < data.length; i += 4) {
        // Check if pixel is in the teal/blue range
        if (
          data[i] < 100 && // R
          data[i + 1] > 150 && // G
          data[i + 2] > 150 && // B
          data[i + 3] > 100 // A
        ) {
          flowDataArr[i] = data[i]
          flowDataArr[i + 1] = data[i + 1]
          flowDataArr[i + 2] = data[i + 2]
          flowDataArr[i + 3] = data[i + 3]
        }
      }

      // Put the flow data back to the temp canvas
      tempCtx.putImageData(flowData, 0, 0)

      // Create a new image from the temp canvas
      const newFlowImg = new Image()
      newFlowImg.src = tempCanvas.toDataURL()

      return newFlowImg
    }

    // Function to draw the logo with flowing animation
    const drawLogo = () => {
      if (!ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (logoImg.complete) {
        // First, draw the logo without the flow part
        ctx.drawImage(logoImg, 0, 0, canvas.width, canvas.height)

        // Get image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const data = imageData.data

        // Remove the teal/blue part
        for (let i = 0; i < data.length; i += 4) {
          // Check if pixel is in the teal/blue range
          if (
            data[i] < 100 && // R
            data[i + 1] > 150 && // G
            data[i + 2] > 150 && // B
            data[i + 3] > 100 // A
          ) {
            data[i + 3] = 0 // Make transparent
          }
        }

        // Put the modified image data back
        ctx.putImageData(imageData, 0, 0)

        // Now draw the flowing part with animation
        if (flowImg.complete) {
          // Create a pattern that repeats and shifts
          const pattern = ctx.createPattern(flowImg, "repeat-x")
          if (pattern) {
            // Set the pattern transform to create the flowing effect
            const matrix = new DOMMatrix()
            matrix.translateSelf(offset, 0)
            pattern.setTransform(matrix)

            // Fill a shape with the pattern
            ctx.fillStyle = pattern

            // Create a mask shape that matches the flow part of the logo
            ctx.beginPath()

            // Define the shape of the flow (simplified approximation)
            ctx.moveTo(0, 30)
            ctx.lineTo(140, 30)
            ctx.lineTo(140, 40)
            ctx.lineTo(0, 40)
            ctx.closePath()

            ctx.fill()
          }
        }
      }

      // Update animation offset
      offset -= flowSpeed
      if (offset < -canvas.width) offset = 0

      // Continue animation loop
      animationFrameId = requestAnimationFrame(drawLogo)
    }

    // When logo loads, extract the flow part and start animation
    logoImg.onload = () => {
      const extractedFlow = extractFlowPart()
      if (extractedFlow) {
        flowImg.src = extractedFlow.src
        flowImg.onload = () => {
          drawLogo()
        }
      } else {
        // Fallback if extraction fails
        drawLogo()
      }
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative h-8 w-[140px]">
      <canvas ref={canvasRef} className="h-full w-full" style={{ height: "32px", width: "140px" }} />
      {/* Fallback image */}
      <div className="absolute top-0 left-0 opacity-0">
        <img src="/clickflow-logo.png" alt="Clickflow Logo" className="h-8 w-auto" />
      </div>
    </div>
  )
}
