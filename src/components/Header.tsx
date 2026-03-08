import Link from 'next/link'

export default function Header() {
  return (
    <header className="px-6 py-4 max-w-2xl mx-auto flex items-center justify-between">
      <Link href="/" className="text-lg font-bold text-yoot-navy hover:text-yoot-amber transition-colors">
        YOOT
      </Link>
      <Link href="/blog" className="text-sm text-yoot-slate hover:text-yoot-navy transition-colors">
        Blog
      </Link>
    </header>
  )
}