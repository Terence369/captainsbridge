import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { useEffect } from "react" // guard fetch to avoid external script interference (e.g. FullStory) on client-side

// Patch window.fetch early on the client to catch external analytics wrappers that can break Next's RSC fetch
function useSafeFetchPatch() {
  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      const g = window as any
      if (g.__safeFetchPatched) return
      const nativeFetch = window.fetch.bind(window)
      // Save original reference in case other scripts overwrite later
      g.__nativeFetch = nativeFetch

      window.fetch = async (...args: any[]) => {
        try {
          return await nativeFetch(...args)
        } catch (err) {
          // If an external provider (like FullStory) has a fallback native fetch, try it
          if (typeof g.__fs_native_fetch === "function") {
            return g.__fs_native_fetch(...args)
          }
          throw err
        }
      }

      g.__safeFetchPatched = true
    } catch (e) {
      // silent
    }
  }, [])
}
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cochin Maritime Academy - Premier Maritime Training Institute",
  description:
    "Located in South India, Kochi. Offering comprehensive maritime training courses for merchant navy, certifications, and placement support.",
  keywords: "maritime academy, merchant navy training, maritime courses, ship training, Kochi, maritime education",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Apply fetch safety patch on client
  useSafeFetchPatch()

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        <SiteHeader />
        <main className="min-h-[60vh]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
