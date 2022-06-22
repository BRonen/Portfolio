import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { IPost } from '../../../types/posts'

import PostCard from '../../../components/PostCard'

import usePosts from '../../../helpers/usePosts'

interface IMainProps{
  posts: IPost[]
}

function Main({posts}: IMainProps){
  return(
    <div className='flex flex-col items-center gap-7 p-8'>
      {posts.map(
        (post: IPost, index: number) => <PostCard post={post} key={index}/>
      )}
    </div>
  )
}

export default function Home() {
  const router = useRouter()
  const tag = router.query.tag as string

  const [posts, setPosts] = useState<IPost[]>([])
  const { data, isLoading, isError } = usePosts()

  const postFilter = (post: IPost) => post.tags.includes(tag)

  useEffect(() => {
    if(!isLoading && !isError && data)
      setPosts( data.posts.filter(postFilter) )
  }, [data, isLoading, isError, tag])

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
