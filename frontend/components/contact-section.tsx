import { useState } from "react"
import { 
  GithubLogoIcon, 
  LinkedinLogoIcon, 
  FileTextIcon, 
  ArrowSquareOutIcon
} from "@phosphor-icons/react"

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const email = "kartikeyatadiparti@gmail.com"

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const channels = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/karthikeya10/",
      icon: <LinkedinLogoIcon className="size-4 shrink-0" />,
      label: "linkedin.com/in/karthikeya10"
    },
    {
      name: "GitHub",
      url: "https://github.com/KarthikeyaTadiparti",
      icon: <GithubLogoIcon className="size-4 shrink-0" />,
      label: "github.com/KarthikeyaTadiparti"
    },
    {
      name: "Curriculum Vitae",
      url: "/KarthikeyaTadiparti_Resume.pdf",
      icon: <FileTextIcon className="size-4 shrink-0" />,
      label: "Download Resume PDF",
      download: "KarthikeyaTadiparti_Resume.pdf"
    }
  ]

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto w-full bg-background relative font-mono">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col mb-16 text-left">
        {/* <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mb-2 block select-none">
          // ESTABLISH CONNECTION
        </span> */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Contact
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start relative z-10">
        
        {/* Left Column: Email Typographic Module (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left lg:pr-12">
          <h3 className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
            Let's discuss internship opportunities, software engineering roles, or system design collaboration.
          </h3>

          <div className="space-y-4 pt-4">
            <button 
              onClick={handleCopy}
              className="text-left w-fit select-all group cursor-pointer outline-none"
              title="Click to copy email address"
            >
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors duration-200 break-all select-all">
                {email}
              </span>
            </button>
            
            <div className="flex items-center gap-3 text-xs">
              <button 
                onClick={handleCopy} 
                className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 underline transition-colors cursor-pointer font-semibold"
              >
                {copied ? "✓ Copied to clipboard" : "Click to copy email"}
              </button>
              <span className="text-zinc-300 dark:text-zinc-800 select-none">|</span>
              <a 
                href={`mailto:${email}`}
                className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 underline transition-colors font-semibold"
              >
                Open mail client
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Channels (5 cols) with Left Border Divider */}
        <div className="lg:col-span-5 flex flex-col space-y-8 lg:border-l lg:border-border lg:pl-16 text-left w-full">
          <span className="text-zinc-500 text-[9px] uppercase tracking-[0.15em] border-b border-border pb-2 block select-none">
            // DIRECT CHANNELS
          </span>

          <div className="flex flex-col gap-4">
            {channels.map((channel) => (
              <a
                key={channel.name}
                href={channel.url}
                download={channel.download}
                target={channel.download ? undefined : "_blank"}
                rel={channel.download ? undefined : "noopener noreferrer"}
                className="flex items-center justify-between p-3.5 rounded-lg border border-border bg-zinc-50/50 dark:bg-card/25 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100/30 dark:hover:bg-card/40 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                    {channel.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                      {channel.name}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      {channel.label}
                    </span>
                  </div>
                </div>
                <ArrowSquareOutIcon className="size-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
