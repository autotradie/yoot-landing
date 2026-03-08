'use client'

import Script from 'next/script'

export default function EmailCapture() {
  return (
    <div className="max-w-sm mx-auto">
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <form
              class="ml-block-form"
              action="https://assets.mailerlite.com/jsonp/2171114/forms/181340284882257729/subscribe"
              method="post"
              target="_blank"
              style="margin:0;"
            >
              <div style="display:flex;flex-direction:column;gap:0.75rem;">
                <input
                  type="email"
                  name="fields[email]"
                  placeholder="Email"
                  autocomplete="email"
                  required
                  style="width:100%;padding:0.75rem 1rem;border-radius:0.75rem;border:1px solid #DDE4E9;background:#F5F8FA;color:#0F2D4A;font-size:0.875rem;font-family:'DM Sans',system-ui,sans-serif;outline:none;"
                  onfocus="this.style.borderColor='#C47D0E'"
                  onblur="this.style.borderColor='#DDE4E9'"
                />
                <input type="hidden" name="ml-submit" value="1">
                <input type="hidden" name="anticsrf" value="true">
                <button
                  type="submit"
                  style="width:100%;padding:0.75rem 1rem;border-radius:0.75rem;background:#C47D0E;color:#ffffff;font-weight:600;font-size:0.875rem;font-family:'DM Sans',system-ui,sans-serif;border:none;cursor:pointer;"
                  onmouseover="this.style.opacity='0.9'"
                  onmouseout="this.style.opacity='1'"
                >
                  Get early access
                </button>
              </div>
            </form>
          `,
        }}
      />
      <p className="mt-3 text-xs text-yoot-muted">
        No spam. Just early access and founder pricing when we launch.
      </p>
      <Script
        src="https://groot.mailerlite.com/js/w/webforms.min.js?v95037e5bac78f29ed026832ca21a7c7b"
        strategy="lazyOnload"
      />
    </div>
  )
}