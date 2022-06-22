import Link from 'next/link'

import ThemeIcon from './ThemeIcon'

const HomeButton = () => (
  <Link href='/'>
    <a href="#" id='logo'
      className={`
        transition-all duration-1000

        flex justify-center items-center
        text-xl font-bold	hover:underline

        text-stone-300 hover:text-stone-900
        dark:text-stone-900 dark:hover:text-stone-300

        bg-stone-900 hover:bg-stone-300
        dark:bg-stone-300 dark:hover:bg-stone-900

        font-mono
      `}
    >
      Hello World
    </a>
  </Link>
)

const NavItem = ({children, href}) => (
  <Link href={href}>
    <button className='
      bg-stone-200 dark:bg-stone-800
      hover:bg-stone-100 hover:dark:bg-stone-700
      p-1 w-full rounded hover:underline
    '>{children}</button>
  </Link>
)

export default () => (
  <header className='grid grid-cols-header bg-stone-900 font-sans'>
    <HomeButton/>
    <nav className='flex justify-around gap-2 bg-stone-300 dark:bg-stone-900 p-2'>
      <NavItem href='/'>one</NavItem>
      <NavItem href='/'>two</NavItem>
      <NavItem href='/blog'>Blog</NavItem>
    </nav>
    <ThemeIcon/>
  </header>
)