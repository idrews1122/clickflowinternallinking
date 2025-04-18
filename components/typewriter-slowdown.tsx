"use client"

import { useEffect, useState, useRef } from "react"

interface TypewriterSlowdownProps {
  words: string[]
  finalWord: string
  className?: string
  finalClassName?: string
  typingSpeed?: number
  deletingSpeed?: number
  initialDelayBetweenWords?: number
  finalDelayFactor?: number
}

export default function TypewriterSlowdown({
  words,
  finalWord,
  className = "",
  finalClassName = "",
  typingSpeed = 60,
  deletingSpeed = 30,
  initialDelayBetweenWords = 600,
  finalDelayFactor = 4,
}: TypewriterSlowdownProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [delayBetweenWords, setDelayBetweenWords] = useState(initialDelayBetweenWords)
  const cycleCount = useRef(0)
  const totalCycles = useRef(words.length + 2) // +2 for a couple extra cycles before slowing down

  useEffect(() => {
    if (isFinished) return

    const timeout = setTimeout(
      () => {
        // Current word being processed
        const currentWord = currentWordIndex === words.length ? finalWord : words[currentWordIndex]

        // If deleting
        if (isDeleting) {
          setCurrentText(currentWord.substring(0, currentText.length - 1))
        } else {
          // If typing
          setCurrentText(currentWord.substring(0, currentText.length + 1))
        }

        // If word is complete and not deleting yet
        if (!isDeleting && currentText === currentWord) {
          // If we've reached the final word
          if (currentWordIndex === words.length) {
            setIsFinished(true)
            return
          }

          // Start deleting after delay
          setTimeout(() => setIsDeleting(true), delayBetweenWords)
        }
        // If deletion is complete
        else if (isDeleting && currentText === "") {
          setIsDeleting(false)

          // Move to next word or final word
          if (currentWordIndex < words.length) {
            cycleCount.current += 1

            // If we've gone through most words, start slowing down
            if (cycleCount.current >= totalCycles.current - 2) {
              // Increase delay between words to slow down the animation
              setDelayBetweenWords((prev) => prev * 1.5)
            }

            // If we've gone through all words, move to final word
            if (currentWordIndex === words.length - 1) {
              setCurrentWordIndex(words.length) // This will trigger using the finalWord
            } else {
              setCurrentWordIndex((currentWordIndex + 1) % words.length)
            }
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [
    currentText,
    currentWordIndex,
    isDeleting,
    isFinished,
    words,
    finalWord,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  ])

  return <span className={isFinished ? finalClassName : className}>{currentText}</span>
}
