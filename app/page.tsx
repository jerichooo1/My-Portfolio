import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Education } from '@/components/education'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Skills } from '@/components/skills'

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
