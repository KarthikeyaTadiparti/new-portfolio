import { useState, useEffect } from "react"
import { SunIcon, MoonIcon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { motion, AnimatePresence } from "motion/react"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("hero")
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      // If at bottom of page, default to last section
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20
      if (isAtBottom) {
        setActiveSection(navItems[navItems.length - 1].id)
        return
      }

      const threshold = 80 // Navbar height (56px) + buffer

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i]
        const el = document.getElementById(item.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= threshold) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Run once on load to establish active state
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    scrollToSection(id)
  }

  return (
    <nav className={`sticky top-0 z-50 w-full border-b border-border/80 transition-all duration-200 select-none ${isOpen ? "bg-background" : "bg-background/80 backdrop-blur-md"}`}>
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between font-mono text-xs">
        
        {/* Logo/Name */}
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault()
            setIsOpen(false)
            setTimeout(() => {
              scrollToSection("hero")
            }, 100)
          }}
          className="font-bold text-sm tracking-tight text-foreground hover:opacity-85 transition-opacity"
        >
          {"<KT />"}
        </a>

        {/* Desktop Menu & Actions */}
        <div className="hidden md:flex items-center gap-6">
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`py-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors relative shrink-0 font-semibold cursor-pointer ${
                    isActive ? "text-zinc-950 dark:text-zinc-50" : "text-zinc-400 dark:text-zinc-500"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 rounded-full" />
                  )}
                </a>
              )
            })}
          </div>

          {/* Theme Switcher Button */}
          <Button
            variant="outline"
            size="icon-sm"
            className="rounded-md shrink-0 cursor-pointer h-8 w-8"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <SunIcon className="size-4 text-amber-500" />
            ) : (
              <MoonIcon className="size-4 text-indigo-500" />
            )}
          </Button>
        </div>

        {/* Mobile/Tablet Menu & Actions */}
        <div className="flex md:hidden items-center gap-3">
          {/* Theme Switcher Button */}
          <Button
            variant="outline"
            size="icon-sm"
            className="rounded-md shrink-0 cursor-pointer h-8 w-8"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <SunIcon className="size-4 text-amber-500" />
            ) : (
              <MoonIcon className="size-4 text-indigo-500" />
            )}
          </Button>

          {/* Hamburger Menu Toggle Button */}
          <Button
            variant="outline"
            size="icon-sm"
            className="rounded-md shrink-0 cursor-pointer h-8 w-8 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </Button>
        </div>

      </div>

      {/* Mobile/Tablet Dropdown Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-14 left-0 w-full bg-background border-b border-border overflow-hidden px-6 py-4 flex flex-col gap-3.5 shadow-lg z-40 md:hidden font-mono text-xs"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(false)
                    setTimeout(() => {
                      scrollToSection(item.id)
                    }, 100)
                  }}
                  className={`py-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-semibold cursor-pointer flex items-center justify-between ${
                    isActive ? "text-zinc-950 dark:text-zinc-50" : "text-zinc-400 dark:text-zinc-500"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  )}
                </a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
