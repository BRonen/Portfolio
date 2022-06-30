import { NextApiRequest, NextApiResponse } from 'next'
import { getAllPosts, createPost } from '../../../helpers/api/posts'

import { IPost } from '../../../types/posts'

const getPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const posts: IPost[] = await getAllPosts()

  return res.json(posts)
}

const postPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, content, tags } = req.body

  if(!title || !content)
    return res.json({})

  const post: IPost = createPost({title, content, tags})    

  return res.json(post)
}

export default async(req: NextApiRequest, res: NextApiResponse) => {
  try{
    switch (req.method){
      case "GET":
        return await getPost(req, res)

      case "POST":
        return await postPost(req, res)

      default:
        return res.status(405).send("Method Not Allowed")
    }
  }catch(e){
    res.status(500).json({error: 'Server internal error'})
  }
}
