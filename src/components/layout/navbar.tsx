'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Moon, Sun, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage or default to dark mode
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

  // Prevent hydration mismatch
  if (!mounted) {
    return null
  }

  const navItems = [
    // { name: 'Blog', href: '/blog', icon: '📰' },
    // { name: 'Notes', href: '/notes', icon: '📓' },
    { name: 'Projects', href: '/projects', icon: '☕' },
    { name: 'About Me', href: '/about', icon: '💁🏻' }
  ]

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded">
              <span className="text-xs">💻</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">dias.dev</span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="rounded-full p-2 text-gray-600 hover:cursor-pointer dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 pt-4">
            <div className="space-y-1 mb-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 text-base font-medium text-gray-700 hover:cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
            <div className="text-sm border-t border-gray-200 dark:border-gray-800 pt-4">
              <p className="text-gray-900 dark:text-white font-semibold mb-3">Stay Connected</p>
              <div className="flex flex-col space-y-2 text-gray-600 dark:text-gray-400">
                <Link target="_blank" href="mailto:diasnormann@gmail.com" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Email
                </Link>
                <Link target="_blank" href="https://linkedin.com/in/diasnormann" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  LinkedIn
                </Link>
                <Link target="_blank" href="https://instagram.com/diasnormann" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Instagram
                </Link>
                <Link target="_blank" href="https://github.com/diasoy" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Github
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 h-screen w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-y-auto">
        <div className="p-8">
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded">
                <span className="text-xs">💻</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">dias.dev</span>
            </Link>
            <button
              onClick={toggleDarkMode}
              className="rounded-full p-2 text-gray-600 hover:cursor-pointer dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* About Me Section */}
          <div className="mb-8">
            <h2 className="text-gray-900 dark:text-white font-semibold mb-3">About Me</h2>
            <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
              I&apos;m <span className="text-green-600 dark:text-green-400">Dias Norman</span>, software engineer and open-source creator. This is my digital garden. 🌱
            </p>
          </div>

          {/* Navigation */}
          <nav className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Stay Connected */}
          <div className="text-sm">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Stay Connected</h3>
            <div className="flex flex-col space-y-2">
              <Link target="_blank" href="mailto:diasnormann@gmail.com" className="text-gray-700 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Email
              </Link>
              <Link target="_blank" href="https://linkedin.com/in/diasnormann" className="text-gray-700 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                LinkedIn
              </Link>
              <Link target="_blank" href="https://instagram.com/diasnormann" className="text-gray-700 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Instagram
              </Link>
              <Link target="_blank" href="https://github.com/diasoy" className="text-gray-700 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Github
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}