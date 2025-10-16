"use client"

import { MessageCircle, Phone } from "lucide-react"

export function ContactBadge() {
  const phoneNumber = "+918484545501"
  const whatsappNumber = "8484545501"
  const message = "Hi, I'm interested in your maritime courses"

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Badge */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-pulse-badge flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Contact via WhatsApp"
        title="WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Phone Badge */}
      <a
        href={`tel:${phoneNumber}`}
        className="animate-pulse-badge flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Call us"
        title="Call Us"
      >
        <Phone size={28} />
      </a>
    </div>
  )
}
