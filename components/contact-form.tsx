"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    cms: "",
    revenue: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/20 text-teal-500 mb-4">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          We've received your information and will be in touch shortly to get your 100 free internal links set up.
        </p>
        <Button className="bg-teal-500 hover:bg-teal-600 text-white" onClick={() => setIsSubmitted(false)}>
          Back to Form
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            required
            value={formState.name}
            onChange={handleChange}
            className="bg-gray-800 border-gray-700 focus:border-teal-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            value={formState.email}
            onChange={handleChange}
            className="bg-gray-800 border-gray-700 focus:border-teal-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            name="company"
            placeholder="Acme Inc."
            required
            value={formState.company}
            onChange={handleChange}
            className="bg-gray-800 border-gray-700 focus:border-teal-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="website">Website URL</Label>
          <Input
            id="website"
            name="website"
            type="url"
            placeholder="https://example.com"
            required
            value={formState.website}
            onChange={handleChange}
            className="bg-gray-800 border-gray-700 focus:border-teal-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cms">Website CMS</Label>
          <Select onValueChange={(value) => handleSelectChange("cms", value)} value={formState.cms}>
            <SelectTrigger className="bg-gray-800 border-gray-700">
              <SelectValue placeholder="Select CMS" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="wordpress">WordPress</SelectItem>
              <SelectItem value="shopify">Shopify</SelectItem>
              <SelectItem value="wix">Wix</SelectItem>
              <SelectItem value="webflow">Webflow</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="revenue">Annual Revenue</Label>
          <Select onValueChange={(value) => handleSelectChange("revenue", value)} value={formState.revenue}>
            <SelectTrigger className="bg-gray-800 border-gray-700">
              <SelectValue placeholder="Select Revenue Range" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="under100k">Under $100K</SelectItem>
              <SelectItem value="100k-500k">$100K - $500K</SelectItem>
              <SelectItem value="500k-1m">$500K - $1M</SelectItem>
              <SelectItem value="1m-5m">$1M - $5M</SelectItem>
              <SelectItem value="5m-10m">$5M - $10M</SelectItem>
              <SelectItem value="10m+">$10M+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us more about your website and SEO goals..."
          rows={4}
          value={formState.message}
          onChange={handleChange}
          className="bg-gray-800 border-gray-700 focus:border-teal-500"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6 text-base"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Get My 100 Free Internal Links"}
      </Button>

      <p className="text-sm text-gray-400 text-center">
        By submitting this form, you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  )
}
