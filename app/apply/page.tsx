"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { courses } from "@/lib/courses"

export default function ApplyPage() {
  return (
    <div>
      <div className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-center text-3xl font-bold text-black md:text-4xl">Apply Now</h1>
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h2 className="mb-6 text-center text-2xl font-semibold text-[#0B2A4A]">Application Form</h2>
        <form className="space-y-4 rounded border p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <Input placeholder="First name *" required />
            <Input placeholder="Last name *" required />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Input type="email" placeholder="Email *" required />
            <Input type="tel" placeholder="Phone *" required />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#0B2A4A]">Course applying for *</label>
            <select required className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]">
              <option value="">Select a course</option>
              {courses.map((c, i) => (
                <option key={i} value={c.title}>{c.title}</option>
              ))}
            </select>
          </div>

          <Textarea rows={5} placeholder="Briefly tell us about your interest" />
          <Button className="w-full bg-[#0B2A4A] text-white hover:bg-[#081E35]">Submit Application</Button>
        </form>
        <p className="mt-4 text-center text-xs text-neutral-600">
          By submitting, you agree to be contacted with course details and schedules.
        </p>
      </section>
    </div>
  )
}
