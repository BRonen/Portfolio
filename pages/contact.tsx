import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

import FormMultiStep, { IFormReducerState } from '../components/MultiStepForm'
import Loading from '../components/Loading'

const USERNAME_REGEX = /^[a-zA-Z]+( +[a-zA-Z]+)*$/
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const initialState: IFormReducerState = {
  step: 0,
  steps: [
    { field: 'Name', value: '', type: 'text', validation: USERNAME_REGEX },
    { field: 'Email', value: '', type: 'email', validation: EMAIL_REGEX },
    { field: 'Content', value: '', type: 'textarea' }
  ]
}

const ContactPage: React.FC = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)

  const authorizationHandler = async ({ steps: rawData }: IFormReducerState) => {
    const parsedData: Record<string, string> = {}

    for (const { field, value } of rawData)
      parsedData[field.toLowerCase()] = value

    setIsLoading(true)

    try {
      await fetch('/api/notion/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedData),
      })

      await router.push('/')
    } catch (e) {
      console.error(e)
      setError(e)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Head>Contact me</Head>
      <main className="flex flex-col justify-start align-start px-20 h-full">
        <h1 className="text-3xl">Please contact me:</h1>
        {
          isLoading ?
            <Loading /> :
            <FormMultiStep onSubmit={authorizationHandler} initialState={initialState} />
        }
        {error && <small>{error}</small>}
      </main>
    </>
  )
}

export default ContactPage