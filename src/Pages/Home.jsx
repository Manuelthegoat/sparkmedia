import React from 'react'
import Hero from '../Components/Hero/Hero'
import Movies from '../Components/Movies/Movies'
import Premiere from '../Components/Premiere/Premiere'
import Search from '../Components/Search/Search'

const Home = ({latest, trending, search, movie, fetchDetails,fetchsingleseries}) => {
  return (
    <div>
      <Hero latest={latest} fetchsingleseries={fetchsingleseries}/>
      {/* <Search search={search}/> */}
      <Movies movie={movie}  fetchDetails={fetchDetails} />
      <Premiere trending={trending}  fetchDetails={fetchDetails} />
    </div>
  )
}

export default Home
