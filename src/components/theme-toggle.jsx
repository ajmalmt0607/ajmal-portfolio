'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors shadow-lg"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-blue-500" />
      ) : (
        <Moon className="w-5 h-5 text-blue-500" />
      )}
    </button>
  )
}