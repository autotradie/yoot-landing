import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Free resources for solo tradies — templates, checklists and tools.',
  robots: { index: false },
}

export default function Resources() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
      <Link href="/" className="text-sm font-bold text-yoot-navy hover:text-yoot-amber transition-colors">
        YOOT
      </Link>
      <h1 className="text-3xl font-bold text-yoot-navy mt-8 mb-4">Resources</h1>
      <div className="bg-white rounded-2xl border border-yoot-border shadow-sm p-8 text-center">
        <p className="text-yoot-navy font-medium">Coming soon.</p>
        <p className="text-sm text-yoot-slate mt-1">Free templates and tools for solo tradies.</p>
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="text-sm text-yoot-amber font-semibold hover:text-yoot-navy transition-colors">
          &larr; Back to YOOT
        </Link>
      </div>
    </main>
  )
}
