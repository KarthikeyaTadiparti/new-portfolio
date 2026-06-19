import { motion } from "motion/react"
import { ArrowRightIcon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center px-6 py-12 md:py-24 overflow-hidden border-b border-border bg-background scroll-mt-14 md:scroll-mt-8">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
        
        {/* Left Column: Context Storytelling */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
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
          <div className="grid grid-cols-3 gap-4 border-t border-b border-border py-4 font-mono max-w-xl w-full text-center">
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
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
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
          </div>
        </div>

        {/* Right Column: Professional Profile Image */}
        <div className="lg:col-span-5 w-full flex items-center justify-center relative min-h-[360px] md:min-h-[440px] lg:min-h-[500px] order-1 lg:order-2">
          
          {/* Main Sized Container (holds image and absolute overlays) */}
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] flex items-center justify-center">
            
            {/* Background Decoration: Radial Gradient */}
            <div 
              className="absolute -inset-10 rounded-full pointer-events-none z-0 text-foreground opacity-[0.12]"
              style={{
                background: 'radial-gradient(circle at 65% 50%, currentColor 0%, transparent 70%)'
              }}
            />

            {/* Background Decoration: Dotted Matrix Pattern */}
            <div 
              className="absolute -inset-24 sm:-inset-32 lg:-inset-40 opacity-45 pointer-events-none z-0 text-foreground"
              style={{
                backgroundImage: 'radial-gradient(currentColor 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px',
                WebkitMaskImage: 'radial-gradient(circle, black 20%, transparent 80%)',
                maskImage: 'radial-gradient(circle, black 20%, transparent 80%)',
              }}
            />

            {/* Glow Layer 1: Soft glow */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute inset-0 rounded-full bg-foreground/15 blur-[80px] pointer-events-none z-0" 
            />

            {/* Glow Layer 2: Secondary glow ring */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute inset-0 rounded-full bg-foreground/8 blur-[120px] pointer-events-none z-0" 
            />

            {/* Glow Layer 3: Animated pulse circle */}
            <motion.div
              className="absolute inset-0 rounded-full bg-foreground/10 blur-[50px] pointer-events-none z-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                scale: [1, 1.05, 1],
              }}
              transition={{
                opacity: { delay: 0.8, duration: 0.8 },
                scale: {
                  delay: 1.6,
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }
              }}
            />

            {/* Profile Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full h-full rounded-full overflow-hidden border border-white/15 z-10 bg-zinc-950"
            >
              <img 
                src="/photo.webp" 
                alt="Karthikeya Tadiparti"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
