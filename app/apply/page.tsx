"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select } from "@/components/ui/select"
import { courseTitles } from "@/lib/courses"

export default function ApplyPage() {
  return (
    <div style={{ backgroundColor: 'rgb(0, 0, 0)', minHeight: '100vh' }}>
      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="mb-6 text-center text-5xl font-black md:text-6xl leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'rgb(255, 255, 255)', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          Apply Now
        </h1>
        <h2 className="mb-8 text-center text-2xl font-bold uppercase" style={{ fontFamily: 'var(--font-display)', color: 'rgb(0, 152, 183)', letterSpacing: '0.8px' }}>
          Application Form
        </h2>
        <form className="space-y-4 rounded border p-8 shadow-sm" style={{ backgroundColor: 'rgb(23, 23, 23)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="grid gap-4 md:grid-cols-2">
            <Input 
              placeholder="First name *" 
              required 
              style={{ backgroundColor: 'rgb(15, 16, 16)', color: 'rgb(255, 255, 255)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
            />
            <Input 
              placeholder="Last name *" 
              required 
              style={{ backgroundColor: 'rgb(15, 16, 16)', color: 'rgb(255, 255, 255)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Input 
              type="email" 
              placeholder="Email *" 
              required 
              style={{ backgroundColor: 'rgb(15, 16, 16)', color: 'rgb(255, 255, 255)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
            />
            <Input 
              type="tel" 
              placeholder="Phone *" 
              required 
              style={{ backgroundColor: 'rgb(15, 16, 16)', color: 'rgb(255, 255, 255)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
            />
          </div>
          <Select 
            required 
            defaultValue=""
            style={{ backgroundColor: 'rgb(15, 16, 16)', color: 'rgb(255, 255, 255)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <option value="" disabled>Select course *</option>
            {courseTitles.map((title) => (
              <option key={title} value={title}>{title}</option>
            ))}
          </Select>
          <Textarea 
            rows={5} 
            placeholder="Briefly tell us about your interest" 
            style={{ backgroundColor: 'rgb(15, 16, 16)', color: 'rgb(255, 255, 255)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
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
            Submit Application
          </button>
        </form>
        <p className="mt-4 text-center text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
          By submitting, you agree to be contacted with course details and schedules.
        </p>
      </section>
    </div>
  )
}
