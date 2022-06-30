import { NextApiRequest, NextApiResponse } from 'next'
import { getPostById, updatePostById, deletePostById } from '../../../helpers/api/posts'

import { IPost } from '../../../types/posts'

const getPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string

  const post: IPost | undefined = await getPostById(id)

  if(!post)
    return res.status(404).json({error: 'Post not found'})

  return res.json(post)
}

const updatePost = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string
  const { title, content } = req.body

  if(!id)
    return res.json({error: 'invalid post id'})

  if(!title && !content)
    return res.json({error: 'invalid data input'})

  const post = await updatePostById(id, {title, content})

  return res.json(post)
}
  
const deletePost = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string

  const post = await deletePostById(id)

  return res.json(post)
}

export default async(req: NextApiRequest, res: NextApiResponse) => {
  try{
    switch (req.method){
      case "GET":
        return await getPost(req, res)
        
      case "PUT":
        return await updatePost(req, res)

      case "DELETE":
        return await deletePost(req, res)

      default:
        return res.status(405).send("Method Not Allowed")
    }
  }catch(e){
    res.status(500).json({error: 'Server internal error'})
  }
}
