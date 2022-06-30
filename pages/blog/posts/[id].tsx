import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { getPostById } from '../../../helpers/api/posts'

import { IPost } from '../../../types/posts'

interface IPostViewerProps{
  post: IPost
}

const components = {
  h1: props => <h1 {...props} className='underline'/>,
  h2: props => <h2 {...props} className='hover:underline'/>
}

const PostViewer = ({post, content}) => {
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
        <MDXRemote {...content} components={components} />
      </div>
    </div>
  )
}

export default function Home({post, content}){
  return(
    <>
      <Head>
        <title>Blog - {post.id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostViewer post={post} content={content}/>
    </>
  )
}

export async function getServerSideProps(context) {
  const id = context.query.id as string

  const post = await getPostById(id)
  const content = await serialize(post.content)

  return { props: { post, content } }
}
