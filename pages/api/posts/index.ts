import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../helpers/db'

const getAllPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  const results = await prisma.post.findMany({})

  const posts = results.map(result => ({
    id: result.id,
    title: result.title,
    content: result.content,
    tags: result.tags.split(';'),
    createdAt: result.createdAt.toLocaleDateString(),
    updatedAt: result.updatedAt.toLocaleDateString()
  }))

  return res.json(posts)
}

const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, content, tags } = req.body

  if(!title || !content)
    return res.json({})

  try{
    const result = await prisma.post.create({
      data: {
        title, content, tags: tags.join(';')
      },
    })

    const post = {
      title: result.title,
      content: result.content,
      tags: tags.split(';')
    }

    return res.json(post)

  }catch(error){
    return res.json({error})
  }
}

export default async(req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method){
    case "GET":
      return await getAllPosts(req, res)

    case "POST":
      return await createPost(req, res)

    default:
      return res.status(405).send("Method Not Allowed")
  }
}
