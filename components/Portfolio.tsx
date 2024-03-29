import ImageFallback from './ImageFallback'
import Loading from './Loading'
import { useGithubRepositories } from '../hooks/useGithub'

interface Repo {
  index: number
  name: string
  description: string
  html_url: string
  key: number
}

const Repo: React.FC<Repo> = ({ index, ...repo }) => {
  return (
    <article className="rounded-lg shadow-sm dark:shadow-stone-900 hover:shadow-md">
      <a href={repo.html_url} className={`
        flex flex-col-reverse md:justify-between
        ${index % 2? 'md:flex-row-reverse' : 'md:flex-row'}
      `}>
        <div className="w-full p-4 p">
          <h1 className="font-bold text-center text-2xl mb-2">{repo.name}</h1>
          <p>{repo.description}</p>
        </div>
        <figure className="relative md:max-w-md md:w-3/4 h-52 overflow-hidden">
          <ImageFallback
            src={`https://raw.githubusercontent.com/BRonen/${repo.name}/main/.github/cover.png`}
            fallbackSrc="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            className="object-cover rounded-lg"
            alt={repo.description}
            fill
          />
        </figure>
      </a>
    </article>
  )
}

const Portfolio: React.FC = () => {
  const repos = useGithubRepositories()

  return (
    <section className="px-10 flex flex-col gap-10">
      {!repos && <Loading/>}

      {repos && repos.map(
        (repo, index) => (
          <Repo key={index} index={index + 1} {...repo} />
        )
      )}
    </section>
  )
}

export default Portfolio
