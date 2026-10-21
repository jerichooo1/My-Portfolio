import { Award, BookOpen, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { courses, education, honors } from '@/lib/site-data'

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="mx-auto max-w-6xl px-6 py-24 md:py-36"
    >
      <SectionHeading
        id="education"
        index="04"
        eyebrow="Education & Recognition"
        title={
          <>
            Where I study, <span className="italic text-muted-foreground">and what I keep learning.</span>
          </>
        }
      />

      <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-background p-6 md:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-primary/10 blur-3xl"
        />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <GraduationCap aria-hidden="true" className="mb-6 size-6 text-primary" />
            <h3 className="text-balance font-serif text-3xl leading-tight md:text-4xl">{education.degree}</h3>
            <p className="mt-2 text-muted-foreground">{education.specialization}</p>
            <p className="mt-1 text-foreground">{education.school}</p>
          </div>
          <p className="shrink-0 rounded-full border border-primary/40 px-4 py-2 text-sm text-primary">
            {education.expected}
          </p>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2 md:gap-8">
        <Reveal className="rounded-2xl border border-border p-6 md:p-10">
          <div className="mb-6 flex items-center gap-3">
            <BookOpen aria-hidden="true" className="size-5 text-primary" />
            <h3 className="font-serif text-2xl">LinkedIn Learning</h3>
          </div>
          <ul className="divide-y divide-border">
            {courses.map((course) => (
              <li key={course} className="py-3 text-pretty leading-relaxed text-muted-foreground">
                {course}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="rounded-2xl border border-border p-6 md:p-10">
          <div className="mb-2 flex items-center gap-3">
            <Award aria-hidden="true" className="size-5 text-primary" />
            <h3 className="font-serif text-2xl">First Honor Recognition</h3>
          </div>
          <p className="mb-6 text-sm text-muted-foreground">CODABILITY, NU Fairview</p>
          <ul className="space-y-4">
            {honors.map((honor) => (
              <li
                key={honor.year}
                className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card/50 px-5 py-4"
              >
                <div>
                  <p className="font-medium">{honor.label}</p>
                  <p className="text-sm text-muted-foreground">{honor.detail}</p>
                </div>
                <span className="font-serif text-3xl text-primary">{honor.year}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
