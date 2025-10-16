"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const whatsappNumber = "+919876543210" // Replace with your actual WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5F] text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}
