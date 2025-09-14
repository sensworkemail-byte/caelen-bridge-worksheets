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
