import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type OptionalLinkProps = {
  href: string
  label: string
  placeholder?: string
  className?: string
}

/**
 * Renders a real external link when `href` is set.
 * When `href` is empty, renders a clearly-marked placeholder instead of a fake URL.
 */
export function OptionalLink({ href, label, placeholder, className }: OptionalLinkProps) {
  if (!href) {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted-foreground',
          className,
        )}
      >
        {placeholder ?? `${label} — link coming soon`}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        className,
      )}
    >
      {label}
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}
