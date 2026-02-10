import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Softvic - Victor Opawumi | Web & Mobile App Developer',
  description: 'Portfolio of Victor Opawumi, Frontend Engineer specializing in React.js, Next.js, Laravel, Kotlin, and modern web & mobile technologies. Based in Lagos, Nigeria.',
  keywords: ['Victor Opawumi', 'Softvic', 'Frontend Developer', 'Web Developer', 'Mobile App Developer', 'React.js', 'Next.js', 'Laravel', 'Kotlin', 'TypeScript', 'Portfolio', 'Lagos Nigeria'],
  authors: [{ name: 'Victor Opawumi' }],
  creator: 'Victor Opawumi',
  publisher: 'Victor Opawumi',
  metadataBase: new URL('https://softvic.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://softvic.vercel.app',
    title: 'Softvic - Victor Opawumi | Web & Mobile App Developer',
    description: 'Portfolio of Victor Opawumi, Frontend Engineer specializing in React.js, Next.js, Laravel, Kotlin, and modern web & mobile technologies.',
    siteName: 'Softvic Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Softvic - Victor Opawumi | Web & Mobile App Developer',
    description: 'Portfolio of Victor Opawumi, Frontend Engineer specializing in React.js, Next.js, Laravel, Kotlin, and modern web & mobile technologies.',
    creator: '@Ayanvictor2',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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

