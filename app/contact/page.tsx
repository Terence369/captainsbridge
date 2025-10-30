"use client"

import { Suspense } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select } from "@/components/ui/select"
import { Mail, MapPin, Phone } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { courseTitles } from "@/lib/courses"

function ContactClient() {
  const searchParams = useSearchParams()
  const initialMessage = searchParams.get("message") || ""

  return (
    <div style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
      <div className="relative min-h-[50vh] w-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/7634228/pexels-photo-7634228.jpeg')" }}>
        <div className="h-[220px] w-full md:h-[300px] grid place-items-center relative z-10">
          <h1 className="text-center text-5xl font-black md:text-6xl leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'rgb(255, 255, 255)', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            Contact
          </h1>
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 md:py-16" style={{ backgroundColor: 'rgb(23, 23, 23)' }}>
        <div>
          <h2 className="mb-4 text-2xl font-bold uppercase" style={{ fontFamily: 'var(--font-display)', color: 'rgb(0, 152, 183)', letterSpacing: '0.8px' }}>
            Get in touch
          </h2>
          <p className="mb-6 text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255, 255, 255, 0.8)' }}>
            Have questions? We're here to help you start your maritime career.
          </p>

          <div className="space-y-5 text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            <div className="flex items-start gap-3">
              <MapPin className="flex-shrink-0 mt-1" style={{ color: 'rgb(0, 152, 183)' }} />
              <span>Aditya Complex, Kochupally road, Next to Anjali Marriage hall, Thoppumpady, Kochi – 682005</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="flex-shrink-0" style={{ color: 'rgb(0, 152, 183)' }} />
              <span>+91 484 2234500 &nbsp; / &nbsp; +91 8484545501</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="flex-shrink-0" style={{ color: 'rgb(0, 152, 183)' }} />
              <span>cochinmaritime@gmail.com</span>
            </div>
          </div>
        </div>

        <form className="space-y-4 rounded border p-6 shadow-sm" style={{ backgroundColor: 'rgb(15, 16, 16)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="grid gap-4 md:grid-cols-2">
            <Input 
              placeholder="Full name *" 
              required 
              style={{ backgroundColor: 'rgb(23, 23, 23)', color: 'rgb(255, 255, 255)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
            />
            <Input 
              type="email" 
              placeholder="Email *" 
              required 
              style={{ backgroundColor: 'rgb(23, 23, 23)', color: 'rgb(255, 255, 255)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
            />
          </div>
          <Input 
            type="tel" 
            placeholder="Phone *" 
            required 
            style={{ backgroundColor: 'rgb(23, 23, 23)', color: 'rgb(255, 255, 255)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
          />
          <Select 
            defaultValue=""
            style={{ backgroundColor: 'rgb(23, 23, 23)', color: 'rgb(255, 255, 255)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <option value="" disabled>Select a course</option>
            {courseTitles.map((title) => (
              <option key={title} value={title}>{title}</option>
            ))}
          </Select>
          <Textarea 
            rows={5} 
            placeholder="Message" 
            defaultValue={initialMessage}
            style={{ backgroundColor: 'rgb(23, 23, 23)', color: 'rgb(255, 255, 255)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
          />
          <button 
            type="submit"
            className="w-full font-semibold py-3 rounded transition-all uppercase"
            style={{ 
              backgroundColor: 'rgb(0, 152, 183)',
              color: 'rgb(255, 255, 255)',
              letterSpacing: '0.8px'
            }}
          >
            Send Message
          </button>
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
