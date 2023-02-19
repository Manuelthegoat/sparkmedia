import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AllMovies from './Pages/AllMovies'
import Anime from './Pages/Anime'
import Blog from './Pages/Blog'
import Error from './Pages/Error'
import Home from './Pages/Home'
import SearchPage from './Pages/SearchPage'
import Series from './Pages/Series'
const Routing = ({response, movie, series, latest, trending, search, input}) => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home latest={latest} trending={trending} search={search} movie={movie} />}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/movies' element={<AllMovies movie={movie} />}/>
          <Route path='/anime' element={<Anime response={response}  />}/>
          <Route path='/series' element={<Series series={series} />}/>
          <Route path={`/search/${input}`} element={<SearchPage search={search} input={input} />}/>
          <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </div>
  )
}

export default Routing
