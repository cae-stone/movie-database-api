import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [film, setFilm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate(`movie/${film}`, {
      state: {
        title: { film },
      },
    })
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={film}
          onChange={(e) => setFilm(e.target.value)}
        />
        <button type="submit"> Search</button>
      </form>
    </div>
  )
}

export default Home
