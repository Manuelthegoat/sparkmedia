import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Seriessing from './Seriessing'

const Seriessingle = ({singleseries,fetchsingleseries}) => {
    const [responses, setResponses] = useState([])
    const [country, setcountry] = useState([])
    const [genre, setgenre] = useState([])
    const [video, setvideo] = useState([])
    const [reviews, setreviews] = useState([])
    const [similar, setsimilar] = useState([])
    const [company, setcompany] = useState([])
    const [prev, setprev] = useState([])
    const [next, setnext] = useState([])

    let movieitem = ''
    singleseries.map((item)=>{
       movieitem = item.id
      })

      const fetchSingleseriesdata = async () => {
        try{
            const res = await axios.get(`https://api.themoviedb.org/3/tv/${movieitem}?api_key=d04c996d2d294fba13288a5e37fb45e9&language=en-US&include_video=true`)
             console.log(res.data)
              setResponses(res.data)
              setcountry(res.data.production_countries)
              setgenre(res.data.genres)
              setcompany(res.data.production_companies)
              setprev(res.data.last_episode_to_air)
              setnext(res.data.next_episode_to_air)
              
        }catch(err){
            console.log('error don land',err)
        }
      }

      const fetchVideo = async () => {
        try{
            const res = await axios.get(`https://api.themoviedb.org/3/tv/${movieitem}/videos?api_key=d04c996d2d294fba13288a5e37fb45e9&language=en-US`)
             console.log(res.data.results)
              setvideo(res.data.results)
              
        }catch(err){
            console.log('error don land',err)
        }
      }
      const fetchReviews = async () => {
        try{
            const res = await axios.get(`https://api.themoviedb.org/3/tv/${movieitem}/reviews?api_key=d04c996d2d294fba13288a5e37fb45e9&language=en-US`)
             console.log(res.data.results)
              setreviews(res.data.results)
              
        }catch(err){
            console.log('error don land',err)
        }
      }
      const fetchSimilar = async () => {
        try{
            const res = await axios.get(`https://api.themoviedb.org/3/tv/${movieitem}/recommendations?api_key=d04c996d2d294fba13288a5e37fb45e9&language=en-US`)
             console.log(res.data.results)
              setsimilar(res.data.results)
              
        }catch(err){
            console.log('error don land',err)
        }
      }
      useEffect(()=>{
       fetchSingleseriesdata()
       fetchVideo()
       fetchReviews()
       fetchSimilar()
     },[])
  return (
    <div>
      <Seriessing fetchsingleseries={fetchsingleseries} prev={prev} next={next} responses={responses} country={country} company={company} genre={genre} video={video} reviews={reviews} similar={similar} />
    </div>
  )
}

export default Seriessingle
