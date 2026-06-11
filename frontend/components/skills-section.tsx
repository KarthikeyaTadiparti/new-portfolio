import { 
  Terminal, 
  Cpu, 
  Database, 
  Wrench, 
  Code,
  Sparkle
} from "@phosphor-icons/react"

interface Skill {
  id: string
  name: string
  category: "Languages" | "Frontend" | "Backend" | "Databases" | "Tools"
  isCore: boolean
}

export function SkillsSection() {
  const skills: Skill[] = [
    // --- LANGUAGES ---
    { id: "typescript", name: "TypeScript", category: "Languages", isCore: true },
    { id: "javascript", name: "JavaScript", category: "Languages", isCore: true },
    { id: "java", name: "Java", category: "Languages", isCore: true },
    { id: "python", name: "Python", category: "Languages", isCore: false },
    { id: "cplusplus", name: "C++", category: "Languages", isCore: false },
    { id: "c", name: "C", category: "Languages", isCore: false },

    // --- FRONTEND ---
    { id: "react", name: "React.js", category: "Frontend", isCore: true },
    { id: "redux", name: "Redux", category: "Frontend", isCore: false },
    { id: "tailwindcss", name: "Tailwind CSS", category: "Frontend", isCore: true },
    { id: "shadcn", name: "shadcn/ui", category: "Frontend", isCore: true },

    // --- BACKEND ---
    { id: "nodejs", name: "Node.js", category: "Backend", isCore: true },
    { id: "expressjs", name: "Express.js", category: "Backend", isCore: true },
    { id: "restapis", name: "REST APIs", category: "Backend", isCore: true },
    { id: "jwt", name: "JWT Auth", category: "Backend", isCore: false },
    { id: "rag", name: "RAG Pipeline", category: "Backend", isCore: true },

    // --- DATABASES ---
    { id: "postgresql", name: "PostgreSQL", category: "Databases", isCore: true },
    { id: "mongodb", name: "MongoDB", category: "Databases", isCore: false },
    { id: "redis", name: "Redis Cache", category: "Databases", isCore: true },
    { id: "mysql", name: "MySQL", category: "Databases", isCore: false },

    // --- TOOLS ---
    { id: "git", name: "Git", category: "Tools", isCore: true },
    { id: "docker", name: "Docker", category: "Tools", isCore: false },
    { id: "n8n", name: "n8n Automation", category: "Tools", isCore: true },
    { id: "postman", name: "Postman", category: "Tools", isCore: false },
    { id: "vercel", name: "Vercel", category: "Tools", isCore: false },
    { id: "render", name: "Render", category: "Tools", isCore: false }
  ]

  const categories = [
    { name: "Languages", icon: <Code className="size-4 text-emerald-500" /> },
    { name: "Frontend", icon: <Terminal className="size-4 text-sky-500" /> },
    { name: "Backend", icon: <Cpu className="size-4 text-indigo-500" /> },
    { name: "Databases", icon: <Database className="size-4 text-amber-500" /> },
    { name: "Tools", icon: <Wrench className="size-4 text-purple-500" /> }
  ] as const

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto w-full border-b border-border bg-background relative font-mono">
      
      {/* Background layout gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col space-y-4 mb-16 text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full border border-border bg-muted/30 text-[10px] uppercase tracking-wider text-muted-foreground">
          <Sparkle className="size-3.5 text-primary animate-pulse" />
          Technical Skillset
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Toolkit & Core Competencies
        </h2>
        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-2xl">
          A track record of using modern technologies to build scalable, production-grade applications.
        </p>
      </div>

      {/* Simplified Scannable Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cat) => {
          const catSkills = skills.filter(s => s.category === cat.name)
          return (
            <div 
              key={cat.name} 
              className="border border-border bg-card/40 hover:bg-card/60 rounded-xl p-4 flex flex-col space-y-4 transition-all duration-300 shadow-sm"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 border-b border-border/80 pb-2">
                {cat.icon}
                <span className="text-xs font-bold text-foreground uppercase tracking-widest">
                  {cat.name}
                </span>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-2">
                {catSkills.map((skill) => {
                  return (
                    <div
                      key={skill.id}
                      className="w-full px-2.5 py-1.5 rounded-md border border-border/80 bg-card/60 text-foreground text-xs flex items-center gap-2"
                    >
                      <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}
