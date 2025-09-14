"use client"

import { CreditCard, Mail, QrCode, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const PaymentsPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 h-[70px] md:h-[70px] sm:h-[60px] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="block">
              <img src="/caelen_bridge_logo_white_bg.png" alt="Caelen Bridge" className="h-48 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors">
                About
              </Link>
              <Link href="/services" className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Phone Number */}
              <div className="text-[#1A3D5D] hover:text-[#0f2a42] transition-colors flex items-center mr-2">
                <Phone className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">0800 654 6848</span>
              </div>

              {/* Exit Button */}
              <Link
                href="/"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Close and return to Home"
              >
                <X className="h-6 w-6 text-[#1A3D5D]" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className={`${inter.className} text-4xl md:text-5xl font-bold text-[#1A3D5D] mb-6 text-balance`}>
              Secure Payment Options
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Pay online by card or request an invoice.
            </p>
          </div>

          {/* Payment Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Card Payment */}
            <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <CreditCard className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Card Payment</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Pay securely by debit or credit card. You choose the amount.
              </p>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full w-full mb-4 shadow-md transition-all duration-300"
                onClick={() => {
                  scrollToTop()
                  window.open("https://pay.sumup.com/b2c/QYQXVP5Y", "_blank")
                }}
              >
                Pay Now
              </Button>
            </div>

            {/* Request Invoice */}
            <div className="bg-purple-50 border-2 border-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Mail className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Request Invoice</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We'll email you a detailed invoice with a secure Pay button.
              </p>
              <Link
                href="/contact-form?type=invoice"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full w-full shadow-md transition-all duration-300 inline-block text-center"
              >
                Request Invoice
              </Link>
              <p className="text-sm text-gray-600 mt-3 text-center">
                Or call us at <span className="font-semibold">0800 654 6848</span>
              </p>
            </div>

            {/* QR Payment */}
            <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <QrCode className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Scan to Pay</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">Scan this QR code to open the secure checkout.</p>
              <div className="flex justify-center">
                <img src="/pay-now-qr.png" alt="Payment QR Code" className="w-32 h-32 border rounded-lg" />
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-[#1A3D5D] mb-6">Payment Security</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#1A3D5D] mr-2">•</span>
                All card payments are processed through SumUp (PCI-compliant, encrypted).
              </li>
              <li className="flex items-start">
                <span className="text-[#1A3D5D] mr-2">•</span>
                We never store your card details.
              </li>
              <li className="flex items-start">
                <span className="text-[#1A3D5D] mr-2">•</span>
                Transactions are protected by industry-standard security.
              </li>
              <li className="flex items-start">
                <span className="text-[#1A3D5D] mr-2">•</span>
                Receipts are issued automatically for all card payments.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img src="/caelen_bridge_logo_white_bg.png" alt="Caelen Bridge" className="h-24 w-auto mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional, confidential support for individuals and families affected by addiction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-[#1A3D5D] mb-3">Contact</h4>
              <p className="text-gray-600">0800 654 6848</p>
              <p className="text-gray-600">contact@caelen.co.uk</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1A3D5D] mb-3">Services</h4>
              <div className="space-y-1">
                <Link
                  href="/services/individual-support"
                  className="block text-gray-600 hover:text-[#0f2a42] transition-colors"
                >
                  Individual Support
                </Link>
                <Link
                  href="/services/family-support"
                  className="block text-gray-600 hover:text-[#0f2a42] transition-colors"
                >
                  Family Support
                </Link>
                <Link
                  href="/services/community-detox"
                  className="block text-gray-600 hover:text-[#0f2a42] transition-colors"
                >
                  Alcohol Home Detox
                </Link>
                <Link href="/services/training" className="block text-gray-600 hover:text-[#0f2a42] transition-colors">
                  Training
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[#1A3D5D] mb-3">Information</h4>
              <div className="space-y-1">
                <Link href="/about" className="block text-gray-600 hover:text-[#0f2a42] transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="block text-gray-600 hover:text-[#0f2a42] transition-colors">
                  Contact
                </Link>
                <Link href="/payments" className="block text-gray-600 hover:text-[#0f2a42] transition-colors">
                  Payments
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              © 2025 Caelen Bridge. All rights reserved. | We aim to respond within 24 hours during business days.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PaymentsPage
