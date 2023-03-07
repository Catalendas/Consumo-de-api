import { useFatch } from "./hooks/useFatch"

interface AppProps {
  full_name: string
  description: string
}

function App() {

  const { data: repositories, isFetch, error } = useFatch<AppProps[]>("https://api.github.com/users/Catalendas/repos")

  return (
    
    <>
      {isFetch && <p>Carregando...</p>}
      <ul>
        {repositories?.map( repo => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          )
        })}
      </ul>
      {error && <p>{error.message}</p>}
    </>
  )
}

export default App
