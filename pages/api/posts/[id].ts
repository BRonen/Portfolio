import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../helpers/db'

const getPostById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query

  const result = await prisma.post.findUnique({
    where: { id: Number(id) }
  })

  if(!result)
    return res.status(404).json({error: 'Post not found'})

  const post = {
    id: result.id,
    title: result.title,
    content: result.content,
    tags: result.tags.split(';'),
    createdAt: result.createdAt.toLocaleDateString(),
    updatedAt: result.updatedAt.toLocaleDateString()
  }
  
  console.log(post)

  return res.json(post)
}

const updatePostById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  const { title, email } = req.body

  if(!id)
    return res.json({error: 'invalid post id'})

  if(!title && !email)
    return res.json({error: 'invalid data input'})

  try{
    const result = await prisma.post.update({
      where: { id: Number(id) },
      data: { title, email }
    })

    return res.json(result)

  }catch(error){
    console.log(error)
    return res.json({error})
  }
}
  
const deletePostById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query

  try{
    const result = await prisma.post.delete({
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
      return await getPostById(req, res)
      
    case "PUT":
      return await updatePostById(req, res)

    case "DELETE":
      return await deletePostById(req, res)

    default:
      return res.status(405).send("Method Not Allowed")
  }
}
