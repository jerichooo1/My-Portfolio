import { site } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-serif text-lg text-foreground">{site.name}</span>
        </p>
        <p className="text-pretty">Thank you for visiting — I look forward to building and learning with your team.</p>
        <a href="#top" className="transition-colors hover:text-foreground">
          Back to top
        </a>
      </div>
    </footer>
  )
}
