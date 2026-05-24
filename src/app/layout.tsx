import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sports Hoagie',
  description: 'Philly sports served fresh. Hot takes, cold stats, and opinions stacked high.',
  openGraph: {
    title: 'Sports Hoagie',
    description: 'Philly sports served fresh. Hot takes, cold stats, and opinions stacked high.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}