import Image from 'next/image'

export const ResumeHeader: React.FC = () => (
  <section className="flex flex-col lg:flex-row justify-between items-center px-10 md:px-20 gap-5 mb-10">
    <div className="hidden lg:block relative aspect-square h-full shadow-xl">
      <Image
        className="rounded"
        src="https://github.com/bronen.png"
        alt="Picture of me on github"
        fill sizes="100vw"
      />
    </div>
    <div className="hidden md:flex flex-col text-5xl font-mono">
      <b>{'<BRENNO P.'}</b>
      <b>{'RODRIGUES/>'}</b>
    </div>
    <div className="flex flex-col text-center lg:text-left">
      <p>Brazil</p>
      <p>Rio de Janeiro, RJ</p>
      <hr className="my-1" />
      <a className="hover:underline" href="tel:5521964408880">+55 (21) 96440-8880</a>
      <a className="hover:underline" href="mailto:brennopereira6@gmail.com">brennopereira6@gmail.com</a>
      <a className="hover:underline" href="https://github.com/bronen">github.com/bronen</a>
      <a className="hover:underline" href="https://linktr.ee/brennokkkk">@brennokkkk</a>
    </div>
  </section>
)

export const ResumeDescription: React.FC = () => {
  return (
    <section>
      <p className="text-justify px-20">
        I have been learning about programming and Python since I was twelve.
        However I started to study JavaScript in 2019 and JavaScript became my
        main language on the back-end with NodeJs and on the Front-end with
        ReactJs and on both with NextJs. Since that I have been building
        Full-Stack applications and trying to learn everything I can.
      </p>
    </section>
  )
}

export const ResumeExperience: React.FC = () => (
  <section className="flex flex-col gap-3">
    <h1 className="font-mono text-2xl">PROFESSIONAL EXPERIENCE</h1>

    <hr />

    <div className="flex flex-col gap-10">
      <div className="flex flex-col">
        <span className="font-bold text-lg">Front-end Developer</span>
        <i>Viddy :: Sales Delivery System</i>
        <span className="font-semibold text-sm">October 2022 - Present</span>
        <ul className="list-disc list-inside">
          <li>Creating and fixing react applications using Redux,
            Redux-saga, SASS and a lot of front-end techs.</li>
        </ul>
      </div>

      <div className="flex flex-col">
        <span className="font-bold text-lg">Software Developer</span>
        <i>QG Security ® | Security & Intelligence</i>
        <span className="font-semibold text-sm">March 2022 - Present</span>
        <ul className="list-disc list-inside">
          <li>Back-end development with Node.js;</li>

          <li>Python development with chat bots doing webhooks using flask,
            WebScrapping Twitter with selenium and a lot of unit tests;</li>

          <li>Front-end development with React.js and Vue.js using
            Typescript, Bootstrap and google maps api;</li>
        </ul>
      </div>

      <div className="flex flex-col">
        <span className="font-bold text-lg">Freelance Software Developer</span>
        <span className="font-semibold text-sm">October 2021</span>
        <ul className="list-disc list-inside">
          <li>Web system development coded with JavaScript using Node.js,
            express, mongoDB and EJS to solve a delivery management problem.</li>
        </ul>
      </div>

      <div className="flex flex-col">
        <span className="font-bold text-lg">Freelance Software Developer</span>
        <span className="font-semibold text-sm">May 2021</span>
        <ul className="list-disc list-inside">
          <li>Desktop program development with Python3 using PySimpleGUI
            (TKinter), SQLite3 and fetching data from external web APIs;</li>
        </ul>
      </div>
    </div>
  </section>
)

export const ResumeEducation: React.FC = () => (
  <section className="flex flex-col gap-3">
    <h1 className="font-mono text-2xl">EDUCATION</h1>
    <hr />
    <div>
      <p className='font-bold'>Tech Course</p>
      <p>The Complete Node.js Developer Course</p>
      <p>2021</p>
      <p>Udemy</p>
    </div>
    <div>
      <p className='font-bold'>Tech Course</p>
      <p>React - The Complete Guide</p>
      <p>2021</p>
      <p>Udemy</p>
    </div>
  </section>
)

export const ResumeSkills = () => (
  <section className="flex flex-col gap-3">
    <h1 className="font-mono text-2xl">SKILLS & PROFICIENCIES</h1>
    <hr />
    <ul className="list-disc list-inside">
      <li>HTML5, CSS3, JavaScript, SQL, Python;</li>
      <li>React.js and Node.Js;</li>
      <li>Docker and Cloud development;</li>
      <li>Teamwork, multitasking, attention to detail;</li>
      <li>Software development;</li>
    </ul>
  </section>
)

export const ResumeLanguages = () => (
  <section className="flex flex-col gap-3">
    <h1 className="font-mono text-2xl">LANGUAGES</h1>
    <hr />
    <ul className="list-disc list-inside">
      <li>Brazilian Portuguese (Native)</li>
      <li>American English (Conversational)</li>
      <li>Spanish (Basic)</li>
    </ul>
  </section>
)

export const Resume: React.FC = () => {
  return (
    <>
      <ResumeHeader />
      <ResumeDescription />
      <div className="flex flex-col md:flex-row justify-between gap-10 py-10 px-20">
        <aside className="md:max-w-[55vw]">
          <ResumeExperience />
        </aside>
        <aside className="flex flex-col gap-5">
          <ResumeEducation />
          <ResumeSkills />
          <ResumeLanguages />
        </aside>
      </div>
    </>
  )
} 