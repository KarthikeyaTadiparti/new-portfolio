import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'
import { EducationSection } from '@/components/education-section'
import { AboutSection } from '@/components/about-section'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </main>
    </div>
  )
}

export default App