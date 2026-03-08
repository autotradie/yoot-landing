import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto text-center flex flex-col justify-center">
      <h1 className="text-5xl font-bold text-yoot-navy">404</h1>
      <p className="mt-4 text-base text-yoot-slate">
        Nothing here. Might have been moved, might never have existed.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="text-sm text-yoot-amber font-semibold hover:text-yoot-navy transition-colors"
        >
          &larr; Back to YOOT
        </Link>
      </div>
    </main>
  )
}
