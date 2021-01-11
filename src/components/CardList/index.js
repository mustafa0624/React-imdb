import React from "react"
import { Card } from "../Card"

import {StyledCardList} from "./CardList.style.js"


// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=test&page=1&include_adult=false

export const CardList = ({movies,img_Url}) => {

    

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
