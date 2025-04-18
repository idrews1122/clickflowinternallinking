"use client"

import { useEffect, useState } from "react"

interface TypewriterTextProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenWords?: number
  className?: string
}

export default function TypewriterText({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
  className = "",
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // Current word being processed
        const currentWord = words[currentWordIndex]

        // If deleting
        if (isDeleting) {
          setCurrentText(currentWord.substring(0, currentText.length - 1))
        } else {
          // If typing
          setCurrentText(currentWord.substring(0, currentText.length + 1))
        }

        // If word is complete and not deleting yet
        if (!isDeleting && currentText === currentWord) {
          // Start deleting after delay
          setTimeout(() => setIsDeleting(true), delayBetweenWords)
        }
        // If deletion is complete
        else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          // Move to next word
          setCurrentWordIndex((currentWordIndex + 1) % words.length)
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords])

  return <span className={className}>{currentText}</span>
}
