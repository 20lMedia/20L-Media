import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '20L Media | Omnichannel Marketing Solutions',
  description: '20L Media specializes in omnichannel marketing solutions to help your business grow.',
  icons: {
    icon: '/logo-ico.ico',
  },
  generator: 'v0.dev',
  keywords: ['20L Media', 'Omnichannel marketing', 'digital marketing', 'marketing solutions'],
  openGraph: {
    title: '20L Media | Omnichannel Marketing Solutions',
    description: '20L Media specializes in omnichannel marketing solutions to help your business grow.',
    url: 'https://20lmedia.in/', // Updated with actual website URL
    siteName: '20L Media',
    images: [
      {
        url: '/logo.jpeg', // Using the logo.jpeg from the public directory
        width: 800,
        height: 600,
        alt: '20L Media - Omnichannel Marketing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '20L Media | Omnichannel Marketing Solutions',
    description: '20L Media specializes in omnichannel marketing solutions to help your business grow.',
    creator: '@yourtwitterhandle', // Remember to replace with your actual Twitter handle
    images: ['https://20lmedia.in/logo.jpeg'], // Updated with actual website URL and logo path
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
