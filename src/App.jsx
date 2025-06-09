import React from 'react'
import Home from './pages/Home'
import Search from './pages/Search'
import { urls } from './data'

function App() {
  return (
    <>
      <Search />
      <Home
        heading="Trending"
        btn1="Day"
        btn2="Week"
        urls={[urls.trendingMoviesDay, urls.trendingMoviesWeek]}
      />
      <Home
        heading="What's Popular"
        btn1="Movies"
        btn2="TV Shows"
        urls={[urls.popularMovies, urls.popularTvshows]}
      />
      <Home
        heading="Top Rated"
        btn1="Movies"
        btn2="TV Shows"
        urls={[urls.topRatedMovies, urls.topRatedTvshows]}
      />
      
    </>
  )
}

export default App