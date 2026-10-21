import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/lib/site-data'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="mx-auto max-w-6xl px-6 py-24 md:py-36">
      <SectionHeading
        id="skills"
        index="03"
        eyebrow="Skills"
        title={
          <>
            Tools I have <span className="italic text-muted-foreground">worked with.</span>
          </>
        }
      />

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 100} className="bg-background p-6 md:p-10">
            <h3 className="mb-6 flex items-baseline gap-3 font-serif text-2xl md:text-3xl">
              <span className="text-xs tabular-nums text-primary">{String(index + 1).padStart(2, '0')}</span>
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground/90">
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
