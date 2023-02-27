import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AllMovies from './Pages/AllMovies'
import Anime from './Pages/Anime'
import Blog from './Pages/Blog'
import Error from './Pages/Error'
import Home from './Pages/Home'
import SearchPage from './Pages/SearchPage'
import Series from './Pages/Series'
import Seriessingle from './Pages/Seriessingle'
import Single from './Pages/Single'
const Routing = ({response,pagenumber, setpagenumber, movie,increasePageNumber, series, latest, trending, search, input, fetchDetails,fetchsingleseries, singleseries, single, searchanime, searchseries}) => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home latest={latest} trending={trending} fetchsingleseries={fetchsingleseries} search={search} movie={movie} />}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/movies' element={<AllMovies pagenumber={pagenumber} setpagenumber={setpagenumber} movie={movie} increasePageNumber={increasePageNumber} fetchDetails={fetchDetails} />}/>
          <Route path='/anime' element={<Anime response={response}  />}/>
          <Route path='/series' element={<Series series={series} fetchsingleseries={fetchsingleseries} />}/>
          <Route path={`/search/${input}`} element={<SearchPage search={search} fetchDetails={fetchDetails} fetchsingleseries={fetchsingleseries} searchanime={searchanime} input={input} searchseries={searchseries} />}/>
          <Route path='/blog' element={<Blog/>}/>
         
            <Route path='/single' element={<Single single={single}  fetchDetails={fetchDetails} />}/>
            <Route path='/singleseries' element={<Seriessingle singleseries={singleseries} fetchsingleseries={fetchsingleseries}/>}/>
      </Routes>
    </div>
  )
}

export default Routing
