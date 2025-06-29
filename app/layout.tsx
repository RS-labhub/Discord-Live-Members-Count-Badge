import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Discord Badge",
  description: "Add beautiful, real-time Discord member count badges to your GitHub README",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Discord Live Count',
    siteName: 'discord-live-members-count-bot',
    url: 'https://discord-live-members-count-badge.vercel.app/',
    description:
      'Add beautiful, real-time Discord member count badges to your GitHub README',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Discord Live Count Badge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Live Count Badge',
    description:
      'Add beautiful, real-time Discord member count badges to your GitHub README',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
