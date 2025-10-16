"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { VideoBackground } from "@/components/video-background"

export default function ApplyPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    courseApplying: "",
    interest: "",
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      console.log("Application form submitted with data:", formData)
      setFormSubmitted(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        courseApplying: "",
        interest: "",
      })
      setTimeout(() => setFormSubmitted(false), 3000)
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }
  return (
    <div>
      <section className="relative h-[220px] md:h-[300px]">
        <VideoBackground
          fallbackImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
        />
        <div className="absolute inset-0 grid place-items-center bg-[#8B2332]/50">
          <h1 className="text-center text-3xl font-bold text-white md:text-4xl">Apply Now</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h2 className="mb-6 text-center text-2xl font-semibold text-[#8B2332]">Application Form</h2>
        <form className="space-y-4 rounded border p-6 shadow-sm" onSubmit={handleFormSubmit}>
          {formSubmitted && (
            <div className="p-3 bg-green-100 text-green-700 rounded">
              Application submitted successfully! We'll review your application and get back to you soon.
            </div>
          )}
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              name="firstName"
              placeholder="First name *"
              value={formData.firstName}
              onChange={handleFormChange}
              required
            />
            <Input
              name="lastName"
              placeholder="Last name *"
              value={formData.lastName}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleFormChange}
              required
            />
          </div>
          <Input
            name="courseApplying"
            placeholder="Course applying for *"
            value={formData.courseApplying}
            onChange={handleFormChange}
            required
          />
          <Textarea
            name="interest"
            rows={5}
            placeholder="Briefly tell us about your interest"
            value={formData.interest}
            onChange={handleFormChange}
          />
          <Button type="submit" className="w-full bg-[#8B2332] text-white hover:bg-[#6B1B2A]">
            Submit Application
          </Button>
        </form>
        <p className="mt-4 text-center text-xs text-neutral-600">
          By submitting, you agree to be contacted with course details and schedules.
        </p>
      </section>
    </div>
  )
}
