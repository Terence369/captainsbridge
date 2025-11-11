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
          // If FullStory or other libs provide a native fetch fallback, try that
          if (typeof g.__fs_native_fetch === "function") {
            try {
              return await g.__fs_native_fetch(...args)
            } catch (e) {
              // fallback failed as well
            }
          }
          // swallow network errors that occur during HMR or telemetry to avoid noisy console
          // rethrow so callers expecting failures still receive it
          throw err
        }
      }

      // global handler to log and avoid uncaught promise rejection noise in dev overlay
      const onUnhandled = (ev: PromiseRejectionEvent) => {
        try {
          // Allow known benign network errors to be non-fatal
          const reason = ev.reason
          if (reason && typeof reason === 'object' && (reason.message && reason.message.includes('Failed to fetch'))) {
            // preventDefault to avoid dev overlay spamming
            ev.preventDefault()
            console.warn('Suppressed benign fetch error:', reason)
          }
        } catch (e) {
          // ignore
        }
      }

      window.addEventListener('unhandledrejection', onUnhandled)

      g.__safeFetchPatched = true

      return () => {
        window.removeEventListener('unhandledrejection', onUnhandled)
      }
    } catch (e) {
      // silent
    }
  }, [])

  return null
}
