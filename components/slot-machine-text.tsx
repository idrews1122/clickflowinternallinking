"use client"

import { useEffect, useState, useRef } from "react"

interface SlotMachineTextProps {
  words: string[]
  finalWord: string
  className?: string
  duration?: number
}

export default function SlotMachineText({ words, finalWord, className = "", duration = 3000 }: SlotMachineTextProps) {
  const [currentWord, setCurrentWord] = useState(words[0])
  const [isAnimating, setIsAnimating] = useState(true)
  const startTime = useRef<number | null>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isAnimating) return

    startTime.current = Date.now()

    const animate = () => {
      if (!startTime.current) return

      const elapsed = Date.now() - startTime.current
      const progress = Math.min(elapsed / duration, 1)

      // Slow down the animation over time (easeOut)
      const easeOutProgress = 1 - Math.pow(1 - progress, 3)

      // Calculate how frequently to change words based on progress
      // Start fast, then slow down
      const changeFrequency = Math.max(100, 800 * easeOutProgress)

      if (elapsed % Math.floor(changeFrequency) < 50) {
        // If we're near the end, show the final word more frequently
        if (progress > 0.7 && Math.random() > 0.5) {
          setCurrentWord(finalWord)
        } else {
          // Otherwise pick a random word from the list
          const randomIndex = Math.floor(Math.random() * words.length)
          setCurrentWord(words[randomIndex])
        }
      }

      // When animation is complete, set the final word
      if (progress >= 1) {
        setCurrentWord(finalWord)
        setIsAnimating(false)
        return
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isAnimating, words, finalWord, duration])

  return <span className={className}>{currentWord}</span>
}
