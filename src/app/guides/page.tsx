import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guides',
  description: 'In-depth guides for running a trade business.',
  robots: { index: false },
}

export default function Guides() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
      <Link href="/" className="text-sm font-bold text-yoot-navy hover:text-yoot-amber transition-colors">
        YOOT
      </Link>
      <h1 className="text-3xl font-bold text-yoot-navy mt-8 mb-4">Guides</h1>
      <div className="bg-white rounded-2xl border border-yoot-border shadow-sm p-8 text-center">
        <p className="text-yoot-navy font-medium">Coming soon.</p>
        <p className="text-sm text-yoot-slate mt-1">In-depth guides for running a trade business.</p>
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="text-sm text-yoot-amber font-semibold hover:text-yoot-navy transition-colors">
          &larr; Back to YOOT
        </Link>
      </div>
    </main>
  )
}
