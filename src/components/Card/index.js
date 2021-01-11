import React from "react"
import { StyledCardWrapper, StyledText, StyledImage } from "./Card.style.js"



export const Card = ({title,imgSrc}) => {
    // const apiKey = "dc0e887a66153e000adb1a0223f295b2"
   

    console.log(imgSrc)

    return (
        <StyledCardWrapper>
            <StyledImage src={imgSrc}/>
            
            
            <StyledText>
                {title}
            </StyledText>



        </StyledCardWrapper>


    )
}