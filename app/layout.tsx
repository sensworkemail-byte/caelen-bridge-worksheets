import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Caelen - Private Support for Substance Concerns",
  description: "Discreet, professional guidance for individuals and families navigating alcohol and drug challenges",
  generator: "v0.app",
  alternates: {
    canonical: "https://caelenbridge.co.uk",
  },
  verification: {
    google: "Xq6TGGy6-1koNe9B2NXQDZs_kg6ZIXRoTVBiR7zYV24",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.jpg", sizes: "16x16", type: "image/jpeg" },
      { url: "/favicon-32x32.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/jpeg" }],
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
