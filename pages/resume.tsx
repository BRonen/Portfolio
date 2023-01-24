import Head from 'next/head'
import { Resume } from '../components/Resume'

interface RegisterProps{}

const IndexPage: React.FC<RegisterProps> = () => {
  return(
    <>
      <Head>
        <title>Brenno Rodrigues</title>
      </Head>
      <Resume/>
    </>
  )
}

export default IndexPage