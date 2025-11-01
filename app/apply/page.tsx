"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { courseTitles } from "@/lib/courses"

export default function ApplyPage() {
  return (
    <div className="bg-page-white min-h-screen">
      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="mb-6 text-center text-5xl font-black md:text-6xl leading-tight heading-premium text-primary-cyan">
          Apply Now
        </h1>
        <h2 className="mb-8 text-center text-2xl font-bold uppercase heading-premium text-accent-gold">
          Application Form
        </h2>
        <form className="space-y-4 rounded border p-8 shadow-sm bg-white border-light-color">
          <div className="grid gap-4 md:grid-cols-2">
            <Input placeholder="First name *" required className="border rounded bg-white text-gray-800" />
            <Input placeholder="Last name *" required className="border rounded bg-white text-gray-800" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Input type="email" placeholder="Email *" required className="border rounded bg-white text-gray-800" />
            <Input type="tel" placeholder="Phone *" required className="border rounded bg-white text-gray-800" />
          </div>
          <Select required defaultValue="" className="border rounded bg-white text-gray-800">
            <option value="" disabled>Select course *</option>
            {courseTitles.map((title) => (
              <option key={title} value={title}>{title}</option>
            ))}
          </Select>
          <Textarea rows={5} placeholder="Briefly tell us about your interest" className="border rounded bg-white text-gray-800" />
          <button type="submit" className="w-full btn-primary">Submit Application</button>
        </form>
        <p className="mt-4 text-center text-sm text-dark-secondary">
          By submitting, you agree to be contacted with course details and schedules.
        </p>
      </section>
    </div>
  )
}
