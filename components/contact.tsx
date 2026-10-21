'use client'

import { useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'
import { OptionalLink } from '@/components/optional-link'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site-data'

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-border"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-[radial-gradient(ellipse_at_bottom,oklch(0.86_0.13_205/0.12),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-40">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            <span className="text-primary">05</span>
            <span aria-hidden="true" className="h-px w-8 bg-border" />
            Contact
          </p>
          <h2
            id="contact-heading"
            className="max-w-4xl text-balance font-serif text-5xl leading-[0.98] tracking-tight md:text-8xl"
          >
            {"Let's work"} <span className="italic text-muted-foreground">together.</span>
          </h2>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {"I'm open to internship opportunities in software engineering and full-stack web development. The best way to reach me is by email."}
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-6 py-4 text-base font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Mail aria-hidden="true" className="size-5" />
            {site.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-4 text-sm transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {copied ? <Check aria-hidden="true" className="size-4" /> : <Copy aria-hidden="true" className="size-4" />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
          <span role="status" className="sr-only">
            {copied ? 'Email address copied to clipboard' : ''}
          </span>
        </Reveal>

        <Reveal delay={250} className="mt-6 flex flex-wrap gap-3">
          <OptionalLink href={site.linkedinUrl} label="LinkedIn" placeholder="LinkedIn — link coming soon" />
          <OptionalLink href={site.githubUrl} label="GitHub" placeholder="GitHub — link coming soon" />
        </Reveal>
      </div>
    </section>
  )
}
