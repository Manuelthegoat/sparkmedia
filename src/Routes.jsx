import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AllMovies from './Pages/AllMovies'
import Anime from './Pages/Anime'
import Blog from './Pages/Blog'
import Error from './Pages/Error'
import Home from './Pages/Home'
import SearchPage from './Pages/SearchPage'
import Series from './Pages/Series'
import Single from './Pages/Single'
const Routing = ({response, movie, series, latest, trending, search, input, fetchDetails, single}) => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home latest={latest} trending={trending} search={search} movie={movie} />}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/movies' element={<AllMovies movie={movie} fetchDetails={fetchDetails} />}/>
          <Route path='/anime' element={<Anime response={response}  />}/>
          <Route path='/series' element={<Series series={series} />}/>
          <Route path={`/search/${input}`} element={<SearchPage search={search} input={input} />}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/single' element={<Single single={single}/>}/>
      </Routes>
    </div>
  )
}

export default Routing
