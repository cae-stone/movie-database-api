import request from 'superagent'
import { Movie } from '../Models/Movie'

export async function getMovie(formEntry: string): Promise<Movie> {
  const res = await request.get(`/api/v1/movie/${formEntry}`)
  return res.body
}
