'use client'

import { useEffect, useState, type ComponentType } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FolderKanban, Laptop, Menu, Moon, Sun, UserRound, X } from 'lucide-react'

type NavItem = {
  name: string
  href: string
  icon: ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { name: 'Projects', href: '/projects', icon: FolderKanban },
  { name: 'About Me', href: '/about', icon: UserRound },
]

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = savedTheme === 'dark' || !savedTheme

    setIsDarkMode(prefersDark)
    if (prefersDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)

    if (newMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const isActiveHref = (href: string) => {
    if (!pathname) return false
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const navItemClass = (href: string, size: 'mobile' | 'desktop') => {
    const base =
      size === 'mobile'
        ? 'flex items-center space-x-3 rounded-xl px-3 py-2 text-base font-medium transition-all duration-200'
        : 'flex items-center space-x-3 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200'

    if (isActiveHref(href)) {
      return [
        base,
        'bg-white/72 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_10px_24px_rgba(15,23,42,0.08)]',
        'dark:bg-white/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_12px_24px_rgba(0,0,0,0.3)]',
      ].join(' ')
    }

    return [
      base,
      'text-muted-foreground hover:text-foreground hover:bg-white/46',
      'dark:hover:bg-white/8',
    ].join(' ')
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      <div className="glass-surface lg:hidden fixed top-0 left-0 right-0 z-50 rounded-b-3xl border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-glass-border bg-glass-muted/75">
              <Laptop className="h-4 w-4 text-sky-600 dark:text-sky-300" />
            </div>
            <span className="text-xl font-bold text-foreground">dias.dev</span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="rounded-full border border-glass-border bg-glass-muted/80 p-2 text-muted-foreground hover:cursor-pointer hover:bg-glass-surface hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full border border-glass-border bg-glass-muted/80 p-2 text-muted-foreground hover:cursor-pointer hover:bg-glass-surface hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 rounded-2xl border border-glass-border bg-glass-muted/75 p-4">
            <div className="mb-6 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={navItemClass(item.href, 'mobile')}
                    aria-current={isActiveHref(item.href) ? 'page' : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
            <div className="border-t border-border/70 pt-4 text-sm">
              <p className="mb-3 font-semibold text-foreground">Stay Connected</p>
              <div className="flex flex-col space-y-2 text-muted-foreground">
                <Link target="_blank" href="mailto:diasnormann@gmail.com" className="hover:text-foreground transition-colors">
                  Email
                </Link>
                <Link target="_blank" href="https://linkedin.com/in/diasnormann" className="hover:text-foreground transition-colors">
                  LinkedIn
                </Link>
                <Link target="_blank" href="https://instagram.com/diasnormann" className="hover:text-foreground transition-colors">
                  Instagram
                </Link>
                <Link target="_blank" href="https://github.com/diasoy" className="hover:text-foreground transition-colors">
                  Github
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <aside className="glass-surface hidden lg:block fixed left-2 top-2 h-[calc(100vh-1rem)] w-80 overflow-y-auto rounded-3xl">
        <div className="p-8">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-glass-border bg-glass-muted/75">
                <Laptop className="h-4 w-4 text-sky-600 dark:text-sky-300" />
              </div>
              <span className="text-xl font-bold text-foreground">dias.dev</span>
            </Link>
            <button
              onClick={toggleDarkMode}
              className="rounded-full border border-glass-border bg-glass-muted/80 p-2 text-muted-foreground hover:cursor-pointer hover:bg-glass-surface hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          <div className="mb-8">
            <h2 className="mb-3 font-semibold text-foreground">About Me</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I&apos;m <span className="text-sky-600 dark:text-sky-300">Dias Norman</span>, software engineer and open-source creator. This is my digital garden.
            </p>
          </div>

          <nav className="mb-8 border-b border-border/70 pb-6">
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={navItemClass(item.href, 'desktop')}
                    aria-current={isActiveHref(item.href) ? 'page' : undefined}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </nav>

          <div className="text-sm">
            <h3 className="mb-3 font-semibold text-foreground">Stay Connected</h3>
            <div className="flex flex-col space-y-2">
              <Link target="_blank" href="mailto:diasnormann@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                Email
              </Link>
              <Link target="_blank" href="https://linkedin.com/in/diasnormann" className="text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </Link>
              <Link target="_blank" href="https://instagram.com/diasnormann" className="text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </Link>
              <Link target="_blank" href="https://github.com/diasoy" className="text-muted-foreground hover:text-foreground transition-colors">
                Github
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
