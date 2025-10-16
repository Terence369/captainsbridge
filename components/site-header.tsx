"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const nav = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/value-added-courses", label: "Value Added Courses" },
  { href: "/facilities", label: "Facilities" },
  { href: "/certification", label: "Certification" },
  { href: "/contact", label: "Contact" },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#8B2332] text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Cochin Maritime Academy" className="h-10 w-10 sm:h-12 sm:w-12" />
          <span className="hidden text-sm font-semibold tracking-wider sm:block">COCHIN MARITIME ACADEMY</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-[#D4AF37] ${
                pathname === item.href ? "text-[#D4AF37]" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/apply">
            <Button className="bg-[#D4AF37] text-[#8B2332] hover:bg-[#B8941F]">Apply Now</Button>
          </Link>
        </nav>

        <button className="rounded p-2 lg:hidden" aria-label="Toggle Menu" onClick={() => setOpen((s) => !s)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2 px-4 pb-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded px-3 py-3 text-sm font-medium hover:bg-white/10 ${
                  pathname === item.href ? "text-[#D4AF37]" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/apply" onClick={() => setOpen(false)}>
              <Button className="mt-2 w-full bg-[#D4AF37] text-[#8B2332] hover:bg-[#B8941F]">Apply Now</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
