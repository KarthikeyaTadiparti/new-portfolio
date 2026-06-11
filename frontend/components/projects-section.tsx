import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { 
  GithubLogo, 
  ArrowSquareOut,
  Play,
  Pause,
  ArrowRight,
  Lightning,
  Sparkle,
  ArrowsLeftRight,
  CheckCircle
} from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"

interface ProjectData {
  id: string
  title: string
  subtitle: string
  badge: string
  tech: string[]
  problem: string
  solution: string
  impact: string[]
  learnings: string[]
  github: string
  demo: string
}

export function ProjectsSection() {
  const projects: ProjectData[] = [
    {
      id: "smart-recruiter",
      title: "Smart Recruiter",
      subtitle: "AI-Powered Voice Interview Platform",
      badge: "Scale & Backend Focus",
      tech: ["React.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Redis"],
      problem: "Screening hundreds of candidates takes days, and manual interviews can be slow, expensive, and biased.",
      solution: "Built an AI voice assistant that interviews candidates, records transcripts, and scores skills automatically.",
      impact: [
        "Reduced recruiter screening time by 70%",
        "Scaled session caching to Redis with 2ms response times"
      ],
      learnings: [
        "Handled real-time voice recording uploads using multipart buffers",
        "Set up fast key-value caching structures using Redis to track states"
      ],
      github: "https://github.com",
      demo: "#"
    },
    {
      id: "legal-assistant",
      title: "Legal Assistant",
      subtitle: "Custom AI RAG Document Simplifier",
      badge: "Visionova Hackathon • Top 13",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "n8n", "RAG Pipeline"],
      problem: "Founder contracts and NDAs are full of complicated legal words that are very hard to read and parse.",
      solution: "Developed an AI helper using n8n and vector databases that reads agreements and explains them in simple English.",
      impact: [
        "Built the entire application in a 24-hour hackathon window",
        "Helped founders identify contract risks in under 60 seconds"
      ],
      learnings: [
        "Connected third-party APIs and file systems using n8n visual pipelines",
        "Tuned vector databases to prevent AI from making up legal advice"
      ],
      github: "https://github.com",
      demo: "#"
    },
    {
      id: "perfect-resume",
      title: "Perfect Resume",
      subtitle: "Dynamic LinkedIn Profile to PDF CV Builder",
      badge: "Productivity Utility",
      tech: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "OAuth 2.0"],
      problem: "Formatting resumes manually is slow, and copying info from LinkedIn is tedious and breaks layouts.",
      solution: "Created an automated CV compiler that pulls data from LinkedIn profiles via OAuth and creates clean PDFs instantly.",
      impact: [
        "Decreased average resume generation time from 1 hour to 30 seconds",
        "Automated profile sync for consistent professional history data"
      ],
      learnings: [
        "Managed complex form state across multiple steps using Redux slices",
        "Handled secure LinkedIn login access and API token rotations"
      ],
      github: "https://github.com",
      demo: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto w-full border-b border-border bg-background relative">
      {/* Eyebrow and Section Header */}
      <div className="flex flex-col space-y-4 mb-16 text-left max-w-2xl font-mono">
        <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full border border-border bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
          Case Studies
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Featured Engineering Projects
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          Explore three production-grade products designed to automate workflows, simplify data extraction, and increase operational efficiency.
        </p>
      </div>

      {/* Case Studies Stack */}
      <div className="flex flex-col space-y-24">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            
            {/* Visual Micro-Widget (Column 5 on Desktop) */}
            <div className={`lg:col-span-5 w-full order-last ${idx % 2 === 0 ? "lg:order-last" : "lg:order-first"}`}>
              {project.id === "smart-recruiter" && <SmartRecruiterWidget />}
              {project.id === "legal-assistant" && <LegalAssistantWidget />}
              {project.id === "perfect-resume" && <PerfectResumeWidget />}
            </div>

            {/* Content Specs (Column 7 on Desktop) */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-wide">
                    {project.badge}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-mono tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="text-base text-muted-foreground font-mono">
                  {project.subtitle}
                </p>
              </div>

              {/* Technologies list */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded border border-border bg-muted/30 text-xs font-mono text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>

              {/* Problem & Solution block */}
              <div className="space-y-4 border-l border-zinc-800 pl-4 py-1 text-sm font-mono">
                <div>
                  <span className="text-rose-500 font-semibold uppercase tracking-wider block text-xs mb-1">
                    [Problem Statement]
                  </span>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <span className="text-emerald-500 font-semibold uppercase tracking-wider block text-xs mb-1">
                    [Engineered Solution]
                  </span>
                  <p className="text-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Bulleted metrics and impact */}
              <div className="space-y-2 font-mono">
                <span className="text-zinc-500 uppercase text-xs tracking-wider font-semibold block">
                  Key Metrics & Impact
                </span>
                <ul className="flex flex-col gap-2 text-sm">
                  {project.impact.map((imp, index) => (
                    <li key={index} className="flex items-start gap-2 text-zinc-300">
                      <CheckCircle className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learnings accordion bullet list */}
              <div className="space-y-2 font-mono text-sm">
                <span className="text-zinc-500 uppercase text-xs tracking-wider font-semibold block">
                  Technical Architecture & Key Learnings
                </span>
                <ul className="space-y-1.5 text-muted-foreground list-disc pl-4 leading-relaxed">
                  {project.learnings.map((learn, lIdx) => (
                    <li key={lIdx}>{learn}</li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2">
                <Button variant="outline" size="sm" className="rounded-md font-mono text-xs cursor-pointer group" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                    <GithubLogo className="size-4" />
                    Source Code
                  </a>
                </Button>
                {project.demo !== "#" && (
                  <Button variant="ghost" size="sm" className="rounded-md font-mono text-xs text-zinc-400 hover:text-foreground cursor-pointer" asChild>
                    <a href={project.demo} className="flex items-center gap-1.5">
                      Live Demonstration
                      <ArrowSquareOut className="size-4" />
                    </a>
                  </Button>
                )}
              </div>

            </div>

          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ----------------- MICRO-WIDGET COMPONENTS -----------------

// Smart Recruiter Widget
function SmartRecruiterWidget() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [playbackTime, setPlaybackTime] = useState<number>(4)
  const [sentiment, setSentiment] = useState<string>("Confident")
  const [transcription, setTranscription] = useState<string>("I set up Redis caching...")
  const timerRef = React.useRef<any>(null)

  // Simulation loop for candidate audio screener
  useEffect(() => {
    if (!isPlaying) return

    timerRef.current = setInterval(() => {
      setPlaybackTime((t) => {
        const next = t >= 30 ? 0 : t + 1
        
        // Dynamic logs matching audio time
        if (next < 8) {
          setTranscription("\"I set up Redis caching key-values...\"")
          setSentiment("Confident")
        } else if (next < 16) {
          setTranscription("\"...to scale backend session writing speeds...\"")
          setSentiment("Analytical")
        } else if (next < 24) {
          setTranscription("\"...and reduce Postgres read latency load.\"")
          setSentiment("System Architect")
        } else {
          setTranscription("\"Screening parameters scored by AI pipeline.\"")
          setSentiment("Objective")
        }
        
        return next
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPlaying])

  return (
    <div className="w-full border border-border bg-card shadow-lg rounded-lg overflow-hidden font-mono text-xs p-4 flex flex-col gap-4">
      {/* Title block */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-foreground text-[10px]">recruiter_voice_stream.bin</span>
        </div>
        <span className="text-[9px] text-zinc-500">Node Audio Loader v2</span>
      </div>

      {/* Waveform Player */}
      <div className="bg-black/40 border border-border/60 rounded p-3 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="size-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center cursor-pointer hover:bg-primary/80 transition-colors"
          >
            {isPlaying ? <Pause className="size-3.5 fill-current" /> : <Play className="size-3.5 fill-current ml-0.5" />}
          </button>
          
          <div className="flex-1 flex flex-col gap-1">
            <div className="flex items-center justify-between text-[8px] text-muted-foreground">
              <span>ACTIVE CAPTURE</span>
              <span>00:{playbackTime < 10 ? `0${playbackTime}` : playbackTime} / 00:30</span>
            </div>
            {/* Waveform bars */}
            <div className="h-6 flex items-end gap-[3px] py-1 select-none">
              {Array.from({ length: 26 }).map((_, idx) => {
                // Generate a pseudo-random wave height that changes dynamically if playing
                const baseHeight = 20 + Math.sin(idx * 0.5) * 45 + Math.cos(idx * 0.9) * 25
                const animHeight = isPlaying 
                  ? Math.max(10, Math.min(95, baseHeight + Math.sin(playbackTime + idx) * 20))
                  : baseHeight * 0.6
                
                return (
                  <motion.div
                    key={idx}
                    animate={{ height: `${animHeight}%` }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className={`flex-1 rounded-sm ${idx * 1.15 < playbackTime ? "bg-primary" : "bg-zinc-800"}`}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* AI Inference Telemetry Box */}
      <div className="grid grid-cols-2 gap-3 text-[9px] bg-muted/40 p-3 rounded border border-border/40">
        <div className="space-y-1">
          <span className="text-zinc-500 block">AI TRANSCRIBER</span>
          <p className="text-foreground italic leading-normal truncate max-w-[140px] md:max-w-none">
            {transcription}
          </p>
        </div>
        <div className="space-y-1 border-l border-border/80 pl-3">
          <span className="text-zinc-500 block">SENTIMENT SCORE</span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <Lightning className="size-3 text-amber-500" />
            <span className="text-foreground font-semibold uppercase">{sentiment}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Legal Assistant Widget
function LegalAssistantWidget() {
  const [isProcessing, setIsProcessing] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(0)
  const [showSimplified, setShowSimplified] = useState<boolean>(false)

  const triggerSimplification = () => {
    if (isProcessing) return
    setIsProcessing(true)
    setProgress(0)
    setShowSimplified(false)
  }

  useEffect(() => {
    if (!isProcessing) return

    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer)
          setIsProcessing(false)
          setShowSimplified(true)
          return 100
        }
        return p + 20
      })
    }, 300)

    return () => clearInterval(timer)
  }, [isProcessing])

  return (
    <div className="w-full border border-border bg-card shadow-lg rounded-lg overflow-hidden font-mono text-xs p-4 flex flex-col gap-4">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <Sparkle className="size-4 text-primary animate-pulse" />
          <span className="font-semibold text-foreground text-[10px]">RAG Legalese Parser v1.0</span>
        </div>
        <span className="text-[8px] text-rose-500 font-semibold px-1.5 py-0.5 rounded border border-rose-950 bg-rose-500/5">
          Ingested NDA
        </span>
      </div>

      {/* Split Viewer */}
      <div className="flex flex-col gap-3 min-h-[160px]">
        {/* Raw clause container */}
        <div className="bg-black/50 border border-border rounded p-3 flex flex-col gap-1.5">
          <span className="text-[8px] text-zinc-500 uppercase tracking-wide">NDA SOURCE CLAUSE (SECTION 11.2)</span>
          <p className="text-[9px] text-rose-300/80 leading-relaxed font-sans select-none">
            \"Subject to the limitations set forth in Section 4.2, either contracting party may, at its sole and absolute discretion, terminate this Agreement upon prior written notice of thirty (30) days.\"
          </p>
        </div>

        {/* Simplification Trigger Bar */}
        <div className="flex items-center gap-3">
          <Button
            size="xs"
            onClick={triggerSimplification}
            disabled={isProcessing}
            className="rounded-md font-mono text-[9px] cursor-pointer flex items-center gap-1"
          >
            {isProcessing ? "Ingesting Embeddings..." : "Simplify via RAG"}
            <ArrowsLeftRight className="size-3" />
          </Button>
          
          {isProcessing && (
            <div className="flex-1 bg-zinc-900 rounded-full h-1.5 overflow-hidden border border-zinc-800">
              <div 
                className="bg-primary h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>

        {/* Simplified Output Container */}
        <div className="bg-black/50 border border-border rounded p-3 flex-1 flex flex-col gap-1.5 min-h-[75px] relative">
          <span className="text-[8px] text-zinc-500 uppercase tracking-wide">RAG Simplified Output</span>
          
          <AnimatePresence mode="wait">
            {!showSimplified && !isProcessing && (
              <div className="text-[9px] text-zinc-500 italic flex items-center justify-center h-full">
                Click Simplify to run embeddings retrieval...
              </div>
            )}

            {isProcessing && (
              <div className="text-[9px] text-zinc-400 animate-pulse flex items-center gap-1.5 h-full">
                <span>⚡ Parsing vector indices and executing summary...</span>
              </div>
            )}

            {showSimplified && !isProcessing && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-1.5 text-[9px] text-emerald-400"
              >
                <div className="flex items-start gap-1">
                  <span>•</span>
                  <p>Either party can end this agreement at any time for any reason.</p>
                </div>
                <div className="flex items-start gap-1">
                  <span>•</span>
                  <p>You must provide a 30-day prior written warning message to cancel.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

// Perfect Resume Widget
function PerfectResumeWidget() {
  const [isMapping, setIsMapping] = useState<boolean>(false)
  const [activeStep, setActiveStep] = useState<number>(-1)

  const mappings = [
    { from: "LinkedIn Experience", to: "Resume History Schema", field: "EduSkills Intern" },
    { from: "LinkedIn Endorsements", to: "Structured Skill List", field: "React, Node.js" },
    { from: "LinkedIn Certifications", to: "Technical Achievements", field: "Oracle, HackerRank" }
  ]

  const runMappingSimulation = () => {
    if (isMapping) return
    setIsMapping(true)
    setActiveStep(0)
  }

  useEffect(() => {
    if (!isMapping) return

    const timer = setInterval(() => {
      setActiveStep((s) => {
        if (s >= mappings.length - 1) {
          clearInterval(timer)
          // Finish animation delay
          setTimeout(() => {
            setIsMapping(false)
            setActiveStep(-1)
          }, 1500)
          return mappings.length
        }
        return s + 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isMapping])

  return (
    <div className="w-full border border-border bg-card shadow-lg rounded-lg overflow-hidden font-mono text-xs p-4 flex flex-col gap-4">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <GithubLogo className="size-4 text-indigo-400" />
          <span className="font-semibold text-foreground text-[10px]">linkedin_oauth_parser.go</span>
        </div>
        <span className="text-[8px] text-zinc-500">API Sync Session</span>
      </div>

      <div className="flex flex-col gap-3 min-h-[160px] justify-between">
        
        {/* Mapping Process Rows */}
        <div className="space-y-2 flex-1">
          <span className="text-[8px] text-zinc-500 uppercase tracking-wide block mb-1">
            OAuth Field Transition Telemetry
          </span>
          
          {mappings.map((map, idx) => {
            const isProcessing = activeStep === idx
            const isDone = activeStep > idx || activeStep === -1
            
            return (
              <div 
                key={idx}
                className={`border rounded p-2 flex items-center justify-between text-[9px] transition-all ${
                  isProcessing 
                    ? "border-primary bg-primary/5 text-foreground" 
                    : isDone && activeStep !== -1 
                      ? "border-emerald-800/40 bg-emerald-500/5 text-emerald-400"
                      : "border-border/60 bg-muted/20 text-muted-foreground"
                }`}
              >
                <span className="font-semibold">{map.from}</span>
                <span className="text-[8px] opacity-75">──►</span>
                <span className="italic">{map.field}</span>
              </div>
            )
          })}
        </div>

        {/* Sync Trigger button */}
        <Button
          size="xs"
          onClick={runMappingSimulation}
          disabled={isMapping}
          className="rounded-md font-mono text-[9px] w-full cursor-pointer flex items-center justify-center gap-1.5"
        >
          {isMapping ? "Syncing API Fields..." : "Run LinkedIn Data Sync"}
          <ArrowRight className="size-3" />
        </Button>

      </div>
    </div>
  )
}
