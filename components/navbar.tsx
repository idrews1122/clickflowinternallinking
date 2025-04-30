"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import AnimatedWaveLogo from "./animated-wave-logo"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <AnimatedWaveLogo />
            </Link>

            <div className="hidden md:ml-10 md:block"></div>
          </div>

          <div className="hidden md:flex items-center">
            <Button
              className="bg-teal-500 hover:bg-teal-600 text-white"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Ranking Higher Now
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 sm:px-3"></div>
          <div className="mt-3 px-5 pb-3">
            <Button
              className="w-full bg-teal-500 hover:bg-teal-600 text-white"
              onClick={() => {
                document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
                setIsMenuOpen(false)
              }}
            >
              Start Ranking Higher Now
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
