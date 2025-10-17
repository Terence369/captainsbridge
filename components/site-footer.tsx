import { Mail, MapPin, Phone } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-[#081E35] py-12 text-white" style={{ backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets%2F1256c551aea145f5add95fd9566b369a%2F3916f8ef80084c61846a2936ce381c7c')", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-4" style={{ padding: "49px 16px 0" }}>
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
            <li>Accreditations / Approvals</li>
            <li>Advanced Computer Lab</li>
            <li>Placement Guidelines</li>
            <li>Partners & Supporting Organisations</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-[#D4AF37]">DP Marine Courses</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Electrical & Electronic Technicians</li>
            <li>Bridging Course</li>
            <li>Ship Board Safety</li>
            <li>Security Officer Course</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-[#D4AF37]">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1" />
              Aditya Complex, Kochupally road, Thoppumpady, Kochi – 682005
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 484 2234500
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> cochinmaritime@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/20 px-4 pt-6 text-center text-xs text-white/70 md:flex md:items-center md:justify-between">
        <p>COCHIN MARITIME ACADEMY © 2025All Rights Reserved</p>
      </div>
    </footer>
  )
}
