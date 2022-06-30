import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../helpers/api/db'

const readUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query

  const user = await prisma.user.findUnique({
    where: { id: Number(id) }
  })

  if(!user)
    return res.status(404).json({error: 'User not found'})

  return res.json(user)
}

const updateUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  const { name, email } = req.body

  if(!id)
    return res.json({error: 'invalid user id'})

  if(!name && !email)
    return res.json({error: 'invalid data input'})

  try{
    const result = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email }
    })

    return res.json(result)

  }catch(error){
    console.log(error)
    return res.json({error})
  }
}
  
const deleteUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  const { name, email } = req.body

  if(!name || !email || !id)
    return res.json({error: 'invalid data input'})

  try{
    const result = await prisma.user.delete({
      where: { id: Number(id) }
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
      
    case "PUT":
      return await updateUser(req, res)

    case "DELETE":
      return await deleteUser(req, res)

    default:
      return res.status(405).send("Method Not Allowed")
  }
}
