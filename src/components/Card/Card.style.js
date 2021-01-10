import styled from "styled-components"


export const StyledCardWrapper = styled.div`
width: 15%;
    height: auto;
    border:1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    box-shadow: 3px 3px 1px rgba(0,0,0,0.1);
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top:20px;
    transition: 0.2s;
    &:hover{
        transform:scale(1.1);
        box-shadow:1px 1px 1px rgba(0,0,0,0.5)
    }
    
`;
export const StyledText = styled.p`
color:red;
font-size:0.8rem
`;

export const StyledImage = styled.img`
    width:90%;
    height:80%  ;
    border-radius:10px;
    /* border:1px solid black */
`;