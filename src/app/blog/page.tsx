import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Practical guides for solo tradies on managing jobs, quotes, invoices and running a trade business.',
  alternates: {
    canonical: 'https://yootfirst.app/blog',
  },
  openGraph: {
    title: 'Blog | YOOT',
    description: 'Practical guides for solo tradies on managing jobs, quotes, invoices and running a trade business.',
    url: 'https://yootfirst.app/blog',
  },
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
      <Link
        href="/"
        className="text-sm font-bold text-yoot-navy hover:text-yoot-amber transition-colors"
      >
        YOOT
      </Link>

      <h1 className="text-3xl font-bold text-yoot-navy mt-8 mb-2">Blog</h1>
      <p className="text-base text-yoot-slate mb-10">
        Practical guides for tradies who run a business from their ute.
      </p>

      {posts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-yoot-border shadow-sm p-8 text-center">
          <p className="text-yoot-navy font-medium">First post coming soon.</p>
          <p className="text-sm text-yoot-slate mt-1">
            We are writing useful content for solo tradies. Check back shortly.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="bg-white rounded-2xl border border-yoot-border shadow-sm p-6 hover:border-yoot-amber transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <time className="text-xs font-mono text-yoot-muted">{post.date}</time>
                </div>
                <h2 className="text-lg font-bold text-yoot-navy group-hover:text-yoot-amber transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-yoot-slate mt-1 leading-relaxed">
                  {post.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-12 text-center">
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
