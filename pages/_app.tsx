import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'next-themes'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import Header from '../components/Header'
import Footer from '../components/Footer'

const queryClient = new QueryClient()

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return(
    <ThemeProvider enableSystem={true} attribute="class">
      <QueryClientProvider client={queryClient}>
        <Header/>
        <Component {...pageProps}/>
        <Footer/>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App