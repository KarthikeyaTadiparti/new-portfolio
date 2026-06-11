import { motion } from "motion/react"
import { 
  GithubLogo, 
  ArrowSquareOut,
  CheckCircle,
  Cpu,
  Sparkle
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
        {/* <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full border border-border bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
          Case Studies
        </div> */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Projects
        </h2>
        {/* <p className="text-muted-foreground text-base leading-relaxed">
          Explore three production-grade products designed to automate workflows, simplify data extraction, and increase operational efficiency.
        </p> */}
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
                    <li key={index} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
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
  return (
    <div className="w-full border border-border bg-card shadow-lg rounded-lg overflow-hidden font-mono text-xs p-4 flex flex-col gap-3">
      {/* Title block */}
      <div className="flex items-center justify-between border-b border-border pb-2.5">
        <div className="flex items-center gap-2">
          <Cpu className="size-4 text-emerald-500" />
          <span className="font-semibold text-foreground text-[10px]">AI SCREENING REPORT</span>
        </div>
        <span className="text-[9px] text-zinc-500">Candidate #4021</span>
      </div>

      {/* Score Telemetry */}
      <div className="space-y-3 bg-zinc-100 dark:bg-zinc-900/40 border border-border/60 rounded p-3 text-sm">
        <div className="flex justify-between items-center text-xs">
          <span className="text-muted-foreground">Candidate Name:</span>
          <span className="text-foreground font-semibold">Alex Rivera</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-[11px] text-muted-foreground">
            <span>Technical Score</span>
            <span>92%</span>
          </div>
          <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[92%]" />
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-[11px] text-muted-foreground">
            <span>Communication Score</span>
            <span>85%</span>
          </div>
          <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[85%]" />
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-[11px] text-muted-foreground">
            <span>AI Confidence Score</span>
            <span>94%</span>
          </div>
          <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div className="bg-amber-500 h-full w-[94%]" />
          </div>
        </div>
      </div>

      {/* AI Summary Readout */}
      <div className="bg-muted/40 p-2.5 rounded border border-border/40 text-[10px] space-y-1">
        <span className="text-zinc-500 block uppercase font-semibold text-[8px]">AI Evaluation Summary</span>
        <p className="text-foreground leading-relaxed">
          "Candidate explained Redis caching and Postgres indexing questions confidently. Highly recommended for the next round."
        </p>
      </div>
    </div>
  )
}

// Legal Assistant Widget
function LegalAssistantWidget() {
  return (
    <div className="w-full border border-border bg-card shadow-lg rounded-lg overflow-hidden font-mono text-xs p-4 flex flex-col gap-3">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-border pb-2.5">
        <div className="flex items-center gap-2">
          <Sparkle className="size-4 text-amber-500" />
          <span className="font-semibold text-foreground text-[10px]">CONTRACT CLAUSE SIMPLIFIER</span>
        </div>
        <span className="text-[9px] text-rose-500 font-semibold px-1.5 py-0.5 rounded border border-rose-950/20 dark:border-rose-950 bg-rose-500/5">
          NDA Draft
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {/* Complex Legalese Box */}
        <div className="bg-rose-500/10 dark:bg-rose-950/20 border border-rose-500/20 rounded p-2.5">
          <span className="text-[8px] text-rose-600 dark:text-rose-400 uppercase tracking-wide block mb-1">Raw Legal Text</span>
          <p className="text-[10px] text-rose-900 dark:text-rose-300 leading-relaxed font-sans">
            "...either contracting party may, at its sole and absolute discretion, terminate this Agreement upon prior written notice of thirty (30) days..."
          </p>
        </div>

        {/* Simplified Box */}
        <div className="bg-emerald-500/10 dark:bg-emerald-950/20 border border-emerald-500/20 rounded p-2.5">
          <span className="text-[8px] text-emerald-600 dark:text-emerald-400 uppercase tracking-wide block mb-1">Simplified Explanation</span>
          <p className="text-[10px] text-emerald-800 dark:text-emerald-300 leading-relaxed font-sans font-semibold">
            "Either party can end the agreement at any time, but must give a 30-day written notice."
          </p>
        </div>
      </div>
    </div>
  )
}

// Perfect Resume Widget
function PerfectResumeWidget() {
  return (
    <div className="w-full border border-border bg-card shadow-lg rounded-lg overflow-hidden font-mono text-xs p-4 flex flex-col gap-3">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-border pb-2.5">
        <div className="flex items-center gap-2">
          <GithubLogo className="size-4 text-indigo-400" />
          <span className="font-semibold text-foreground text-[10px]">LINKEDIN RESUME IMPORTER</span>
        </div>
        <span className="text-[9px] text-zinc-500">API Sync Active</span>
      </div>

      {/* Mapping Visualization */}
      <div className="bg-zinc-100 dark:bg-zinc-900/40 border border-border/60 rounded p-3 flex flex-col gap-2.5">
        <div className="flex justify-between items-center text-[10px]">
          <div className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-semibold">
            LinkedIn Profile
          </div>
          <span className="text-zinc-400 dark:text-zinc-600">─────►</span>
          <div className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold">
            PDF Resume
          </div>
        </div>

        <div className="space-y-1.5 text-[10px] text-zinc-600 dark:text-zinc-400">
          <div className="flex justify-between border-b border-border/20 pb-1">
            <span>Profile Data (Bio & Title)</span>
            <span className="text-zinc-950 dark:text-foreground font-semibold">✓ Imported</span>
          </div>
          <div className="flex justify-between border-b border-border/20 pb-1">
            <span>Work History (Roles)</span>
            <span className="text-zinc-950 dark:text-foreground font-semibold">✓ Auto-Compiled</span>
          </div>
          <div className="flex justify-between">
            <span>Skills & Certificates</span>
            <span className="text-zinc-950 dark:text-foreground font-semibold">✓ Structured</span>
          </div>
        </div>
      </div>

      <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded py-2 text-center font-semibold text-[10px]">
        ✓ Built directly from LinkedIn profile data
      </div>
    </div>
  )
}
