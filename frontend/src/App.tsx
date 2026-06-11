import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <HeroSection />
        <ProjectsSection />
      </main>
    </div>
  )
}

export default App