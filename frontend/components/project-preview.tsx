import { motion } from "motion/react"

interface ProjectPreviewProps {
  image: string
  liveUrl: string
}

export function ProjectPreview({ image, liveUrl }: ProjectPreviewProps) {
  // Extract domain name for the mock URL bar
  const getDisplayUrl = (url: string) => {
    if (!url || url === "#") return "project.local"
    try {
      const parsed = new URL(url)
      return parsed.hostname.replace(/^www\./, "")
    } catch {
      return url.replace(/https?:\/\//, "").replace(/^www\./, "")
    }
  }

  const domain = getDisplayUrl(liveUrl)

  return (
    <motion.a
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full relative"
      // Subtle float effect to make the preview feel alive
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="w-full bg-zinc-900/10 dark:bg-black/20 border border-border/40 rounded-lg overflow-hidden shadow-xl backdrop-blur-md">
        {/* Mock Browser Shell Header */}
        <div className="bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-md px-4 py-2 border-b border-border flex items-center justify-between select-none">

          {/* Controls: Mac-like dots */}
          <div className="flex items-center gap-1.5 w-[80px]">
            <div className="size-2.5 rounded-full bg-rose-500/80" />
            <div className="size-2.5 rounded-full bg-amber-500/80" />
            <div className="size-2.5 rounded-full bg-emerald-500/80" />
          </div>

          {/* Mock Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-3 text-zinc-500 dark:text-zinc-400 mx-3">
            <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </div>

          {/* URL Address Bar */}
          <div className="flex-1 max-w-[280px] mx-auto flex items-center justify-center gap-1.5 px-3 py-1 rounded bg-zinc-300/80 dark:bg-zinc-800/40 border-0 text-zinc-600 dark:text-zinc-300 text-[10px] font-mono select-none">
            {/* Secure Padlock Icon */}
            <svg className="size-3 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
            </svg>
            <span className="truncate">{domain}</span>
          </div>

          {/* Symmetrical spacing helper */}
          <div className="w-[80px] hidden sm:block" />
        </div>

        {/* Browser Content Frame */}
        <div className="relative w-full overflow-hidden bg-white dark:bg-black rounded-md">
          <img
            src={image}
            alt={`${domain} screenshot`}
            loading="lazy"
            className="w-full h-auto block object-top brightness-110 dark:brightness-100"
          />
        </div>
      </div>
    </motion.a>
  )
}
