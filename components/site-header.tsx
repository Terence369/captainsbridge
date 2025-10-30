"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const nav = [
  { href: "/", label: "HOME" },
  { href: "/courses", label: "COURSES" },
  { href: "/value-added-courses", label: "VALUE ADDED" },
  { href: "/facilities", label: "FACILITIES" },
  { href: "/certification", label: "CERTIFICATION" },
  { href: "/contact", label: "CONTACT" },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black text-white transition-all duration-300 ease-in-out">
      <div className="container-premium flex h-24 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group relative z-10 flex items-center gap-3 transition-transform duration-500 ease-in-out hover:scale-110">
          <img 
            src="/images/logo.png" 
            alt="Cochin Maritime Academy" 
            className="h-12 w-12 transition-all duration-300"
          />
          <span className="hidden text-xs font-semibold tracking-widest uppercase sm:block font-display" style={{ color: 'rgb(0, 152, 183)' }}>
            Cochin Maritime
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-xs font-medium transition-all duration-200 ease-out uppercase font-body tracking-wider group ${
                pathname === item.href ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {item.label}
              <span 
                className={`absolute bottom-0 left-1/2 h-0.5 transition-all duration-300 ease-out transform -translate-x-1/2 ${
                  pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
                style={{ backgroundColor: 'rgb(0, 152, 183)' }}
              />
            </Link>
          ))}
        </nav>

        {/* Apply Button */}
        <Link href="/apply" className="hidden lg:block">
          <button
            className="relative overflow-hidden rounded-lg px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ease-out border-2 hover:scale-105"
            style={{
              borderColor: 'rgb(0, 152, 183)',
              color: 'rgb(0, 152, 183)',
            }}
          >
            <span className="relative z-10 block">Apply Now</span>
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-10"
              style={{ backgroundColor: 'rgb(89, 220, 255)' }}
            />
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="rounded-lg p-2 transition-all duration-200 lg:hidden hover:bg-white/10" 
          aria-label="Toggle Menu"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-sm lg:hidden">
          <nav className="container-premium grid gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wide transition-all duration-200 ${
                  pathname === item.href 
                    ? 'bg-white/10 text-white' 
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/apply" onClick={() => setOpen(false)} className="mt-3">
              <button
                className="w-full rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgb(0, 152, 183)',
                  color: 'white',
                }}
              >
                Apply Now
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
