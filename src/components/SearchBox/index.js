import React, { useState } from 'react'
import {StyledSearchBoxWrapper,StyledInput,StyledButton} from "./SearchBox.style.js"

export const SearchBox = ({setSearchValue}) => {
    const [inputValue,SetInputValue] = useState("")

    return (
        <StyledSearchBoxWrapper>
            <StyledInput isColored={false} onChange={(e)=>SetInputValue(e.target.value)} />
           <StyledButton onClick={()=>setSearchValue(inputValue)} >Search </StyledButton> 
        </StyledSearchBoxWrapper>
    )
}
