"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"

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

  const leftNav = nav.slice(0, 3)
  const rightNav = nav.slice(3)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-white text-gray-800 transition-all duration-300 ease-in-out border-light-color">
      <div className="relative flex items-center justify-between" style={{ height: "134px", maxWidth: "1652px", width: "100%", margin: "0 auto", padding: "0 29px 0 80px" }}>
        {/* Left navigation (desktop) */}
        <nav className="hidden lg:flex items-center gap-10">
          {leftNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-xs font-medium transition-colors duration-200 ease-out uppercase font-body tracking-wider group ${
                pathname === item.href ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-1/2 h-px transition-all duration-300 ease-out transform -translate-x-1/2 bg-cyan ${
                  pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Centered Logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <Link href="/" className="group relative flex flex-col items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F84749e18bca64bd7a57af62d04439b13%2Fa867cc2fa9c64655859d3f65ac1500c0"
              alt="Cochin Maritime Academy"
              className="h-24 w-24 transition-all duration-300"
            />
            <span className="block text-sm font-semibold tracking-widest uppercase font-display text-primary-cyan" style={{ fontWeight: "600" }}>
              <span style={{ color: "rgb(157, 57, 57)" }}>SNEFF INDIA</span>
            </span>
          </Link>
        </div>

        {/* Right navigation and Apply (desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-10">
            {rightNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-xs font-medium transition-colors duration-200 ease-out uppercase font-body tracking-wider group ${
                  pathname === item.href ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 h-px transition-all duration-300 ease-out transform -translate-x-1/2 bg-cyan ${
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          <Link href="/apply" className="hidden lg:block">
            <button className="relative overflow-hidden rounded-sm btn-outline-cyan text-xs">
              <span className="relative z-10 block">Apply Now</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-md p-2 transition-colors duration-200 lg:hidden hover:bg-gray-100 text-dark"
          aria-label="Toggle Menu"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t bg-white lg:hidden border-light-color">
          <nav className="container-premium grid gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors duration-200 ${
                  pathname === item.href
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/apply" onClick={() => setOpen(false)} className="mt-3">
              <button className="w-full rounded-md px-4 py-3 text-sm font-semibold uppercase tracking-widest transition-colors duration-300 text-white bg-cyan hover:bg-cyan/90">
                Apply Now
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
