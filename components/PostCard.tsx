import Link from 'next/link'

import { IPost } from '../types/posts'

interface IPostCard{
  post: IPost
  key: number
}

export default function IPostCard({post}: IPostCard){
  const tagLink = (tag: string, index: number) => (
    <Link href={`/blog/tags/${tag}`} key={index}>
      <div>[{tag}]</div>
    </Link>
  )

  return(
    <Link href={`/blog/posts/${post.id}`}>
      <div className={`
        cursor-pointer
        transition-all duration-500
        hover:scale-105 hover:rounded
        hover:shadow-md hover:shadow-black
        grid gap-3 w-[70vw] p-4
        bg-stone-300 text-stone-900
        dark:bg-stone-900 dark:text-stone-300
      `}>
        <h1>{post.title}</h1>

        <hr className='my-1 text-white'/>
        
        <div className='flex'>
          <h4>{post.createdAt}</h4>
          
          <h4 className='flex justify-end gap-3 w-full'>{
            post.tags.map(tagLink)
          }</h4>
        </div>
      </div>
    </Link>
  )
}