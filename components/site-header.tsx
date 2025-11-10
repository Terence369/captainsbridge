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
      <div className="container-premium relative flex h-24 items-center justify-between">
        {/* Left navigation (desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {leftNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-xs font-medium transition-all duration-200 ease-out uppercase font-body tracking-wider group ${
                pathname === item.href ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-1/2 h-0.5 transition-all duration-300 ease-out transform -translate-x-1/2 bg-cyan ${
                  pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Centered Logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <Link href="/" className="group relative flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Cochin Maritime Academy"
              className="h-24 w-24 transition-all duration-300"
            />
            <span className="hidden text-xs font-semibold tracking-widest uppercase sm:block font-display text-primary-cyan">
              Cochin Maritime
            </span>
          </Link>
        </div>

        {/* Right navigation and Apply (desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-8">
            {rightNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-xs font-medium transition-all duration-200 ease-out uppercase font-body tracking-wider group ${
                  pathname === item.href ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 transition-all duration-300 ease-out transform -translate-x-1/2 bg-cyan ${
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          <Link href="/apply" className="hidden lg:block">
            <button className="relative overflow-hidden rounded-lg btn-outline-cyan text-xs">
              <span className="relative z-10 block">Apply Now</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 transition-all duration-200 lg:hidden hover:bg-gray-100 text-dark"
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
                className={`rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wide transition-all duration-200 ${
                  pathname === item.href
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/apply" onClick={() => setOpen(false)} className="mt-3">
              <button className="w-full rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-105 text-white bg-cyan">
                Apply Now
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
