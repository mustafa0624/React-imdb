import styled,{css} from "styled-components"

export const StyledSearchBoxWrapper= styled.div`
margin:20px 0px 30px  

`
export const StyledInput = styled.input`
border-radius:10px;
width:20%;
outline:0px;
border-color:rgba(0,0,0,0.3);
margin-right:10px;
padding:5px;
color:red;
${p=>p.isColored && 
    css`
    color:yellow
    `
    }

`

export const StyledButton = styled.button`
background-color:#ffccbc;
outline:0px;
border:0px ;
padding:7px;
border-radius:10px;


&:hover{
    background-color:#ffab91;
    cursor:pointer
    

}
`