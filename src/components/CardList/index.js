import React,{useContext} from "react"
import { Card } from "../Card"

import {StyledCardList} from "./CardList.style.js"
import {MovieContext} from "../../App"


// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=test&page=1&include_adult=false

export const CardList = () => {

  const {movies,img_Url} = useContext(MovieContext);  

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
