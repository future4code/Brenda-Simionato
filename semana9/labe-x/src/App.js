import React from "react"
import styled from "styled-components"
import HomePage from "./pages/HomePage"


const MainContainer = styled.div`
text-align: center;
justify-content: center;
align-items: flex-end;
color: gray;
`


export default function App() {



  return (
    <MainContainer>

      <h1>LabeX</h1>
      <HomePage></HomePage>


    </MainContainer>
  )
}