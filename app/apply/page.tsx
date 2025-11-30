"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { courseTitles } from "@/lib/courses"

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    interest: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields')
      return
    }

    setIsLoading(true)

    const whatsappNumber = '919495145500'
    const message = `Hello, I am interested in applying for a course.\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse: ${formData.course || 'Not specified'}\n\nInterest: ${formData.interest || 'No additional details'}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappLink, '_blank')

    setFormData({ firstName: '', lastName: '', email: '', phone: '', course: '', interest: '' })
    setIsLoading(false)
  }

  return (
    <div className="bg-page-white min-h-screen">
      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="mb-6 text-center text-5xl font-black md:text-6xl leading-tight heading-premium text-primary-cyan">
          Apply Now
        </h1>
        <h2 className="mb-8 text-center text-2xl font-bold uppercase heading-premium text-accent-gold">
          Application Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 rounded border p-8 shadow-sm bg-white border-light-color">
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              name="firstName"
              placeholder="First name *"
              required
              className="border rounded bg-white text-gray-800"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              name="lastName"
              placeholder="Last name *"
              required
              className="border rounded bg-white text-gray-800"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              name="email"
              type="email"
              placeholder="Email *"
              required
              className="border rounded bg-white text-gray-800"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Phone *"
              required
              className="border rounded bg-white text-gray-800"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <Select
            name="course"
            required
            className="border rounded bg-white text-gray-800"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select course *</option>
            {courseTitles.map((title) => (
              <option key={title} value={title}>{title}</option>
            ))}
          </Select>
          <Textarea
            name="interest"
            rows={5}
            placeholder="Briefly tell us about your interest"
            className="border rounded bg-white text-gray-800"
            value={formData.interest}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Submit Application'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-dark-secondary">
          By submitting, you agree to be contacted with course details and schedules.
        </p>
      </section>
    </div>
  )
}
