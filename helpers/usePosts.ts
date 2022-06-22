import useSWR, { Fetcher } from "swr"

import { IPost } from '../types/posts'

const fetcher: Fetcher<IPost | IPost[]> = async url => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default function usePosts(id?: string){
  
  const route = id? `/api/posts/${id}` : `/api/posts`

  const { data, error } = useSWR(route, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}