'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '@/lib/site-data'
import { cn } from '@/lib/utils'

function ResumeButton({ className }: { className?: string }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors'

  if (!site.resumeUrl) {
    return (
      <span
        className={cn(base, 'border border-dashed border-border text-muted-foreground', className)}
        title="Add your resume link in lib/site-data.ts"
      >
        View Resume
        <span className="ml-1.5 text-xs opacity-70">(link soon)</span>
      </span>
    )
  }

  return (
    <a
      href={site.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        base,
        'bg-foreground text-background hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        className,
      )}
    >
      View Resume
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20"
      >
        <a
          href="#top"
          className="font-serif text-xl tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          onClick={() => setOpen(false)}
        >
          Jericho Castillo<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <ResumeButton />
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border px-6 pb-8 pt-4 md:hidden"
      >
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-4 font-serif text-2xl"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ResumeButton className="mt-6 w-full py-3" />
      </div>
    </header>
  )
}
