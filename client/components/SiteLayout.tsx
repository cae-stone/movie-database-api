import { Link, Outlet } from 'react-router-dom'

const SiteLayout = () => {
  return (
    <>
      <header>
        <h1>
          <Link to={'/'}>Movie Database</Link>
        </h1>
      </header>
      <Outlet />
      <footer>
        <h3>
          Made using <a href="https://www.omdbapi.com/">OMDB API</a>
        </h3>
      </footer>
    </>
  )
}

export default SiteLayout
