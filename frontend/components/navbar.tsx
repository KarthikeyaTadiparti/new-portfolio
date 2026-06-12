import { useState, useEffect } from "react"

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero")

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
      const scrollPosition = window.scrollY + 120 // offset for height of navbar + breathing room

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i]
        const el = document.getElementById(item.id)
        if (el) {
          const top = el.offsetTop
          if (scrollPosition >= top) {
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

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/80 backdrop-blur-md transition-all duration-200 select-none">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between font-mono text-xs">
        
        {/* Logo/Name */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, "hero")}
          className="font-bold text-sm tracking-tight text-foreground hover:opacity-85 transition-opacity"
        >
          {"<KT />"}
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar max-w-[80%] py-1">
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
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </a>
            )
          })}
        </div>

      </div>
    </nav>
  )
}
