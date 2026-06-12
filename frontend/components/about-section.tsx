import React from "react"

export function AboutSection() {
  // Highlights helper for typographic key terms
  const Highlight = ({ children }: { children: React.ReactNode }) => (
    <span className="text-zinc-900 dark:text-zinc-100 font-bold border-b border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-primary dark:hover:text-primary transition-all duration-200 cursor-help">
      {children}
    </span>
  )

  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto w-full border-b border-border bg-background relative font-mono">
      {/* Background visual breathing space gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col mb-12 text-left">
        {/* <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mb-2 block select-none">
          // PROFILE / BRIEF
        </span> */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          About me
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Column: Biography Narrative (8 cols) */}
        <div className="lg:col-span-8 flex flex-col space-y-6 text-left">
          <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
            I build scalable software systems and turn ideas into impactful products.
          </h3>
          
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Hi, I'm <Highlight>Karthikeya Tadiparti</Highlight>, a <Highlight>final-year Computer Science undergraduate</Highlight> passionate about <Highlight>full-stack engineering</Highlight> and <Highlight>system design</Highlight>. I enjoy building reliable applications using modern technologies and creating solutions that solve meaningful problems.
          </p>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            I'm currently seeking <Highlight>software engineering internships</Highlight> and <Highlight>entry-level opportunities</Highlight> to contribute, learn, and grow alongside talented teams.
          </p>
        </div>

        {/* Right Column: Directives Columns (4 cols) */}
        <div className="lg:col-span-4 flex flex-col space-y-8 lg:pl-4 text-left">
          <span className="text-zinc-500 text-[9px] uppercase tracking-[0.15em] border-b border-border pb-2 block select-none">
            // SYSTEM DIRECTIVES
          </span>

          <div className="space-y-6">
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5 select-none">
                <span className="text-zinc-400 font-semibold">[01]</span> PRODUCT FOCUSED
              </h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed font-mono">
                Turning ideas into reliable, user-centric products that deliver real-world value.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5 select-none">
                <span className="text-zinc-400 font-semibold">[02]</span> SYSTEMS THINKER
              </h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed font-mono">
                Designing scalable architectures, optimizing performance, and building maintainable software systems.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5 select-none">
                <span className="text-zinc-400 font-semibold">[03]</span> FAST LEARNER
              </h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed font-mono">
                Quickly adapting to new technologies and thriving in fast-paced environments.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
