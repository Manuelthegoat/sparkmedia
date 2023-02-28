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
import Scrolltotop from './Scrolltotop'
function App() {
  const [response, setResponse] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchanime, setSearchanime] = useState([]);
  const [searchseries, setsearchseries] = useState([])
  const [input, setInput] = useState('');
  const [movie, setmovie] = useState([])
  const [series, setseries] = useState([])
  const [latest, setlatest] = useState([])
  const [trending, settrending] = useState([])
  const [single, setsingle] = useState([])
  const [singleseries, setsingleseries]  = useState([])
  const [pagenumber, setpagenumber] = useState(1)
  let animeUrl = 'https://gogoanime.consumet.stream/popular'
  let baseUrl = 'https://api.themoviedb.org/3'
  const navigate = useNavigate()

  const onUserInput = ({target}) => {
    setInput(target.value);
  };
  const increasePageNumber = async () => {
    try{
      const res = await axios.get(baseUrl+'/movie/popular?api_key=d04c996d2d294fba13288a5e37fb45e9&language=en-US&page='+(pagenumber+1))
      //  console.log(res.data.results)
      setmovie(res.data.results)
  }catch(err){
      console.log('error don land',err)
  }
    }


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
      const res = await axios.get(baseUrl+'/movie/popular?api_key=d04c996d2d294fba13288a5e37fb45e9&language=en-US&page='+pagenumber)
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


const fetchDetails = (item) => {
  let isPresent = false;
    single.forEach((product)=>{
      if (item.id === product.id)
      isPresent = true;
    })
    if (isPresent){
      return ;
    }
    setsingle([...single, item]);
    console.log(item.id)
}
const fetchsingleseries = (item) => {
  let isPresent = false;
    singleseries.forEach((product)=>{
      if (item.id === product.id)
      isPresent = true;
    })
    if (isPresent){
      return ;
    }
    setsingleseries([...single, item]);
    console.log(item.id)
}

// =========  START SEARCHING API ===========    
const SearchSeriesApi = async (event) => {

  const newsUrl = `https://gogoanime.consumet.stream/search?keyw=${input}`;
  // event.preventDefault()
  try{
    const res = await axios.get(newsUrl)
     console.log(res.data)
     setSearchanime(res.data)
}catch(err){
    console.log('error don land',err)
}
navigate(`/search/${input}`)
}
//  ========= FINISH SEARCHING API ==========

// =========  START SEARCHING API ===========    
const SearchAnimeApi = async (event) => {

  const aUrl = 'https://api.themoviedb.org/3/search/tv?api_key=d04c996d2d294fba13288a5e37fb45e9'
  const newseUrl = aUrl+'&query='+input;
  // event.preventDefault()
  try{
    const res = await axios.get(newseUrl)
     console.log(res.data.results)
     setsearchseries(res.data.results)
}catch(err){
    console.log('error don land',err)
}
navigate(`/search/${input}`)
}
//  ========= FINISH SEARCHING API ==========







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
SearchSeriesApi()
SearchAnimeApi()
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
      <Scrolltotop/>
      <Navbar
      input={input}
      onUserInput={onUserInput}
      SearchApi={SearchApi}
      setInput={setInput}
      SearchSeriesApi={SearchSeriesApi}
      SearchAnimeApi={SearchAnimeApi}
      />
      
      <Routing 
      increasePageNumber={increasePageNumber}
      pagenumber={pagenumber}
      setpagenumber={setpagenumber}
      response={response}
      movie={movie}
      series={series}
      latest={latest}
      trending={trending}
      search={search}
      searchanime={searchanime}
      searchseries={searchseries}
      input={input}
      fetchDetails={fetchDetails}
      single={single}
      fetchsingleseries={fetchsingleseries}
      singleseries={singleseries}
      />
      <Footer/>
    </div>
  );
}

export default App;
