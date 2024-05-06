import { getMovie } from '../apiClient'
import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { SearchTitle } from '../../Models/Movie'

const MovieInfo = () => {
  const location = useLocation()
  const locationState = location.state as { title: SearchTitle }
  const title = locationState.title.film

  const { data, isError, isPending } = useQuery({
    queryKey: ['movie', title],
    queryFn: () => getMovie(title as string),
  })

  if (isPending)
    return (
      <div className="content">
        <p>Loading...</p>
      </div>
    )

  if (isError)
    return (
      <div className="content">
        <p>Something went wrong. Please try again later.</p>
      </div>
    )

  if (data) {
    return (
      <>
        <div className="content">
          <h2>{data.Title}</h2>
          <img src={data.Poster} alt={`Poster for ${data.Title}`}></img>
          <p>Year released: {data.Year}</p>
          <p>Runtime: {data.Runtime}</p>
          <p>{data.Plot}</p>
          <ul>
            {data.Ratings.map((item, index) => (
              <li key={index}>
                {item.Source}: {item.Value}
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default MovieInfo
