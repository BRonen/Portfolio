import Head from 'next/head'
import Portfolio from '../components/Portfolio'

interface PortfolioProps{}

const PortfolioPage: React.FC<PortfolioProps> = () => {
  return(
    <>
      <Head>Portfolio</Head>
      <Portfolio/>
    </>
  )
}

export default PortfolioPage