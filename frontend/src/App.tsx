import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'
import { EducationSection } from '@/components/education-section'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </main>
    </div>
  )
}

export default App