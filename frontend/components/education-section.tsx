import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { 
  GraduationCap, 
  BookOpen, 
  Compass, 
  Sparkle, 
  CheckCircle,
  Terminal
} from "@phosphor-icons/react"

interface Milestone {
  id: string
  institution: string
  degree: string
  duration: string
  scoreType: "CGPA" | "Percentage"
  score: string
  percentVal: number // out of 100 for visual progress bar
  location: string
  status: "Completed" | "Graduated"
  icon: React.ReactNode
  logs: {
    type: "info" | "success" | "metric"
    text: string
  }[]
}

export function EducationSection() {
  const [activeId, setActiveId] = useState<string>("college")

  const milestones: Milestone[] = [
    {
      id: "college",
      institution: "Maharaj Vijayaram Gajapathi Raj College of Engineering (A)",
      degree: "Bachelor of Technology in Computer Science Engineering",
      duration: "Nov 2022 – May 2026",
      scoreType: "CGPA",
      score: "8.51 / 10.0",
      percentVal: 85.1,
      location: "Vizianagaram, Andhra Pradesh",
      status: "Graduated",
      icon: <GraduationCap className="size-5" />,
      logs: [
        { type: "info", text: "[System Status] B.Tech CSE lifecycle completed." },
        { type: "metric", text: "Performance: 8.51/10.0 Cumulative Grade Point Average." },
        { type: "success", text: "Ranked Top 13 among 200+ teams at Visionova Hackathon." },
        { type: "success", text: "Achieved 5-star Java status on HackerRank." },
        { type: "success", text: "Solved 150+ complex algorithms on LeetCode." }
      ]
    },
    {
      id: "junior-college",
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate (MPC - Maths, Physics, Chemistry)",
      duration: "Jul 2020 – May 2022",
      scoreType: "Percentage",
      score: "96%",
      percentVal: 96.0,
      location: "Visakhapatnam, Andhra Pradesh",
      status: "Completed",
      icon: <BookOpen className="size-5" />,
      logs: [
        { type: "info", text: "[System Status] Intermediate MPC coursework trace finished." },
        { type: "metric", text: "Performance: 96% score in AP Board Examination." },
      ]
    },
    {
      id: "school",
      institution: "Sri Chaitanya Techno School",
      degree: "Secondary School Certificate (SSC)",
      duration: "Jul 2019 – May 2020",
      scoreType: "Percentage",
      score: "99%",
      percentVal: 99.0,
      location: "Visakhapatnam, Andhra Pradesh",
      status: "Completed",
      icon: <Compass className="size-5" />,
      logs: [
        { type: "info", text: "[System Status] Secondary School Certificate pipeline closed." },
        { type: "metric", text: "Performance: 99% score in SSC Board Examination." },
      ]
    }
  ]

  const activeMilestone = milestones.find(m => m.id === activeId) || milestones[0]

  return (
    <section id="education" className="py-20 px-6 max-w-7xl mx-auto w-full border-b border-border bg-background relative font-mono">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col space-y-4 mb-16 text-left max-w-3xl">
        {/* <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full border border-border bg-muted/30 text-[10px] uppercase tracking-wider text-muted-foreground">
          <Sparkle className="size-3.5 text-primary animate-pulse" />
          Academic Pipeline
        </div> */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Education History
        </h2>
        {/* <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-2xl">
          A trace log of academic performance, credentials, and milestones achieved during my educational career.
        </p> */}
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Left Column: Interactive Timeline List (5 cols) */}
        <div className="lg:col-span-5 flex flex-col relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-zinc-200 dark:bg-zinc-800 pointer-events-none" />

          <div className="flex flex-col gap-6">
            {milestones.map((item) => {
              const isActive = activeId === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`text-left flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 relative group cursor-pointer outline-none ${
                    isActive 
                      ? "bg-accent/80 border-primary text-foreground shadow-[0_4px_20px_rgba(0,0,0,0.03)]" 
                      : "bg-zinc-50/50 dark:bg-card/20 border-border text-muted-foreground hover:border-zinc-400 dark:hover:border-zinc-700 hover:text-foreground"
                  }`}
                >
                  {/* Visual Node Dot / Icon wrapper */}
                  <div className={`size-10 rounded-lg flex items-center justify-center border transition-all duration-300 relative z-10 shrink-0 ${
                    isActive 
                      ? "bg-primary border-primary text-primary-foreground shadow-[0_0_12px_rgba(var(--primary),0.3)]" 
                      : "bg-white dark:bg-zinc-950 border-border text-muted-foreground group-hover:border-zinc-400 dark:group-hover:border-zinc-700"
                  }`}>
                    {item.icon}
                  </div>

                  {/* Text preview */}
                  <div className="flex flex-col space-y-1">
                    <span className={`text-[10px] uppercase font-bold tracking-wider ${
                      isActive ? "text-primary" : "text-zinc-500"
                    }`}>
                      {item.duration}
                    </span>
                    <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 line-clamp-1">
                      {item.degree}
                    </h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-1">
                      {item.institution}
                    </p>
                  </div>

                  {/* Active selector subtle pill indicator */}
                  {isActive && (
                    <span className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-primary rounded-full hidden lg:block shadow-[0_0_8px_rgba(var(--primary),0.5)] border-2 border-background" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Column: Dynamic Inspector Panel (7 cols) */}
        <div className="lg:col-span-7 w-full">
          <div className="border border-border bg-card text-card-foreground shadow-xl rounded-xl overflow-hidden flex flex-col min-h-[350px]">
            
            {/* Inspector Header */}
            <div className="bg-muted/80 px-4 py-3 border-b border-border flex items-center justify-between select-none">
              <div className="flex items-center gap-1.5">
                <div className="size-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <div className="size-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <div className="size-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              </div>
              <div className="text-[10px] text-muted-foreground tracking-wider uppercase flex items-center gap-1.5">
                <Terminal className="size-3 text-emerald-500" />
                Telemetry Diagnostic: node_{activeId}.yaml
              </div>
              <div className="size-4" />
            </div>

            {/* Diagnostic Logs / Body */}
            <div className="p-6 flex-1 flex flex-col gap-5 justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {/* YAML Config Fields */}
                  <div className="space-y-1 text-xs">
                    <div className="flex items-start">
                      <span className="text-zinc-500 w-24 shrink-0 font-semibold">institution:</span>
                      <span className="text-zinc-900 dark:text-zinc-100 font-bold">{activeMilestone.institution}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-zinc-500 w-24 shrink-0 font-semibold">location:</span>
                      <span className="text-zinc-900 dark:text-zinc-200">{activeMilestone.location}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-zinc-500 w-24 shrink-0 font-semibold">status:</span>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-[10px] uppercase">
                        {activeMilestone.status}
                      </span>
                    </div>
                  </div>

                  {/* Performance metric with visual bar */}
                  <div className="bg-zinc-100/50 dark:bg-zinc-900/40 border border-border/80 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-500 font-semibold">academic_metric ({activeMilestone.scoreType}):</span>
                      <span className="text-primary font-bold text-sm">{activeMilestone.score}</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="bg-primary h-full rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${activeMilestone.percentVal}%` }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                      </div>
                      <div className="flex justify-between text-[9px] text-zinc-500">
                        <span>0%</span>
                        <span>Performance Rate: {activeMilestone.percentVal}%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>

                  {/* Trace System Logs */}
                  <div className="space-y-2">
                    <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider block">
                      Execution Trace Logs
                    </span>
                    <div className="bg-zinc-950 text-zinc-300 p-3.5 rounded-lg text-[11px] font-mono leading-relaxed border border-zinc-900 flex flex-col gap-1.5">
                      {activeMilestone.logs.map((log, lIdx) => {
                        let logColor = "text-zinc-400"
                        let prefix = "•"
                        if (log.type === "info") {
                          logColor = "text-zinc-500"
                          prefix = "i"
                        } else if (log.type === "metric") {
                          logColor = "text-amber-400 font-medium"
                          prefix = "⌁"
                        } else if (log.type === "success") {
                          logColor = "text-emerald-400 font-bold"
                          prefix = "✓"
                        }
                        return (
                          <div key={lIdx} className="flex items-start gap-2">
                            <span className="text-zinc-600 select-none text-[9px] w-3 text-right">{prefix}</span>
                            <span className={logColor}>{log.text}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Status Footer */}
              <div className="border-t border-border pt-4 flex items-center justify-between text-[10px] text-zinc-500 select-none">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="size-4 text-emerald-500" />
                  <span>Pipeline integrity: SECURE</span>
                </div>
                <span>NODE_{activeId.toUpperCase()}_OK</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
