import React from 'react'
import Hero from '../Components/Hero/Hero'
import Movies from '../Components/Movies/Movies'
import Premiere from '../Components/Premiere/Premiere'
import Search from '../Components/Search/Search'

const Home = ({latest, trending, search, movie}) => {
  return (
    <div>
      <Hero latest={latest}/>
      {/* <Search search={search}/> */}
      <Movies movie={movie} />
      <Premiere trending={trending} />
    </div>
  )
}

export default Home
