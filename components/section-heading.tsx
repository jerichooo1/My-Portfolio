import { Reveal } from '@/components/reveal'

type SectionHeadingProps = {
  id: string
  index: string
  eyebrow: string
  title: React.ReactNode
  intro?: string
}

export function SectionHeading({ id, index, eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
        <span className="text-primary">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-border" />
        {eyebrow}
      </p>
      <h2
        id={`${id}-heading`}
        className="max-w-3xl text-balance font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
    </Reveal>
  )
}
