interface ListItemProps { 
  content: string
  href: string
}

const ListItem: React.FC<ListItemProps> = ({content, href}) => (
  <a href={href} className="text-base sm:text-xl hover:scale-110">
    {content}
  </a>
)

const ListDot: React.FC = () => (
  <div className="w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] rounded-full bg-black dark:bg-white"></div>
)

interface RegisterProps { }

const Footer: React.FC<RegisterProps> = () => {
  return (
    <footer className="
      flex flex-col justify-center items-center
      gap-5 p-10 bg-gradient-to-t
      dark:from-black dark:via-[#0F0F0F]
      from-white via-[#F0F0F0]
    ">
      <h3 className="text-lg sm:text-xl text-center font-semibold">
        © 2023 Brenno Rodrigues. All rights reserved.
      </h3>

      <div className="flex items-center gap-4">
        <ListItem
          href="https://twitter.com/brennokkkk"
          content="Twitter"/>
        
        <ListDot/>
        
        <ListItem
          href="https://github.com/bronen"
          content="Github"/>
        
        <ListDot/>

        <ListItem
          href="https://www.linkedin.com/in/brennorodriguess/"
          content="Linkedin"/>
      </div>
    </footer>
  )
}

export default Footer