import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const focusAreas = [
  'Web development',
  'Databases',
  'AI & computer vision',
  'Networking',
  'IoT integration',
  'Cloud computing',
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-6xl px-6 py-24 md:py-36">
      <SectionHeading
        id="about"
        index="01"
        eyebrow="About"
        title={
          <>
            Learning by building — <span className="italic text-muted-foreground">one project at a time.</span>
          </>
        }
      />

      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-20">
        <Reveal className="space-y-6 text-pretty text-lg leading-relaxed text-muted-foreground">
          <p>
            {"I'm Jericho, a fourth-year BS Information Technology student specializing in Mobile and Internet Technology at NU Fairview. I enjoy turning ideas into working software and understanding how each part of a system connects — from the database to the interface."}
          </p>
          <p>
            Through academic projects, I have worked across web development, databases, AI and computer
            vision, networking, IoT integration, and cloud computing. These projects taught me to work in a
            team, test carefully, and connect hardware, web, and mobile pieces into one system.
          </p>
          <p className="text-foreground">
            {"I'm looking for an internship where I can contribute, keep learning, and grow as a software engineer and full-stack developer."}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Project experience
          </h3>
          <ul className="divide-y divide-border border-y border-border">
            {focusAreas.map((area, index) => (
              <li key={area} className="flex items-baseline gap-4 py-4">
                <span className="w-6 text-xs tabular-nums text-primary">{String(index + 1).padStart(2, '0')}</span>
                <span className="font-serif text-xl">{area}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
