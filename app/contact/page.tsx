"use client"

"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { courses } from "@/lib/courses"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const message = searchParams.get("message") || ""
  return (
    <div>
      <div className="relative min-h-[50vh] w-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url('https://images.pexels.com/photos/7634228/pexels-photo-7634228.jpeg')" }}>
        <div className="h-[220px] w-full md:h-[300px] grid place-items-center relative z-10">
          <h1 className="text-center text-3xl font-bold text-black md:text-4xl">Contact</h1>
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-[#0B2A4A]">Get in touch</h2>
          <p className="mb-6 text-sm leading-relaxed text-neutral-700">
            Have questions? We're here to help you start your maritime career.
          </p>

          <div className="space-y-5 text-sm text-neutral-700">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#0B2A4A]" />
              Aditya Complex, Kochupally road, Next to Anjali Marriage hall, Thoppumpady, Kochi – 682005
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#0B2A4A]" /> +91 484 2234500 &nbsp; / &nbsp; +91 8484545501
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[#0B2A4A]" /> cochinmaritime@gmail.com
            </div>
          </div>
        </div>

        <form className="space-y-4 rounded border p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <Input placeholder="Full name *" required />
            <Input type="email" placeholder="Email *" required />
          </div>
          <Input type="tel" placeholder="Phone *" required />
          <label className="mb-2 block text-sm font-medium text-[#0B2A4A]">Course of interest</label>
          <select className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]" aria-label="Course of interest">
            <option value="">Select a course</option>
            {courses.map((c, i) => (
              <option key={i} value={c.title}>{c.title}</option>
            ))}
          </select>
          <Textarea rows={5} placeholder="Message" defaultValue={message} />
          <Button className="w-full bg-[#0B2A4A] text-white hover:bg-[#081E35]">Send Message</Button>
        </form>
      </section>
    </div>
  )
}
