"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft, Github } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#5865F2] rounded-lg flex items-center justify-center">
                <img
                  src="/discord.svg"
                  alt="Discord Logo"
                  className="w-5 h-5"
                />
              </div>
              <span className="text-xl font-bold">Discord Badge</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="https://rohan-sharma-portfolio.vercel.app/"
                target="_blank"
                className="text-slate-600 hover:text-slate-900 hidden sm:block"
              >
                Dev Portfolio
              </Link>
              <Link href="/blog" target="_blank" className="text-slate-600 hover:text-slate-900 hidden sm:block">
                Blog
              </Link>
              <Link href="https://github.com/RS-labhub/Discord-Live-Members-Count-Badge" className="text-slate-600 hover:text-slate-900">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 404 Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-12">
              <div className="space-y-6">
                {/* 404 Number */}
                <div className="text-8xl md:text-9xl font-bold text-[#5865F2] opacity-20">404</div>

                {/* Error Message */}
                <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Page Not Found</h1>
                  <p className="text-lg text-slate-600 max-w-md mx-auto">
                    Oops! The page you're looking for seems to have vanished into the digital void.
                  </p>
                </div>

                {/* Discord-themed illustration */}
                <div className="py-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#5865F2] to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <img
                      src="/discord.svg"
                      alt="Discord Logo"
                      className="w-12 h-12"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/">
                    <Button className="bg-[#5865F2] hover:bg-[#4752C4] w-full sm:w-auto">
                      <Home className="w-4 h-4 mr-2" />
                      Go Home
                    </Button>
                  </Link>
                  <Button variant="outline" onClick={() => window.history.back()} className="w-full sm:w-auto">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Go Back
                  </Button>
                </div>

                {/* Helpful Links */}
                <div className="pt-8 border-t border-slate-200">
                  <p className="text-sm text-slate-500 mb-4">Looking for something specific?</p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <Link href="/" className="text-[#5865F2] hover:underline">
                      Home
                    </Link>
                    <Link href="/documentation" className="text-[#5865F2] hover:underline">
                      Documentation
                    </Link>
                    <Link
                      href="https://rohan-sharma-portfolio.vercel.app/"
                      target="_blank"
                      className="text-[#5865F2] hover:underline"
                    >
                      Dev Portfolio
                    </Link>
                    <Link href="#" target="_blank" className="text-[#5865F2] hover:underline">
                      Blog
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
