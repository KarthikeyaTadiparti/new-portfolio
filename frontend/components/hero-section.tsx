import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { 
  TerminalIcon, 
  CpuIcon, 
  FileTextIcon, 
  ArrowRightIcon, 
  ArrowClockwiseIcon, 
  CodeIcon
} from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"

// Project definitions and step logs for the terminal simulator
interface LogStep {
  type: "command" | "info" | "action" | "metric" | "success"
  text: string
  delay: number // milliseconds before showing this step
}

interface ProjectConfig {
  id: string
  name: string
  shortDesc: string
  icon: React.ReactNode
  steps: LogStep[]
}

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<string>("smart-recruiter")
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const timerRef = useRef<any>(null)

  const projects: ProjectConfig[] = [
    {
      id: "smart-recruiter",
      name: "Smart Recruiter",
      shortDesc: "AI Voice Interview Platform",
      icon: <CpuIcon className="size-4" />,
      steps: [
        { type: "command", text: "npm run start --voice-screener", delay: 300 },
        { type: "info", text: "[10:27:01] Listening on port 8080 (Redis + Postgres online)...", delay: 400 },
        { type: "action", text: "[AI Screener] Candidate voice stream connection established.", delay: 600 },
        { type: "action", text: "[AI Screener] Transcribing: \"I design scalable RAG systems and manage async queues...\"", delay: 800 },
        { type: "metric", text: "[AI Screener] Latency: 142ms | Sentiment: Positive | Depth: 9.4/10", delay: 700 },
        { type: "success", text: "[Redis Cache] Write success (Key: candidate_4021) in 2ms", delay: 400 },
        { type: "success", text: "✓ Screening complete. Final Score: 92/100. Redis cache hit.", delay: 500 }
      ]
    },
    {
      id: "legal-assistant",
      name: "Legal Assistant",
      shortDesc: "AI RAG Document Simplifier",
      icon: <FileTextIcon className="size-4" />,
      steps: [
        { type: "command", text: "n8n trigger --pipeline legal-doc-rag", delay: 300 },
        { type: "info", text: "[10:27:01] Fetching document: nda_draft_final.pdf (4.2 MB)", delay: 400 },
        { type: "action", text: "[RAG Pipeline] Text chunking complete. 128 vector embeddings generated.", delay: 600 },
        { type: "action", text: "[Vector DB] Querying dense index for: \"termination without cause liabilities\"", delay: 700 },
        { type: "metric", text: "[AI Model] RAG context retrieval complete. LLM response latency: 280ms", delay: 700 },
        { type: "success", text: "[Output] Simplified: \"Either party can terminate with 30-day written notice.\"", delay: 600 },
        { type: "success", text: "✓ Document parsed. Custom legal summary generated successfully.", delay: 400 }
      ]
    },
    {
      id: "perfect-resume",
      name: "Perfect Resume",
      shortDesc: "API Resume Builder",
      icon: <TerminalIcon className="size-4" />,
      steps: [
        { type: "command", text: "curl -X POST /api/resume/populate-linkedin", delay: 300 },
        { type: "info", text: "[10:27:01] Initiating LinkedIn OAuth payload verification...", delay: 400 },
        { type: "action", text: "[API] Fetching profile data, job roles, and skills...", delay: 600 },
        { type: "action", text: "[Parser] Mapping 8 professional roles & 12 projects to CV schema...", delay: 700 },
        { type: "metric", text: "[Resume Gen] Compiling resume schema. Redux state dispatched.", delay: 500 },
        { type: "success", text: "[PDF Generator] Output buffer created (214 KB) in 14ms", delay: 400 },
        { type: "success", text: "✓ Resume pre-populated. PDF template generated. Ready for export.", delay: 500 }
      ]
    }
  ]

  const currentProject = projects.find(p => p.id === activeTab) || projects[0]

  // Handle step-by-step terminal logging animation
  useEffect(() => {
    if (!isPlaying) return

    const currentSteps = currentProject.steps
    if (currentStepIndex < currentSteps.length) {
      const nextStep = currentSteps[currentStepIndex]
      timerRef.current = setTimeout(() => {
        setCurrentStepIndex(prev => prev + 1)
      }, nextStep.delay)
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [currentStepIndex, activeTab, isPlaying, currentProject])

  // Reset steps when tab changes
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    setCurrentStepIndex(0)
    setIsPlaying(true)
  }

  const restartSimulation = () => {
    setCurrentStepIndex(0)
    setIsPlaying(true)
  }

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center px-6 py-12 md:py-24 overflow-hidden border-b border-border bg-background scroll-mt-14 md:scroll-mt-8">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      


      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
        
        {/* Left Column: Context Storytelling */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">

          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-mono text-foreground leading-[1.1]">
              Karthikeya <br />
              <span className="text-muted-foreground">Tadiparti</span>
            </h1>
            <p className="text-md md:text-lg text-primary font-mono font-medium tracking-wide">
              Full-Stack Development & AI Integration
            </p>
          </div>

          <p className="text-muted-foreground text-sm md:text-base max-w-xl font-mono leading-relaxed">
            I build production-ready software and AI-driven products that solve real-world problems. 
            Focused on scalable backends, automated pipelines, and highly responsive user interfaces.
          </p>

          {/* Quick stats for credibility */}
          <div className="grid grid-cols-3 gap-4 border-t border-b border-border py-4 font-mono max-w-xl">
            <div>
              <p className="text-xs text-muted-foreground">HACKATHON</p>
              <p className="text-sm font-semibold text-foreground mt-0.5">Top 13 / 200+</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">LEETCODE</p>
              <p className="text-sm font-semibold text-foreground mt-0.5">150+ Solved</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">HACKERRANK</p>
              <p className="text-sm font-semibold text-foreground mt-0.5">5-Star Java</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              variant="default"
              size="lg"
              className="rounded-md font-mono text-xs cursor-pointer group"
              onClick={() => {
                const element = document.getElementById("projects")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              View Projects
              <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-md font-mono text-xs cursor-pointer"
              asChild
            >
              {/* <a href="/KarthikeyaTadiparti_Resume.pdf" download="KarthikeyaTadiparti_Resume.pdf">
                Download Resume
                <DownloadSimple className="size-3.5 ml-1" />
              </a> */}
            </Button>
          </div>
        </div>

        {/* Right Column: Signature Terminal Dashboard Widget */}
        <div className="lg:col-span-5 w-full flex flex-col">
          <div className="w-full border border-border bg-card text-card-foreground shadow-2xl rounded-lg overflow-hidden font-mono text-xs flex flex-col h-[380px]">
            
            {/* Terminal Window Header Bar */}
            <div className="bg-muted/80 px-4 py-3 border-b border-border flex items-center justify-between select-none">
              <div className="flex items-center gap-1.5">
                <div className="size-3 rounded-full bg-destructive/80" />
                <div className="size-3 rounded-full bg-amber-500/80" />
                <div className="size-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-[10px] text-muted-foreground tracking-wide flex items-center gap-1.5">
                <CodeIcon className="size-3" />
                tadiparti-pipeline-v1.0.sh
              </div>
              <button 
                onClick={restartSimulation}
                className="text-muted-foreground hover:text-foreground transition-colors outline-none cursor-pointer"
                title="Restart Log Stream"
              >
                <ArrowClockwiseIcon className="size-3.5" />
              </button>
            </div>

            {/* Sidebar & Console Grid Layout */}
            <div className="flex-1 grid grid-cols-12 overflow-hidden h-full">
              
              {/* Terminal Tabs / Sidebar */}
              <div className="col-span-4 bg-muted/30 border-r border-border py-2 flex flex-col gap-1">
                <div className="px-3 py-1 text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
                  Source Nodes
                </div>
                {projects.map((project) => {
                  const isActive = activeTab === project.id
                  return (
                    <button
                      key={project.id}
                      onClick={() => handleTabChange(project.id)}
                      className={`w-full text-left px-3 py-2 flex flex-col gap-0.5 transition-all outline-none cursor-pointer ${
                        isActive 
                          ? "bg-accent/80 text-foreground border-l-2 border-primary" 
                          : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-semibold text-[10px] whitespace-nowrap overflow-hidden text-ellipsis">
                        {project.icon}
                        {project.name}
                      </div>
                      <div className="text-[8px] text-muted-foreground truncate max-w-full">
                        {project.shortDesc}
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Console Output Terminal */}
              <div className="col-span-8 bg-zinc-50 dark:bg-black/95 p-4 overflow-y-auto text-[10px] flex flex-col gap-1.5 border-l border-border dark:border-zinc-900 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800 scrollbar-track-transparent">
                <AnimatePresence mode="popLayout">
                  {currentProject.steps.slice(0, currentStepIndex).map((step, idx) => {
                    let textClass = "text-zinc-800 dark:text-zinc-300"
                    let prefix = " "
                    
                    if (step.type === "command") {
                      textClass = "text-indigo-600 dark:text-indigo-400 font-semibold"
                      prefix = "$ "
                    } else if (step.type === "info") {
                      textClass = "text-zinc-400 dark:text-zinc-500"
                      prefix = "i "
                    } else if (step.type === "action") {
                      textClass = "text-zinc-700 dark:text-zinc-200"
                      prefix = "⚙ "
                    } else if (step.type === "metric") {
                      textClass = "text-amber-600 dark:text-amber-400 font-medium"
                      prefix = "⌁ "
                    } else if (step.type === "success") {
                      textClass = "text-emerald-600 dark:text-emerald-400 font-medium"
                      prefix = "✔ "
                    }

                    return (
                      <motion.div
                        key={`${activeTab}-step-${idx}`}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-start gap-1"
                      >
                        <span className="text-zinc-400 dark:text-zinc-600 select-none w-4 text-right pr-1">
                          {idx + 1}
                        </span>
                        <span className="text-zinc-400 dark:text-zinc-700 select-none font-bold">
                          {prefix}
                        </span>
                        <span className={`flex-1 break-all ${textClass}`}>
                          {step.text}
                        </span>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>

                {/* Animated Typing Indicator / Blink cursor */}
                {isPlaying && currentStepIndex < currentProject.steps.length && (
                  <div className="flex items-center gap-1 pl-5">
                    <div className="size-1 rounded-full bg-indigo-500 animate-ping" />
                    <span className="text-zinc-400 dark:text-zinc-600 italic select-none">running pipeline...</span>
                  </div>
                )}

                {/* Finished prompt */}
                {currentStepIndex === currentProject.steps.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-1.5 mt-2 pt-2 border-t border-zinc-200 dark:border-zinc-900 text-zinc-400 dark:text-zinc-500"
                  >
                    <span className="text-zinc-400 dark:text-zinc-600 select-none w-4 text-right pr-1">
                      {currentProject.steps.length + 1}
                    </span>
                    <span className="text-emerald-500/80">●</span>
                    <span className="font-semibold text-[9px] uppercase tracking-wider text-emerald-500/80">
                      Telemetry Idle
                    </span>
                  </motion.div>
                )}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
