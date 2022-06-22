
const ListItem = ({children, href}) => (
  <a href={href} className={`
    transition-all
    font-bold
    text-xl hover:text-2xl
  `}>
    {children}
  </a>
)

const ListDot = () => <div className='w-2 h-2 rounded-full bg-stone-900'></div>

export default function Footer(){
  return(
    <footer className={`
      flex flex-col items-center p-6 gap-2
      bg-stone-300 text-stone-900
      dark:bg-stone-900 dark:text-stone-300
      font-mono
    `}>
      <h3 className='text-xl font-semibold'>
        © 2022 Brenno Rodrigues. All rights reserved.
      </h3>
      <div className='flex items-baseline gap-4 links'>
        <ListItem href='https://twitter.com/brennokkkk'>
          Twitter
        </ListItem>

        <ListDot/>

        <ListItem href='https://github.com/bronen'>
          Github
        </ListItem>

        <ListDot/>
        
        <ListItem href='https://www.linkedin.com/in/brennorodriguess/'>
          Linkedin
        </ListItem>
      </div>
    </footer>
  )
}
