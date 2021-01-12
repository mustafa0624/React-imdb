
import './App.css';
import {useEffect,useState,createContext} from 'react'
import axios from "axios"
import {SearchBox} from "./components/SearchBox"
import {CardList} from "./components/CardList"

const apiKey = "dc0e887a66153e000adb1a0223f295b2"
const baseurl = "https://api.themoviedb.org/3/search/movie"
const img_Url = 'https://image.tmdb.org/t/p/w500'

export const MovieContext = createContext();

function App() {
  

  const [movies,dataMovies]=useState()
  const [selectedInput,setSelectedInput] = useState("star wars")
  

    useEffect(()=>{
        axios.get(baseurl,{
            params:{
                api_key:apiKey,
                page:1,
                query: selectedInput
            }
        }).then((res)=>dataMovies(res?.data?.results))
        .catch((err)=>console.log(err))
    },[selectedInput])

  return (
    <div className="App">
      <MovieContext.Provider value={{setSelectedInput,movies,img_Url}}>

      <SearchBox  />
      <CardList />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
