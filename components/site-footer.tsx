import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-[#6B1B2A] py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-[#D4AF37]">Cochin Maritime Academy</h3>
          <p className="text-sm text-white/80">
            Located in Kochi, India, we offer comprehensive maritime education with modern facilities and experienced
            faculty across shipping, logistics, and marine disciplines.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-[#D4AF37]">Services & Facilities</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/facilities" className="hover:text-[#D4AF37] transition-colors">
                Accreditations / Approvals
              </Link>
            </li>
            <li>
              <Link href="/facilities" className="hover:text-[#D4AF37] transition-colors">
                Advanced Computer Lab
              </Link>
            </li>
            <li>
              <Link href="/facilities" className="hover:text-[#D4AF37] transition-colors">
                Placement Guidelines
              </Link>
            </li>
            <li>
              <Link href="/facilities" className="hover:text-[#D4AF37] transition-colors">
                Partners & Supporting Organisations
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-[#D4AF37]">DP Marine Courses</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/courses" className="hover:text-[#D4AF37] transition-colors">
                Electrical & Electronic Technicians
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-[#D4AF37] transition-colors">
                Bridging Course
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-[#D4AF37] transition-colors">
                Ship Board Safety
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-[#D4AF37] transition-colors">
                Security Officer Course
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-[#D4AF37]">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <span>Aditya Complex, Kochupally road, Thoppumpady, Kochi – 682005</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="flex-shrink-0" />
              <a href="tel:+914842234500" className="hover:text-[#D4AF37] transition-colors">
                +91 484 2234500
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="flex-shrink-0" />
              <a href="mailto:cochinmaritime@gmail.com" className="hover:text-[#D4AF37] transition-colors">
                cochinmaritime@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/20 px-4 pt-6 text-center text-xs text-white/70 md:flex md:items-center md:justify-between">
        <p>COCHIN MARITIME ACADEMY © 2017 All Rights Reserved</p>
        <p>Maintained by Red Falcon Services</p>
      </div>
    </footer>
  )
}
