'use client'

import { useState } from 'react'
import Script from 'next/script'

export default function EmailCapture() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="max-w-sm mx-auto text-center">
        <p className="text-base font-bold text-yoot-navy">You're in.</p>
        <p className="mt-1 text-sm text-yoot-slate">
          We'll be in touch when YOOT is ready.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-sm mx-auto">
      <form
        action="https://assets.mailerlite.com/jsonp/2171114/forms/181340284882257729/subscribe"
        method="post"
        target="ml-hidden-iframe"
        onSubmit={() => setTimeout(() => {
          setSubmitted(true)
          window.gtag?.('event', 'generate_lead', {
            event_category: 'signup',
            event_label: 'early_access',
          })
        }, 500)}
        style={{ margin: 0 }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <input
            type="text"
            name="fields[name]"
            placeholder="First name"
            autoComplete="given-name"
            className="w-full px-4 py-3 rounded-xl border border-yoot-border bg-yoot-surface text-yoot-navy placeholder:text-yoot-muted text-sm focus:outline-none focus:border-yoot-amber transition-colors"
          />
          <input
            type="email"
            name="fields[email]"
            placeholder="Email"
            autoComplete="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-yoot-border bg-yoot-surface text-yoot-navy placeholder:text-yoot-muted text-sm focus:outline-none focus:border-yoot-amber transition-colors"
          />
          <select
            name="fields[trade]"
            defaultValue=""
            className="w-full px-4 py-3 rounded-xl border border-yoot-border bg-yoot-surface text-yoot-navy text-sm focus:outline-none focus:border-yoot-amber transition-colors"
          >
            <option value="" disabled>What trade?</option>
            <option value="Plumber">Plumber</option>
            <option value="Electrician">Electrician</option>
            <option value="Builder">Builder</option>
            <option value="Other">Other tradie</option>
          </select>
          <input type="hidden" name="ml-submit" value="1" />
          <input type="hidden" name="anticsrf" value="true" />
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-xl bg-yoot-amber text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Get early access
          </button>
        </div>
      </form>
      <p className="mt-3 text-xs text-yoot-muted">
        No spam. Just early access and founder pricing when we launch.
      </p>
      <iframe name="ml-hidden-iframe" style={{ display: 'none' }} />
      <Script
        src="https://groot.mailerlite.com/js/w/webforms.min.js?v95037e5bac78f29ed026832ca21a7c7b"
        strategy="lazyOnload"
      />
    </div>
  )
}