"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"
import { VideoBackground } from "@/components/video-background"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const [message, setMessage] = useState("")

  useEffect(() => {
    const msgParam = searchParams.get("message")
    if (msgParam) {
      setMessage(decodeURIComponent(msgParam))
    }
  }, [searchParams])

  return (
    <div>
      <section className="relative h-[220px] md:h-[300px]">
        <VideoBackground
          src="https://videos.pexels.com/video-files/3041265/3041265-preview-0.45s_LOlLWkH.mp4"
          fallbackImage="/images/home-hero.jpg"
        />
        <div className="absolute inset-0 grid place-items-center bg-[#8B2332]/50">
          <h1 className="text-center text-3xl font-bold text-white md:text-4xl">Contact</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-[#8B2332]">Get in touch</h2>
          <p className="mb-6 text-sm leading-relaxed text-neutral-700">
            Have questions? We're here to help you start your maritime career.
          </p>

          <div className="space-y-5 text-sm text-neutral-700">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#8B2332]" />
              Aditya Complex, Kochupally road, Next to Anjali Marriage hall, Thoppumpady, Kochi – 682005
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#8B2332]" /> +91 484 2234500 &nbsp; / &nbsp; +91 8484545501
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[#8B2332]" /> cochinmaritime@gmail.com
            </div>
          </div>
        </div>

        <form className="space-y-4 rounded border p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <Input placeholder="Full name *" required />
            <Input type="email" placeholder="Email *" required />
          </div>
          <Input type="tel" placeholder="Phone *" required />
          <Input placeholder="Course of interest" />
          <Textarea rows={5} placeholder="Message" />
          <Button className="w-full bg-[#8B2332] text-white hover:bg-[#6B1B2A]">Send Message</Button>
        </form>
      </section>
    </div>
  )
}
