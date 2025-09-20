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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Esenyel Irfan",
              jobTitle: "Accredited Practitioner",
              affiliation: {
                "@type": "Organization",
                name: "Addiction Professionals Directory",
                url: "https://www.addictionprofessionals.org.uk/",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
