'use client'

import { Mail, MapPin, Phone, ArrowUp } from "lucide-react"

export default function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative w-full bg-black text-white" style={{ backgroundColor: 'rgb(23, 23, 23)' }}>
      {/* Main Footer Content */}
      <div className="container-premium section-spacing">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* About Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold uppercase tracking-wider heading-premium" style={{ color: 'rgb(222, 140, 4)' }}>
              About CMA
            </h3>
            <p className="text-sm text-white/80 leading-relaxed font-body">
              Located in Kochi, India, we offer comprehensive maritime education with modern facilities and experienced faculty across shipping, logistics, and marine disciplines.
            </p>
          </div>

          {/* Services Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold uppercase tracking-wider heading-premium" style={{ color: 'rgb(222, 140, 4)' }}>
              Services
            </h3>
            <ul className="space-y-2 text-sm text-white/80 font-body">
              <li className="hover:text-white transition-colors duration-200">Accreditations / Approvals</li>
              <li className="hover:text-white transition-colors duration-200">Advanced Computer Lab</li>
              <li className="hover:text-white transition-colors duration-200">Placement Guidelines</li>
              <li className="hover:text-white transition-colors duration-200">Partners & Supporting Organisations</li>
            </ul>
          </div>

          {/* Courses Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold uppercase tracking-wider heading-premium" style={{ color: 'rgb(222, 140, 4)' }}>
              DP Marine
            </h3>
            <ul className="space-y-2 text-sm text-white/80 font-body">
              <li className="hover:text-white transition-colors duration-200">Electrical & Electronics</li>
              <li className="hover:text-white transition-colors duration-200">Bridging Course</li>
              <li className="hover:text-white transition-colors duration-200">Ship Board Safety</li>
              <li className="hover:text-white transition-colors duration-200">Security Officer</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold uppercase tracking-wider heading-premium" style={{ color: 'rgb(222, 140, 4)' }}>
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-white/80 font-body">
              <li className="flex items-start gap-3 hover:text-white transition-colors duration-200">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Aditya Complex, Kochupally road, Thoppumpady, Kochi – 682005</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors duration-200">
                <Phone size={18} />
                <a href="tel:+914842234500">+91 484 2234500</a>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors duration-200">
                <Mail size={18} />
                <a href="mailto:cochinmaritime@gmail.com">cochinmaritime@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-white/60 font-body uppercase tracking-wider">
            © 2025 Cochin Maritime Academy. All Rights Reserved
          </p>
          
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full border-2 p-2 transition-all duration-300 ease-out hover:scale-110"
            style={{ borderColor: 'rgb(0, 152, 183)' }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} style={{ color: 'rgb(0, 152, 183)' }} />
            <span className="text-xs font-semibold uppercase tracking-wider text-white/80 group-hover:text-white" style={{ color: 'rgb(0, 152, 183)' }}>
              Back Top
            </span>
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/60">Follow Us</span>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-200 hover:border-cyan-500 hover:scale-110"
                style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <span className="text-xs font-bold" style={{ color: 'rgb(0, 152, 183)' }}>f</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-200 hover:border-cyan-500 hover:scale-110"
                style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <span className="text-xs font-bold" style={{ color: 'rgb(0, 152, 183)' }}>i</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-200 hover:border-cyan-500 hover:scale-110"
                style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <span className="text-xs font-bold" style={{ color: 'rgb(0, 152, 183)' }}>in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
