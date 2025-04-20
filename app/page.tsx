"use client"

import { Check, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import WorkflowSteps from "@/components/workflow-steps"
import LinkSuggestions from "@/components/link-suggestions"
import BeforeAfter from "@/components/before-after"
import Navbar from "@/components/navbar"
import WorkflowPreview from "@/components/workflow-preview"
import PlatformIntro from "@/components/platform-intro"
import LoadingProgress from "@/components/loading-progress"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Platform Introduction */}
      <PlatformIntro />

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 z-0"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-400 to-transparent"></div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-gray-800 border border-gray-700 mb-4">
                <p className="text-sm font-medium text-teal-400">Powered by Single Grain</p>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Boost Page Rankings with <br className="hidden lg:block" />
                <span className="text-teal-400">Automated Internal Linking</span>
              </h1>

              <p className="text-xl text-gray-300">
                Our AI-powered <span className="text-teal-400">internal link building tool</span> identifies and
                implements internal linking opportunities, automatically rewriting your content to boost SEO
                performance.
              </p>

              <div className="pt-6">
                <p className="text-gray-400 flex items-center">
                  <Check className="h-5 w-5 text-teal-400 mr-2" />
                  <span>Guaranteed ranking increases</span>
                </p>
                <p className="text-gray-400 flex items-center">
                  <Check className="h-5 w-5 text-teal-400 mr-2" />
                  <span>100% automated process</span>
                </p>
                <p className="text-gray-400 flex items-center">
                  <Check className="h-5 w-5 text-teal-400 mr-2" />
                  <span>Personalized AI agent trained on your website</span>
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-teal-300 rounded-lg blur opacity-75"></div>
              <div className="relative">
                <WorkflowPreview />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-20">
            <ChevronDown className="h-10 w-10 text-teal-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Our <span className="text-teal-400">Internal Linking Tool</span> Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered workflow automates the entire internal linking process, from analysis to implementation,
              saving you time and boosting your rankings.
            </p>
          </div>

          <WorkflowSteps />
        </div>
      </section>

      {/* Link Suggestions Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Link Suggestions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our <span className="text-teal-400">internal link building tool</span> analyzes your content to find the
              most relevant internal linking opportunities, helping you build a stronger site architecture.
            </p>
          </div>

          <LinkSuggestions />
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See the Difference with{" "}
              <span className="text-teal-400">Automated Content Rewriting and Link Placement</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI agent intelligently rewrites your content to naturally incorporate internal links, improving user
              experience and SEO performance.
            </p>
          </div>

          <BeforeAfter />
        </div>
      </section>

      {/* Loading Progress Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Automatically Build Your <span className="text-teal-400">Approved Internal Links</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered system integrates directly with your CMS (like WordPress) to apply your approved internal
              links automatically, saving you time and ensuring perfect implementation.
            </p>
          </div>

          <LoadingProgress />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900 relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-400 to-transparent"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto bg-gray-800 p-8 md:p-12 rounded-xl border border-gray-700 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get 100 Internal Links <span className="text-teal-400">Completely Free</span>
              </h2>
              <p className="text-xl text-gray-300">
                We're so confident in our <span className="text-teal-400">automated internal linking</span> service that
                we're offering 100 internal links at no cost. Fill out the form below to get started.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 lg:px-16 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image src="/clickflow-logo.png" alt="Clickflow Logo" width={180} height={50} className="h-10 w-auto" />
              <p className="text-gray-400 mt-2">Powered by Single Grain</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <Link href="#" className="text-gray-300 hover:text-teal-400">
                Features
              </Link>
              <Link href="#" className="text-gray-300 hover:text-teal-400">
                Pricing
              </Link>
              <Link href="#" className="text-gray-300 hover:text-teal-400">
                About
              </Link>
              <Link href="#" className="text-gray-300 hover:text-teal-400">
                Contact
              </Link>
              <Link href="#" className="text-gray-300 hover:text-teal-400">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-teal-400">
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Clickflow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
