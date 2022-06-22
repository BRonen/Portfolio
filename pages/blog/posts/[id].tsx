import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { IPost } from '../../../types/posts'

import usePosts from '../../../helpers/usePosts'

interface IPostViewerProps{
  post: IPost
}

const PostViewer = ({post}: IPostViewerProps) => {
  return(
    <div className='flex flex-col justify-around items-center p-6'>
      <div className={`
        text-stone-900 bg-stone-300
        dark:text-stone-300 dark:bg-stone-900
        w-[85vw] h-full
        rounded p-3
      `}>
        <h1 className='text-center text-2xl font-semibold'>{post.title}</h1>
        <hr className='pt-3'/>
        <h2 className='text-right text-xl p-1'>{post.updatedAt}</h2>
        <p>{post.content}</p>
      </div>
    </div>
  )
}

export default function Home(){
  const router = useRouter()
  const { id } = router.query

  const [post, setPost] = useState()
  const { data, isLoading, isError } = usePosts(id)

  useEffect(() => {
    if(!isLoading && !isError && data)
      setPost(data)
  }, [data])

  if(!post)
    return null

  return(
    <>
      <Head>
        <title>Blog - {id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostViewer post={post}/>
    </>
  )
}
