import React, { useRef,useContext } from 'react'
import {StyledSearchBoxWrapper,StyledInput,StyledButton} from "./SearchBox.style.js"
import {MovieContext} from "../../App"

export const SearchBox = () => {
    
   const inputRef = useRef()
   const {setSelectedInput} = useContext(MovieContext)

    

    return (
        <StyledSearchBoxWrapper>
            <StyledInput ref={inputRef} isColored={false} />
           <StyledButton onClick={()=>setSelectedInput(inputRef.current.value)} >Search </StyledButton> 
        </StyledSearchBoxWrapper>
    )
}
