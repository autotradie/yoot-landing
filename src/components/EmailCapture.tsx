'use client'

{/* 
  EMAIL CAPTURE COMPONENT
  
  Replace the placeholder form below with your ConvertKit (Kit) form embed.
  
  Steps:
  1. Sign up at kit.com (free up to 1,000 subscribers)
  2. Create a form with fields: First Name, Email, Trade (dropdown)
  3. Copy the HTML embed code
  4. Replace the placeholder <form> below with the Kit embed
  
  The Kit embed will handle all form submission, subscriber storage,
  and lead magnet delivery. No backend code needed.
*/}

export default function EmailCapture() {
  return (
    <div className="max-w-sm mx-auto">
      {/* 
        REPLACE THIS ENTIRE <form> BLOCK WITH YOUR CONVERTKIT EMBED CODE
        The styling below is a visual placeholder so the page looks complete.
      */}
      <form
        action="#"
        method="POST"
        className="space-y-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="First name"
          className="w-full px-4 py-3 rounded-xl border border-yoot-border bg-yoot-surface text-yoot-navy placeholder:text-yoot-muted text-sm focus:outline-none focus:border-yoot-amber transition-colors"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-xl border border-yoot-border bg-yoot-surface text-yoot-navy placeholder:text-yoot-muted text-sm focus:outline-none focus:border-yoot-amber transition-colors"
        />
        <select
          className="w-full px-4 py-3 rounded-xl border border-yoot-border bg-yoot-surface text-yoot-navy text-sm focus:outline-none focus:border-yoot-amber transition-colors"
          defaultValue=""
        >
          <option value="" disabled>What trade?</option>
          <option value="plumber">Plumber</option>
          <option value="electrician">Electrician</option>
          <option value="builder">Builder</option>
          <option value="other">Other tradie</option>
        </select>
        <button
          type="submit"
          className="w-full px-4 py-3 rounded-xl bg-yoot-amber text-white font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Get early access
        </button>
      </form>
      <p className="mt-3 text-xs text-yoot-muted">
        No spam. Just early access and founder pricing when we launch.
      </p>
    </div>
  )
}
