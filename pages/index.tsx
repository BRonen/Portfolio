import { useEffect, useState } from 'react'
import Head from 'next/head'

import { Header, ProfessionalExperience, Education } from '../components/resume'
import { Languages, Skills } from '../components/resume'

function Main(){
  return(
    <div className='flex flex-col justify-center items-center mb-12'>
      <div className='flex flex-col justify-center items-center'>
        <Header/>

        <div className='flex justify-center items-center w-full'>
          <p className='text-justify font-sans w-[90vw] md:w-[70vw]'>
            I have been learning about programming since I was thirteen.
            I started to study Python and JavaScript however in 2019, JavaScript became my main language.
            Both on the back-end with NodeJs and on the Front-end with ReactJs and NextJs
            I have been building Full-Stack applications.
          </p>
        </div>

        <div className='flex flex-col md:flex-row w-full justify-center items-center md:gap-[5vw] mt-8'>
          <ProfessionalExperience/>

          <aside className='flex flex-col w-[90vw] md:w-[30vw]'>
            <Education/>
            
            <Skills/>

            <Languages/>
          </aside>

        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return(
    <>
      <Head>
        <title>Brenno Rodrigues</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Main/>
    </>
  )
}
