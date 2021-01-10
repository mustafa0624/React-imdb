import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'
import axios from "axios"
import {SearchBox} from "./components/SearchBox"
import {CardList} from "./components/CardList"

const apiKey = "dc0e887a66153e000adb1a0223f295b2"
const baseurl = "https://api.themoviedb.org/3/search/movie"
const img_Url = 'https://image.tmdb.org/t/p/w500'

function App() {

  const [movies,dataMovies]=useState()

    useEffect(()=>{
        axios.get(baseurl,{
            params:{
                api_key:apiKey,
                page:1,
                query:"star wars",
            }
        }).then((res)=>dataMovies(res?.data?.results))
        .catch((err)=>console.log(err))
    },[])

  return (
    <div className="App">
      <SearchBox/>
      <CardList movies={movies} img_Url={img_Url}/>
    </div>
  );
}

export default App;
