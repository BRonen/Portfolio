import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../helpers/db'

const readUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const users = await prisma.user.findMany({})

  return res.json({users})
}

const postUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email } = req.body

  if(!name || !email)
    return res.json({})

  try{
    const result = await prisma.user.create({
      data: {
        name, email
      },
    })

    return res.json(result)

  }catch(error){
    return res.json({error})
  }
}

export default async(req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method){
    case "GET":
      return await readUser(req, res)

    case "POST":
      return await postUser(req, res)

    default:
      return res.status(405).send("Method Not Allowed")
  }
}
