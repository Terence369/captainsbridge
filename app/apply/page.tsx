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
          src="https://videos.pexels.com/video-files/3041265/3041265-preview-0.45s_LOlLWkH.mp4"
          fallbackImage="/images/welcome-hero.jpg"
        />
        <div className="absolute inset-0 grid place-items-center bg-[#8B2332]/50">
          <h1 className="text-center text-3xl font-bold text-white md:text-4xl">Apply Now</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h2 className="mb-6 text-center text-2xl font-semibold text-[#8B2332]">Application Form</h2>
        <form className="space-y-4 rounded border p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <Input placeholder="First name *" required />
            <Input placeholder="Last name *" required />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Input type="email" placeholder="Email *" required />
            <Input type="tel" placeholder="Phone *" required />
          </div>
          <Input placeholder="Course applying for *" required />
          <Textarea rows={5} placeholder="Briefly tell us about your interest" />
          <Button className="w-full bg-[#8B2332] text-white hover:bg-[#6B1B2A]">Submit Application</Button>
        </form>
        <p className="mt-4 text-center text-xs text-neutral-600">
          By submitting, you agree to be contacted with course details and schedules.
        </p>
      </section>
    </div>
  )
}
