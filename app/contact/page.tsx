"use client"

import { Suspense } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Mail, MapPin, Phone } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { courseTitles } from "@/lib/courses"

function ContactClient() {
  const searchParams = useSearchParams()
  const initialMessage = searchParams.get("message") || ""

  return (
    <div className="bg-page-white">
      <div className="relative min-h-[50vh] w-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: "url('https://images.pexels.com/photos/7634228/pexels-photo-7634228.jpeg')" }}>
        <div className="h-[220px] w-full md:h-[300px] grid place-items-center relative z-10">
          <h1 className="text-center text-5xl font-black md:text-6xl leading-tight heading-premium text-white">
            Contact
          </h1>
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 md:py-16 bg-page-white">
        <div>
          <h2 className="mb-4 text-2xl font-bold uppercase heading-premium text-primary-cyan">
            Get in touch
          </h2>
          <p className="mb-6 text-base leading-relaxed body-premium text-dark-secondary">
            Have questions? We're here to help you start your maritime career.
          </p>

          <div className="space-y-5 text-base text-dark-secondary">
            <div className="flex items-start gap-3">
              <MapPin className="flex-shrink-0 mt-1 text-primary-cyan" />
              <span>Aditya Complex, Kochupally road, Next to Anjali Marriage hall, Thoppumpady, Kochi – 682005</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="flex-shrink-0 text-primary-cyan" />
              <span>+91 484 2234500 &nbsp; / &nbsp; +91 8484545501</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="flex-shrink-0 text-primary-cyan" />
              <span>cochinmaritime@gmail.com</span>
            </div>
          </div>
        </div>

        <form className="space-y-4 rounded border p-6 shadow-sm bg-white border-light-color">
          <div className="grid gap-4 md:grid-cols-2">
            <Input placeholder="Full name *" required className="border rounded bg-white text-gray-800" />
            <Input type="email" placeholder="Email *" required className="border rounded bg-white text-gray-800" />
          </div>
          <Input type="tel" placeholder="Phone *" required className="border rounded bg-white text-gray-800" />
          <Select defaultValue="" className="border rounded bg-white text-gray-800">
            <option value="" disabled>Select a course</option>
            {courseTitles.map((title) => (
              <option key={title} value={title}>{title}</option>
            ))}
          </Select>
          <Textarea rows={5} placeholder="Message" defaultValue={initialMessage} className="border rounded bg-white text-gray-800" />
          <button type="submit" className="w-full btn-primary">Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactClient />
    </Suspense>
  )
}
