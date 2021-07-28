import styled from "styled-components"
import React from "react"
import TelaDeCadastro from "./components/TelaDeCadastro"
import TelaListaDeUsuarios from "./components/TelaListaDeUsuarios"

const MainContainer = styled.div`
display: inline-block;
margin: 10px;
padding: 10px;
align-items: center;
`


export default class App extends React.Component {

  render() {
    return (
      <MainContainer>

        <TelaDeCadastro></TelaDeCadastro>
        <TelaListaDeUsuarios></TelaListaDeUsuarios>

      </MainContainer>

    )
  }
}