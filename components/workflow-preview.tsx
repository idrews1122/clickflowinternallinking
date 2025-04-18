"use client"

import { Check } from "lucide-react"
import { useEffect, useRef } from "react"

export default function WorkflowPreview() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrameId: number
    const startTime = Date.now()

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime

      // Create a slow, subtle floating effect (4px up and down every 3 seconds)
      const translateY = Math.sin((elapsed / 3000) * Math.PI) * 4

      if (container) {
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
    <div ref={containerRef} className="bg-gray-900 rounded-lg border border-gray-800 p-6 shadow-xl">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-xl font-bold text-white">Boost Page Rankings with Internal Links</h3>
        <span className="text-teal-400 text-sm font-medium px-3 py-1 bg-teal-400/10 rounded-full">Completed</span>
      </div>

      <div className="mb-4">
        <p className="text-teal-400 text-sm mb-2 font-medium">Target URL:</p>
        <a href="#" className="text-blue-400 text-sm hover:underline">
          https://www.singlegrain.com/abm/how-to-do-account-based-marketing-in-7-steps/
        </a>
      </div>

      <div className="border-t border-gray-800 my-4"></div>

      <div className="space-y-4">
        <div className="grid grid-cols-3 text-sm font-medium text-gray-400">
          <div>Task</div>
          <div>Current Action</div>
          <div>Status</div>
        </div>

        {[
          {
            task: "Analyze Target Page",
            action: "Target page analysis completed",
            status: "Completed",
          },
          {
            task: "Find Link Opportunities",
            action: "Link opportunities identified",
            status: "Completed",
          },
          {
            task: "Review Link Opportunities",
            action: "Link opportunities selected",
            status: "Completed",
          },
          {
            task: "Apply Internal Link Changes",
            action: "Link changes processed",
            status: "Completed",
          },
        ].map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center py-3 border-b border-gray-800 last:border-0">
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center mr-2">
                <Check className="h-3 w-3 text-teal-400" />
              </div>
              <span className="text-white">{item.task}</span>
            </div>
            <div className="text-gray-300 text-sm">{item.action}</div>
            <div>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400">
                <Check className="h-3 w-3 mr-1" /> {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <div className="px-4 py-2 bg-teal-500 text-white rounded-md text-sm font-medium cursor-pointer hover:bg-teal-600 transition-colors">
          View Details
        </div>
      </div>
    </div>
  )
}
