import { useQuery } from 'react-query'

interface ParsedRepo{
    name: string
    description: string
    fork?: boolean
    archived?: boolean
    html_url: string
    created_at: string
}

async function fetchGithubRepositories(): Promise<Array<ParsedRepo>> {
    const response = await fetch('https://api.github.com/users/bronen/repos')
    const data = await response.json()
    return data
}

export function useGithubRepositories(): Array<ParsedRepo> | false {
    const {isLoading, error, data} = useQuery('githubRepositories', fetchGithubRepositories)

    const repositoryIsValid = (repo: ParsedRepo) => (
        repo.name && repo.description && !repo.fork && !repo.archived
    )

    if(error){
        console.error('Error fetching github repositories!')
        return []
    }

    if(isLoading || !data) return false

    return data.filter(repositoryIsValid)
}