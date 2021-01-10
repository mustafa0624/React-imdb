import React from 'react'
import {StyledSearchBoxWrapper,StyledInput,StyledButton} from "./SearchBox.style.js"

export const SearchBox = () => {
    return (
        <StyledSearchBoxWrapper>
            <StyledInput isColored={false}/>
           <StyledButton onClick={()=>{}} >Search </StyledButton> 
        </StyledSearchBoxWrapper>
    )
}
