import { ArrowDown, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[70vh] w-[120vw] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,oklch(0.86_0.13_205/0.16),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
        <div className="light-sweep absolute inset-y-[-20%] left-1/2 w-[40vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.95_0.014_85/0.04)_1px,transparent_1px)] bg-[size:12.5%_100%] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <p
          className="fade-up mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground"
          style={{ '--delay': '200ms' } as React.CSSProperties}
        >
          <span className="inline-flex items-center gap-2 text-primary">
            <span className="size-1.5 rounded-full bg-primary shadow-[0_0_12px_2px] shadow-primary/60" />
            Open to internships
          </span>
          <span aria-hidden="true" className="hidden h-px w-10 bg-border sm:block" />
          <span>NU Fairview · BSIT–MIT</span>
        </p>

        <h1
          id="hero-heading"
          className="title-in text-balance font-serif text-[clamp(3rem,10vw,8.5rem)] leading-[0.92] tracking-tight"
        >
          Jericho Antonio
          <br />
          <span className="italic text-foreground/80">O. Castillo</span>
        </h1>

        <div aria-hidden="true" className="horizon-in my-10 h-px w-full max-w-3xl bg-gradient-to-r from-primary/80 via-foreground/20 to-transparent" />

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <p
            className="fade-up max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
            style={{ '--delay': '700ms' } as React.CSSProperties}
          >
            A fourth-year Information Technology student and aspiring software developer, building
            toward a career in <span className="text-foreground">software engineering</span> and{' '}
            <span className="text-foreground">full-stack web development</span>. Currently seeking an
            internship.
          </p>

          <div
            className="fade-up flex flex-wrap gap-3 md:justify-end"
            style={{ '--delay': '900ms' } as React.CSSProperties}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              View Projects
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contact Me
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="fade-up mt-20 hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          style={{ '--delay': '1200ms' } as React.CSSProperties}
        >
          <ArrowDown aria-hidden="true" className="size-4" />
          Scroll
        </a>
      </div>
    </section>
  )
}
