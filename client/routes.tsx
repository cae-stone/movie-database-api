import { createRoutesFromElements, Route } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import Home from './components/Home'
import MovieInfo from './components/MoveInfo'

export default createRoutesFromElements(
  <Route path="/" element={<SiteLayout />}>
    <Route index element={<Home />} />
    <Route path="movie/:title" element={<MovieInfo />} />
  </Route>
)
