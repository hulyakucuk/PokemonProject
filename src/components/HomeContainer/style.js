import styled from "styled-components";


export const Container=styled.div`

display:grid;
grid-template-columns:auto auto auto;
width: 100%;
justify-content: center;
align-items: center;
margin:0;
background-color:#f9f3f4;
@media screen and (max-width:768px) {
    display:grid;
grid-template-columns:auto auto ;
width: 100%;
justify-content: center;
align-items: center;
    }
`
