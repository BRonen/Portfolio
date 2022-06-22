import Image from 'next/image'

const ContactInfo = ({href, content}) => (
  <a className='hover:underline' href={`${href}`}>{content}</a>
)

export const Header = () => (
  <div className='
    flex flex-col md:flex-row
    justify-center items-center
    p-5 gap-3
    text-stone-900 dark:text-stone-300
  '>
    <div className='
      relative aspect-square h-full
      rounded shadow-lg
      shadow-stone-400 dark:shadow-black
    '>
      <Image className='rounded'
        src='https://github.com/bronen.png'
        alt='Picture of the author'
        layout='fill'
      />
    </div>
    <div className='flex items-center flex-col sm:flex-row gap-1'>
      <h1 className='
        flex flex-col justify-center items-center
        w-[50vw] text-3.5xl sm:text-5xl
        font-mono font-bold
      '>
        <span>{'<BRENNO P.'}</span>
        <span>{'RODRIGUES/>'}</span>
      </h1>

      <div className='flex flex-col text-base font-sans items-center'>
        <p>Brazil</p>
        <p className='mb-4'>Rio de Janeiro, RJ</p>

        <ContactInfo href='tel:5521964408880' content='+55 (21) 96440-8880'/>
        <ContactInfo href='mailto:brennopereira6@gmail.com' content='brennopereira6@gmail.com'/>
        <ContactInfo href='https://github.com/bronen' content='github.com/bronen'/>
        <ContactInfo href='https://linktr.ee/brennokkkk' content='@brennokkkk'/>
      </div>
    </div>
  </div>
)

export const ProfessionalExperience = () => (
  <div className='flex flex-col w-[90vw] md:w-[35vw]'>
    <h1 className='font-mono text-2xl'>PROFESSIONAL EXPERIENCE</h1>
    
    <hr className='my-4'/>

    <p className='flex flex-col gap-8'>
      <div className='flex flex-col gap-1'>
        <span className='font-semibold'>Junior Software Developer</span>
        <i>QG Security ® | Security & Intelligence</i>
        <span>March 2022 - Present</span>
        <ul className='list-disc list-inside'>
          <li>Development of chat bots in python with flask, SqlAlchemy, external services integration and unit tests.</li>

          <li>Development of a map integrated with google maps for risk management in ReactJS with Typescript, Vite and Styled Components.</li>
        </ul>
      </div>

      <div className='flex flex-col gap-1'>
        <span className='font-semibold'>Freelance Software Developer</span>
        <span>October 2021</span>
        <ul className='list-disc list-inside'>
          <li>Web system development coded with JavaScript using Node.js, express, mongoDB and EJS to solve a delivery management problem.</li>
        </ul>
      </div>

      <div className='flex flex-col gap-1'>
        <span className='font-semibold'>Freelance Software Developer</span>
        <span>May 2021</span>
        <ul className='list-disc list-inside'>
          <li>Desktop program developed coded with Python3 using PySimpleGUI (TKinter), SQLite3 and fetching data from external web APIs.</li>
        </ul>
      </div>
    </p>
  </div>
)

export const Education = () => (
  <>
    <h1 className='font-mono text-2xl'>EDUCATION</h1>
    <hr className='my-4'/>
    <p className='flex flex-col gap-5'>
      <div className='flex flex-col'>
        <span className='font-semibold'>Tech Course</span>
        <span>The Complete Node.js Developer Course</span>
        <span>2021</span>
        <span className='mb-5'>Udemy</span>

        <span className='font-semibold'>Tech Course</span>
        <span>React - The Complete Guide</span>
        <span>2021</span>
        <span>Udemy</span>
      </div>
    </p>
  </>
)

export const Skills = () => (
  <>
    <h1 className='font-mono text-2xl mt-8'>SKILLS & PROFICIENCIES</h1>
    <hr className='my-4'/>
    <p className='flex flex-col gap-5'>
      <ul className='list-disc list-inside'>
        <li>HTML5, CSS3, JavaScript, SQL, Python;</li>
        <li>React.js and Node.Js;</li>
        <li>Teamwork, multitasking, attention to detail;</li>
        <li>Software and web development;</li>
      </ul>
    </p>
  </>
)

export const Languages = () => (
  <>
    <h1 className='font-mono text-2xl mt-8'>LANGUAGES</h1>
    <hr className='my-4'/>
    <p className='flex flex-col gap-5'>
      <ul className='list-disc list-inside'>
        <li>Brazilian Portuguese (Native)</li>
        <li>American English (Conversational)</li>
        <li>Spanish (Basic)</li>
      </ul>
    </p>
  </>
)
