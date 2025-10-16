"use client"

import { useEffect } from "react"

export default function SafeFetchProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      const g = window as any
      if (g.__safeFetchPatched) return
      const nativeFetch = window.fetch.bind(window)
      g.__nativeFetch = nativeFetch

      window.fetch = async (...args: any[]) => {
        try {
          return await nativeFetch(...args)
        } catch (err) {
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

  return null
}
