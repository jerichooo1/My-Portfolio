import { OptionalLink } from '@/components/optional-link'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { projects, type Project } from '@/lib/site-data'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      as="article"
      className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/30 md:p-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
      />

      <div className="relative grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <div className="mb-6 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="text-primary">{String(index + 1).padStart(2, '0')}</span>
            <span>{project.category}</span>
          </div>
          <h3 className="font-serif text-4xl tracking-tight md:text-5xl">{project.name}</h3>
          <p className="mt-4 text-pretty text-sm italic leading-relaxed text-muted-foreground">
            {`“${project.title}”`}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <OptionalLink href={project.sourceUrl} label="Source code" placeholder="Source code — link coming soon" />
            {project.walkthroughUrl && <OptionalLink href={project.walkthroughUrl} label="Video walkthrough" />}
            {project.interfaceUrl && <OptionalLink href={project.interfaceUrl} label="Interfaces & device photos" />}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">Goal</h4>
            <p className="text-pretty leading-relaxed">{project.goal}</p>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Contribution
            </h4>
            <ul className="space-y-3">
              {project.contribution.map((item) => (
                <li key={item} className="flex gap-3 text-pretty leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Key areas
            </h4>
            <ul className="flex flex-wrap gap-2">
              {project.keyAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-foreground/90"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl px-6 py-24 md:py-36"
    >
      <SectionHeading
        id="projects"
        index="02"
        eyebrow="Selected Projects"
        title={
          <>
            Academic work across <span className="italic text-muted-foreground">IoT, web, and AI.</span>
          </>
        }
        intro="Team-based capstone and course projects. Each card notes the project goal, my contribution, and the main areas involved."
      />

      <div className="space-y-6 md:space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
