import React, { useEffect, useState } from "react"
import { Card } from "../Card"
import axios from "axios"
import {StyledCardList} from "./CardList.style.js"

const apiKey = "dc0e887a66153e000adb1a0223f295b2"
const baseurl = "https://api.themoviedb.org/3/search/movie"
const img_Url = 'https://image.tmdb.org/t/p/w500'
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=test&page=1&include_adult=false

export const CardList = () => {

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

        <StyledCardList>
            {
              movies?.map((movie,index)=>{
                  return(

                      <Card 
                      key={index} 
                      title={movie.title} 
                      imgSrc={img_Url+movie.poster_path}/>
                  )  
                })
            }
        </StyledCardList>
    )


}
// adult: false
// backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg"
// genre_ids: (3) [878, 28, 12]
// id: 181808
// original_language: "en"
// original_title: "Star Wars: The Last Jedi"
// overview: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order."
// popularity: 93.471
// poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg"
// release_date: "2017-12-13"
// title: "Star Wars: The Last Jedi"
// video: false
// vote_average: 6.9
// vote_count: 11431
// __proto__: Object


{/* <div className="wrapper">
{
   movieData && movieData.map(movie => {
        return <Card title = {movie.title} id={movie.id} />
        

    })

}

</div> */}