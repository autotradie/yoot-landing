import { Instagram, Facebook, Linkedin, ArrowRight, Phone, FileText, Receipt, FolderOpen } from 'lucide-react'
import EmailCapture from '@/components/EmailCapture'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 pt-20 pb-16 max-w-2xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-yoot-navy tracking-tight">
          YOOT
        </h1>
        <p className="mt-4 text-lg text-yoot-slate">
          Software for tradies who work out of their ute.
        </p>
        <p className="mt-2 text-sm font-mono text-yoot-amber tracking-wide uppercase">
          Before not after.
        </p>
        <p className="mt-8 text-base text-yoot-navy leading-relaxed max-w-lg mx-auto">
          YOOT helps solo tradies run jobs, quotes and invoices from their phone — without the admin chaos.
        </p>
      </section>

      {/* What YOOT Actually Does */}
      <section className="px-6 pb-16 max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border border-yoot-border shadow-sm p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-yoot-muted mb-4">
            What YOOT does
          </p>
          <h2 className="text-xl font-bold text-yoot-navy mb-4">
            The admin around the job. Handled.
          </h2>
          <ul className="space-y-3 text-base text-yoot-navy">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yoot-amber shrink-0" />
              Capture job details in seconds
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yoot-amber shrink-0" />
              Track jobs and customers in one place
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yoot-amber shrink-0" />
              Send quotes and turn them into invoices
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yoot-amber shrink-0" />
              Keep a record of photos and work completed
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yoot-amber shrink-0" />
              Get paid faster with payment links on every invoice
            </li>
          </ul>
          <p className="mt-6 text-sm text-yoot-slate">
            Everything organised. Nothing lost. Built for one person, one ute, one phone.
          </p>
        </div>
      </section>

      {/* How YOOT Works */}
      <section className="px-6 pb-16 max-w-2xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-yoot-muted mb-6 text-center">
          How it works
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <StepCard
            number={1}
            icon={<Phone className="w-5 h-5" />}
            title="Customer calls"
            description="Create a job card in seconds. Customer, address, details — done."
          />
          <StepCard
            number={2}
            icon={<FileText className="w-5 h-5" />}
            title="Send a quote"
            description="Build and send a quote from your phone. No laptop needed."
          />
          <StepCard
            number={3}
            icon={<FolderOpen className="w-5 h-5" />}
            title="Do the work"
            description="Photos, notes, timestamps. Everything captured as you go."
          />
          <StepCard
            number={4}
            icon={<Receipt className="w-5 h-5" />}
            title="Invoice and get paid"
            description="Turn the quote into an invoice. Send it with a payment link."
          />
        </div>
      </section>

      {/* Early Access */}
      <section className="px-6 pb-16 max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border border-yoot-border shadow-sm p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-yoot-muted mb-4">
            Early access
          </p>
          <h2 className="text-xl font-bold text-yoot-navy mb-2">
            YOOT is coming soon.
          </h2>
          <p className="text-base text-yoot-slate mb-8 max-w-md mx-auto">
            Built in Melbourne for solo tradies. Get early access and lock in founder pricing.
          </p>
          <EmailCapture />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 pb-12 max-w-2xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://instagram.com/yootfirst"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yoot-muted hover:text-yoot-navy transition-colors"
            aria-label="YOOT on Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61587029948697"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yoot-muted hover:text-yoot-navy transition-colors"
            aria-label="YOOT on Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/yootfirst/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yoot-muted hover:text-yoot-navy transition-colors"
            aria-label="YOOT on LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <p className="text-xs text-yoot-muted">
          &copy; {new Date().getFullYear()} YOOT. Melbourne, Australia.
        </p>
      </footer>
    </main>
  )
}

function StepCard({
  number,
  icon,
  title,
  description,
}: {
  number: number
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-white rounded-2xl border border-yoot-border shadow-sm p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-yoot-surface flex items-center justify-center text-yoot-amber">
          {icon}
        </div>
        <span className="text-xs font-mono text-yoot-muted">{String(number).padStart(2, '0')}</span>
      </div>
      <h3 className="text-base font-bold text-yoot-navy mb-1">{title}</h3>
      <p className="text-sm text-yoot-slate leading-relaxed">{description}</p>
    </div>
  )
}
