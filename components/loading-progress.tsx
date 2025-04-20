"use client"

import { useEffect, useState } from "react"

export default function LoadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Function to handle the progress animation
    const animateProgress = () => {
      // Start at 0%
      setProgress(0)

      // Create interval to increase progress
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          // Increase progress by random amount between 1-3%
          const increment = Math.floor(Math.random() * 3) + 1

          // Calculate new progress
          const newProgress = prevProgress + increment

          // If we reach 100%, clear this interval
          if (newProgress >= 100) {
            clearInterval(interval)

            // Schedule a reset after a brief pause
            setTimeout(() => {
              // Start the animation again
              animateProgress()
            }, 1000) // Wait 1 second before restarting

            return 100
          }

          return newProgress
        })
      }, 150) // Update every 150ms

      // Return cleanup function
      return () => clearInterval(interval)
    }

    // Start the initial animation
    const cleanup = animateProgress()

    // Clean up on component unmount
    return cleanup
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
        <div className="space-y-6">
          <div className="flex flex-col items-center">
            <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
              <div
                className="bg-teal-500 h-4 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="flex justify-between w-full text-sm text-gray-400 mb-6">
              <span>0%</span>
              <span>{progress}%</span>
              <span>100%</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="h-4 w-4 rounded-full bg-teal-500 animate-pulse"></div>
              <p className="text-gray-300">Auto applying approved internal links...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
