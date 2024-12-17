import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import * as React from 'react'

export function ModeToggle() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)

  // Sync with the current document state when the component mounts
  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setIsDarkMode(isDark)
  }, [])

  // Function to toggle the theme
  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode
    setIsDarkMode(newIsDarkMode)
    document.documentElement.classList.toggle('dark', newIsDarkMode)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="group"
      title="Toggle theme"
      onClick={toggleTheme}
    >
      <Sun
        className={`size-4 transition-all ${isDarkMode ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`}
      />
      <Moon
        className={`absolute size-4 transition-all ${isDarkMode ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
