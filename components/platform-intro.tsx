"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import TypewriterSlowdown from "./typewriter-slowdown"

export default function PlatformIntro() {
  const cyclingWords = ["Content", "On-Page SEO", "Revenue", "Visibility", "Page Authority"]
  const finalWord = "Internal Linking"

  return (
    <section className="relative py-16 px-0 md:px-8 lg:px-16 bg-gray-950 border-b border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900 z-0"></div>
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-400 to-transparent"></div>

      <div className="container mx-auto relative z-10 px-1 md:px-4">
        <div className="flex flex-col items-center text-center">
          {/* Mobile version (hidden on md and up) */}
          <div className="md:hidden mb-6 mt-10 relative w-full">
            <h1 className="text-4xl font-bold tracking-tight">
              Scale Your
              <br />
              <span className="invisible">Internal Linking</span>
              <br />
              with AI-Powered Workflows
            </h1>

            {/* Absolutely positioned dynamic text that doesn't affect layout */}
            <div className="absolute top-[3.5rem] left-0 right-0 text-center text-4xl font-bold">
              <TypewriterSlowdown
                words={cyclingWords}
                finalWord={finalWord}
                className="text-teal-400"
                finalClassName="text-blue-400 underline decoration-2 underline-offset-4 cursor-default"
              />
            </div>
          </div>

          {/* Desktop version (hidden on mobile) */}
          <h1 className="hidden md:block text-5xl lg:text-6xl font-bold tracking-tight mb-6 mt-10">
            Scale Your{" "}
            <TypewriterSlowdown
              words={cyclingWords}
              finalWord={finalWord}
              className="text-teal-400"
              finalClassName="text-blue-400 underline decoration-2 underline-offset-4 cursor-default"
            />{" "}
            <br />
            with AI-Powered Workflows
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8 px-1 md:px-0">
            Boost your page rankings with Clickflow's automated{" "}
            <span className="text-teal-400">internal linking tool</span>. Let our AI agents handle the heavy lifting
            while you focus on growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full px-2 md:px-0 md:w-auto">
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white rounded-md px-8"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get 100 Free Internal Links <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md"
            >
              See How It Works
            </Button>
          </div>

          <div className="w-full">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
              Trusted by Industry Leaders
            </p>

            <div className="flex flex-wrap justify-center gap-6 md:gap-16">
              <div className="opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src="/intuit-logo.png"
                  alt="Intuit logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto brightness-0 invert opacity-70"
                />
              </div>
              <div className="opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src="/amazon-logo.png"
                  alt="Amazon logo"
                  width={140}
                  height={40}
                  className="h-8 w-auto brightness-0 invert opacity-70"
                />
              </div>
              <div className="opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src="/uber-logo.png"
                  alt="Uber logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto brightness-0 invert opacity-70"
                />
              </div>
              <div className="opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src="/airbnb-logo.png"
                  alt="Airbnb logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto brightness-0 invert opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
