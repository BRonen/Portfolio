import '../styles/globals.css'

import { ThemeProvider } from 'next-themes'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return(
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='grid grid-rows-layout h-screen'>
        <Header/>

        <Component {...pageProps}/>

        <Footer/>
      </div>
    </ThemeProvider>
  )
}