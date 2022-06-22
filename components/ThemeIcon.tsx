import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeIcon(){
  const {theme, setTheme} = useTheme()

  const isDark = (): boolean => (theme === 'dark')

  //don't render if not mounted yet
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  const themeChangeHandler = () => {
    if(!mounted)
      return

    return () => setTheme(isDark()? 'light' : 'dark')
  }

  return(
    <div
      className='flex justify-center items-center bg-stone-300 dark:bg-stone-900'
      onClick={themeChangeHandler()}
    >
      <div className={`transition-all duration-1000 ${isDark()? 'rotate-180' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 24 24">
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10v-20zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/>
        </svg>
      </div>
    </div>
  )
}