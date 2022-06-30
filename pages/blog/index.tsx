import { useEffect, useState } from 'react'
import Head from 'next/head'

import { IPost } from '../../types/posts'

import PostCard from '../../components/PostCard'

import usePosts from '../../helpers/usePosts'

interface IMainProps{
  posts: IPost[]
}

function Main({posts}: IMainProps){

  useEffect(() => console.log('aaaa', posts), [posts])

  return(
    <div className='flex flex-col items-center gap-7 p-8'>
      {posts.map(
        (post: IPost, index: number) => <PostCard post={post} key={index}/>
      )}
    </div>
  )
}

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([])
  const { data, isLoading, isError } = usePosts()

  useEffect(() => {
    if(!isLoading && !isError && data)
      setPosts(data as IPost[])

  }, [data, isLoading, isError])

  return(
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main posts={posts}/>
    </>
  )
}
