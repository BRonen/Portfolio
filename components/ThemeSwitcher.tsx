import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface ThemeiconProps {
  fillColor: string
}

const ThemeIcon: React.FC<ThemeiconProps> = ({ fillColor }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={fillColor} viewBox="0 0 24 24">
      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10v-20zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
    </svg>
  )
}

const isDark = (theme: string): boolean => theme === 'dark'

export default function ThemeSwitcher() {
  const { theme, systemTheme, setTheme } = useTheme()

  // Get currentTheme from system default theme or light if not defined
  const currentTheme = theme !== 'system' && theme || systemTheme || 'light'

  //don't render if not mounted yet
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [theme, systemTheme, setTheme])

  if (!mounted) return null

  const themeChangeHandler = () => {
    if (!mounted)
      return

    return () => setTheme(isDark(currentTheme) ? 'light' : 'dark')
  }

  return (
    <div className={`
      duration-1000 hover:scale-125
      ${isDark(currentTheme) && 'rotate-180'}
    `} onClick={themeChangeHandler()}>
      <ThemeIcon fillColor={isDark(currentTheme)? '#FFFFFF' : '#000000'}/>
      <style global jsx>{`
          body { 
            background-color: ${ isDark(currentTheme)? '#0F0F0F' : '#F0F0F0' };
          }
      `}</style>
    </div>
  )
}