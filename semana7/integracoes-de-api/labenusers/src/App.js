import styled from "styled-components"
import React from "react"
import TelaDeCadastro from "./components/TelaDeCadastro"
import TelaListaDeUsuarios from "./components/TelaListaDeUsuarios"

const MainContainer = styled.div`
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