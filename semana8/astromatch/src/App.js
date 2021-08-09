import React from "react";
import styled from "styled-components";
import axios from "axios";
import Footer from "./components/Footer";

const MainContainer = styled.div`

`


export default class App extends React.Component {
  state = {
    perfis: []
  }


  listaPerfis = (id) => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person" + id
    const authorization = "brenda-simionato-lovelace"

    axios.get(url, {
      headers: {
        authorization
      }
    }).then((resp) => {
      this.setState({ perfis: resp.data.result })
    }).catch((error) => {
      alert("Erro ao atualizar perfil")
    })
  }

  render() {


    return (
      <MainContainer
        listaPerfis = {this.listaPerfis}
        perfis={this.state.perfis}>

        <Footer></Footer>

      </MainContainer>

    )
  }
}