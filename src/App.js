import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Routing from './Routes';
import Footer from './Components/Footer/Footer';
function App() {
  const [response, setResponse] = useState([]);
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState('');
  const [movie, setmovie] = useState([])
  const [series, setseries] = useState([])
  const [latest, setlatest] = useState([])
  const [trending, settrending] = useState([])
  let animeUrl = 'https://gogoanime.consumet.stream/popular'
  let baseUrl = 'https://api.themoviedb.org/3'
  const navigate = useNavigate()

  const onUserInput = ({target}) => {
    setInput(target.value);
  };



  // ========= FETCH ANIME DATA ===========
  const fetchAnime = async () => {
    try{
        const res = await axios.get(animeUrl)
        //  console.log(res.data)
        setResponse(res.data)
    }catch(err){
        console.log('error don land',err)
    }
}
// =========  FINISH FETCH TRENDING DATA ===========


// ========= FETCH MOVIE DATA ===========
const fetchMovie = async () => {
  try{
      const res = await axios.get(baseUrl+'/movie/popular?api_key=d04c996d2d294fba13288a5e37fb45e9&language=en-US&page=1')
      //  console.log(res.data.results)
      setmovie(res.data.results)
  }catch(err){
      console.log('error don land',err)
  }
}
// ========= FINISH FETCH TRENDING DATA ===========



// ========= FETCH SERIES DATA ===========
const fetchSeries = async () => {
  try{
      const res = await axios.get(baseUrl+'/tv/popular?api_key=d04c996d2d294fba13288a5e37fb45e9&language=en-US&page=1')
      //  console.log(res.data.results)
      setseries(res.data.results)
  }catch(err){
      console.log('error don land',err)
  }
}
// ========= FINISH FETCH TRENDING DATA ===========





// ========= FETCH lATEST DATA ===========
const fetchLatest = async () => {
  try{
      const res = await axios.get(baseUrl+'/tv/popular?api_key=d04c996d2d294fba13288a5e37fb45e9&language=en-US&page=1')
      //  console.log(res.data.results)
      setlatest(res.data.results)
  }catch(err){
      console.log('error don land',err)
  }
}
// =========  FINISH FETCH LATEST DATA ===========




// ========= FETCH TRENDING DATA ===========
const fetchTrending = async () => {
  try{
      const res = await axios.get(baseUrl+'/trending/all/day?api_key=d04c996d2d294fba13288a5e37fb45e9')
      //  console.log(res.data.results)
      settrending(res.data.results)
  }catch(err){
      console.log('error don land',err)
  }
}
// =========  FINISH FETCH TRENDING DATA ========







// =========  START SEARCHING API ===========    
const SearchApi = async (event) => {
  const aUrl = 'https://api.themoviedb.org/3/search/movie?api_key=d04c996d2d294fba13288a5e37fb45e9'
  const newUrl = aUrl+'&query='+input;
  event.preventDefault()
  try{
    const res = await axios.get(newUrl)
     console.log(res.data.results)
    setSearch(res.data.results)
}catch(err){
    console.log('error don land',err)
}
navigate(`/search/${input}`)
}
//  ========= FINISH SEARCHING API ==========






// ========= USEEFFECT ALL API REQUESTS ========

useEffect(()=>{
  fetchAnime();
  fetchMovie();
  fetchSeries();
  fetchLatest();
  fetchTrending();
},[]);

//  ========== FINISH USEEFFECT ALL API REQUESTS =========

  return (
    <div>
      <Navbar
      input={input}
      onUserInput={onUserInput}
      SearchApi={SearchApi}
      setInput={setInput}
      />
      <Routing 
      response={response}
      movie={movie}
      series={series}
      latest={latest}
      trending={trending}
      search={search}
      input={input}
      />
      <Footer/>
    </div>
  );
}

export default App;
