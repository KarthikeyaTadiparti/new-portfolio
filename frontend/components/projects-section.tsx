import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { 
  GithubLogoIcon, 
  ArrowSquareOutIcon,
  CheckCircleIcon
} from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { ProjectPreview } from "./project-preview"

interface ProjectData {
  id: string
  title: string
  subtitle: string
  tech: string[]
  problem: string
  solution: string
  impact: string[]
  github: string
  demo: boolean
  demoLink: string
  homepageScreenshot: string
  liveUrl: string
}

export function ProjectsSection() {
  const [activeIdx, setActiveIdx] = useState(0)

  const projects: ProjectData[] = [
    {
      id: "smart-recruiter",
      title: "Smart Recruiter",
      subtitle: "AI-Powered Voice Interview Platform",
      tech: ["React.js", "Tailwind CSS", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Redis"],
      problem: "Screening hundreds of candidates takes days, and manual interviews can be slow, expensive, and biased.",
      solution: "Built an AI voice assistant that interviews candidates, records transcripts, and scores skills automatically.",
      impact: [
        "Reduced recruiter screening time by approximately 40-60%",
        "Implemented Redis caching for frequently accessed data, significantly reducing API latency and improving backend scalability"
      ],
      github: "https://github.com/KarthikeyaTadiparti/Smart-Recruiter",
      demo: false,
      demoLink: "#",
      homepageScreenshot: "/smart_recruiter.png",
      liveUrl: "https://smartrecruiter.ai"
    },
    {
      id: "legal-assistant",
      title: "Legal Assistant",
      subtitle: "Custom AI RAG Document Simplifier",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "n8n", "RAG Pipeline"],
      problem: "Understanding contracts, agreements, and legal documents can be challenging for users without legal expertise.",
      solution: "Developed an AI Assistant using n8n and vector databases that reads agreements and explains them in simple English.",
      impact: [
        "Built the entire application in a 24-hour hackathon window",
        "Implemented a RAG-based knowledge pipeline for intelligent legal document analysis"
      ],
      github: "https://github.com/KarthikeyaTadiparti/Legal-Assistant-n8n",
      demo: false,
      demoLink: "#",
      homepageScreenshot: "/legalassistant.png",
      liveUrl: "https://legalassistant.ai"
    },
    {
      id: "perfect-resume",
      title: "Perfect Resume",
      subtitle: "Dynamic LinkedIn Profile to PDF CV Builder",
      tech: ["React.js", "Tailwind CSS","Redux", "Node.js", "Express.js", "MongoDB"],
      problem: "Formatting resumes manually is slow, and copying info from LinkedIn is tedious and breaks layouts.",
      solution: "Created an automated Resume Builder that pulls data from LinkedIn profiles and creates professional resume PDFs instantly.",
      impact: [
        "Reduced manual resume data entry by 70% through LinkedIn profile auto-population",
        "Built an end-to-end resume builder with live preview and one-click PDF downloads"
      ],
      github: "https://github.com/KarthikeyaTadiparti/Perfect-Resume",
      demo: true,
      demoLink: "https://perfect-resume-sable.vercel.app/",
      homepageScreenshot: "/perfectresume.png",
      liveUrl: "https://perfectresume.io"
    },
    {
      id: "easy-bookings",
      title: "Easy Bookings",
      subtitle: "Rental Property Listing & Booking Platform",
      tech: ["EJS", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
      problem: "Traditional rental property listing services can be difficult for hosts to manage securely and for guests to browse responsively.",
      solution: "Developed a full-stack property listing platform where users can easily list properties, book stays, leave reviews, and interact with hosts.",
      impact: [
        "Implemented robust role-based access control (RBAC) to ensure secure host-guest listing interactions",
        "Built a responsive, server-side rendered UI utilizing EJS templating and Bootstrap styling"
      ],
      github: "https://github.com/KarthikeyaTadiparti/Easy-Bookings",
      demo: true,
      demoLink: "https://major-project-vx5g.onrender.com/listing",
      homepageScreenshot: "/easybookings.png",
      liveUrl: "https://easybooking.com"
    }
  ]

  const activeProject = projects[activeIdx]

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto w-full border-b border-border bg-background relative scroll-mt-26 md:scroll-mt-12 lg:scroll-mt-8">
      {/* Eyebrow and Section Header */}
      <div className="flex flex-col space-y-4 mb-8 text-left max-w-2xl font-mono">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Projects
        </h2>
      </div>

      {/* SaaS Style Tabs Navigation */}
      <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-border/10">
        {projects.map((project, idx) => {
          const isActive = activeIdx === idx
          return (
            <button
              key={project.id}
              onClick={() => setActiveIdx(idx)}
              className={`relative px-4 py-2 rounded-lg font-mono text-xs md:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer border select-none ${
                isActive 
                  ? "border-foreground text-foreground bg-foreground/5" 
                  : "border-border text-muted-foreground hover:border-border hover:text-foreground bg-muted/5"
              }`}
            >
              <span className={`size-1.5 shrink-0 rounded-full transition-colors duration-300 ${
                isActive ? "bg-foreground animate-pulse" : "bg-zinc-600 dark:bg-zinc-400"
              }`} />
              <span>{project.title}</span>
            </button>
          )
        })}
      </div>

      {/* Carousel Project Showcase Frame */}
      <div className="relative min-h-[480px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            
            {/* Left Side: Content Specs (Column 7 on Desktop) */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold font-mono tracking-tight text-foreground">
                  {activeProject.title}
                </h3>
                <p className="text-base text-muted-foreground font-mono">
                  {activeProject.subtitle}
                </p>
              </div>

              {/* Technologies list */}
              <div className="flex flex-wrap gap-2">
                {activeProject.tech.map((t) => (
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
                    {activeProject.problem}
                  </p>
                </div>
                <div>
                  <span className="text-emerald-500 font-semibold uppercase tracking-wider block text-xs mb-1">
                    [Engineered Solution]
                  </span>
                  <p className="text-foreground leading-relaxed">
                    {activeProject.solution}
                  </p>
                </div>
              </div>

              {/* Bulleted metrics and impact */}
              <div className="space-y-2 font-mono">
                <span className="text-zinc-500 uppercase text-xs tracking-wider font-semibold block">
                  Key Metrics & Impact
                </span>
                <ul className="flex flex-col gap-2 text-sm">
                  {activeProject.impact.map((imp, index) => (
                    <li key={index} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                      <CheckCircleIcon className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2">
                <Button variant="outline" size="sm" className="bg-zinc-200/50 rounded-md font-mono text-xs cursor-pointer group" asChild>
                  <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                    <GithubLogoIcon className="size-4" />
                    Source Code
                  </a>
                </Button>
                {activeProject.demo && activeProject.demoLink && (
                  <Button variant="ghost" size="sm" className="rounded-md font-mono text-xs text-zinc-400 hover:text-foreground cursor-pointer" asChild>
                    <a href={activeProject.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                      Live Demonstration
                      <ArrowSquareOutIcon className="size-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Right Side: Browser Preview (Column 5 on Desktop) */}
            <div className="lg:col-span-5 w-full flex flex-col items-center gap-6">
              <ProjectPreview
                image={activeProject.homepageScreenshot}
                liveUrl={activeProject.liveUrl}
              />
              
              {/* Pagination Dots & Navigation Buttons */}
              <div className="flex items-center gap-4 select-none">
                <button
                  onClick={() => setActiveIdx((prev) => (prev === 0 ? projects.length - 1 : prev - 1))}
                  className="p-1.5 rounded border border-border/40 text-zinc-500 hover:text-foreground hover:border-border bg-card/25 transition-all duration-200 cursor-pointer flex items-center justify-center size-8"
                  aria-label="Previous project"
                >
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex items-center gap-2">
                  {projects.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveIdx(dotIdx)}
                      className={`size-2 rounded-full transition-colors duration-300 cursor-pointer ${
                        activeIdx === dotIdx 
                          ? "bg-emerald-500" 
                          : "bg-zinc-700 hover:bg-zinc-500"
                      }`}
                      aria-label={`Go to project ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveIdx((prev) => (prev === projects.length - 1 ? 0 : prev + 1))}
                  className="p-1.5 rounded border border-border/40 text-zinc-500 hover:text-foreground hover:border-border bg-card/25 transition-all duration-200 cursor-pointer flex items-center justify-center size-8"
                  aria-label="Next project"
                >
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
