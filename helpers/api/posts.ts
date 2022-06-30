import prisma from './db'

import { IPost } from '../../types/posts'

interface IRawPost extends Omit<IPost, 'tags' | 'createdAt' | 'updatedAt'>{
  tags: string
  createdAt: Date
  updatedAt: Date
}

const formatResult = (result: IRawPost): IPost => ({
  id: result.id,
  title: result.title,
  content: result.content,
  tags: result.tags.split(';'),
  createdAt: result.createdAt.toLocaleDateString(),
  updatedAt: result.updatedAt.toLocaleDateString()
})

export const getAllPosts = async (): Promise<IPost[]> => {
  const results: IRawPost[] = await prisma.post.findMany({})

  return results.map(formatResult)
}

export const getPostById = async (id: string): Promise<IPost | undefined> => {
  const result = await prisma.post.findUnique({
    where: { id: Number(id) }
  })

  if(!result)
    return

  return formatResult(result)
}

export const createPost = async ({title, content, tags}): Promise<IPost> => {
  const result = await prisma.post.create({
    data: {
      title, content, tags: tags.join(';')
    },
  })

  return formatResult(result)
}

export const updatePostById = async (id: string, {title, content}): Promise<IPost> => {
  const result = await prisma.post.update({
    where: { id: Number(id) },
    data: { title, content }
  })

  return formatResult(result)
}

export const deletePostById = async (id: string): Promise<IPost> => {
  const result = await prisma.post.delete({
    where: { id: Number(id) }
  })

  return formatResult(result)
}