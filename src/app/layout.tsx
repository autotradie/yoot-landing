import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: {
    default: 'YOOT — Software for tradies who work out of their ute',
    template: '%s | YOOT',
  },
  description: 'YOOT helps solo tradies manage jobs, quotes and invoices from their phone. Less admin. More work.',
  metadataBase: new URL('https://yootfirst.app'),
  verification: {
    google: 'rRX3Cb3DNyiV_nFTfduTtEmm-pWQDUg1YOMNCv-xVsA',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://yootfirst.app',
    siteName: 'YOOT',
    title: 'YOOT — Software for tradies who work out of their ute',
    description: 'YOOT helps solo tradies manage jobs, quotes and invoices from their phone. Less admin. More work.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YOOT — Software for tradies who work out of their ute',
    description: 'YOOT helps solo tradies manage jobs, quotes and invoices from their phone. Less admin. More work.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://yootfirst.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'YOOT',
              url: 'https://yootfirst.app',
              description: 'Software for tradies who work out of their ute.',
              sameAs: [
                'https://instagram.com/yootfirst',
                'https://www.facebook.com/profile.php?id=61587029948697',
                'https://www.linkedin.com/company/yootfirst/',
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  )
}