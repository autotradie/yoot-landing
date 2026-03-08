import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'
import EmailCapture from '@/components/EmailCapture'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return { title: 'Post not found' }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://yootfirst.app/blog/${slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `https://yootfirst.app/blog/${slug}`,
      publishedTime: post.date,
      siteName: 'YOOT',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'YOOT',
      url: 'https://yootfirst.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'YOOT',
      url: 'https://yootfirst.app',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://yootfirst.app/blog/${slug}`,
    },
    keywords: post.keywords.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
        <Link
          href="/"
          className="text-sm font-bold text-yoot-navy hover:text-yoot-amber transition-colors"
        >
          YOOT
        </Link>

        <article className="mt-8">
          <div className="mb-8">
            <time className="text-xs font-mono text-yoot-muted">{post.date}</time>
            <h1 className="text-3xl font-bold text-yoot-navy mt-2 mb-3">
              {post.title}
            </h1>
            <p className="text-base text-yoot-slate leading-relaxed">
              {post.description}
            </p>
          </div>

          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Email capture at bottom of every post */}
        <section className="mt-16 bg-white rounded-2xl border border-yoot-border shadow-sm p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-yoot-muted mb-4">
            Early access
          </p>
          <h2 className="text-lg font-bold text-yoot-navy mb-2">
            YOOT is coming soon.
          </h2>
          <p className="text-sm text-yoot-slate mb-6">
            Get early access and founder pricing.
          </p>
          <EmailCapture />
        </section>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="text-sm text-yoot-amber font-semibold hover:text-yoot-navy transition-colors"
          >
            &larr; All posts
          </Link>
        </div>
      </main>
    </>
  )
}
