import type { NextApiRequest, NextApiResponse } from 'next'
import NotionService from '../../../services/notion.service'

type Response = {
  name: string,
  email: string,
  content: string,
  created_at: string,
  url: string,
}

type ErrorResponse = { error: string }

const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const contactHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Response | ErrorResponse>
) => {
  if (req.method !== 'POST')
    return res.status(400).json({ error: 'Cannot [POST] => [/api/notion/contact]' })

  const { name, email, content }: Record<string, string> = req.body

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof content !== 'string'
  ) return res.status(422).json({ error: 'Invalid name, email or content' })

  if ( !emailRegex.test(email) )
    return res.status(422).json({ error: 'Invalid email' })

  try {
    const service = new NotionService(process.env.NOTION_TOKEN!)

    const payload = service.formatContactPayload(name, email, content)

    const contact = await service.fetch('POST', '/', payload)

    return res.json(contact)
  } catch (e) {
    console.error(e)
    res.status(422).json({ error: 'See logs' })
  }
}

export default contactHandler