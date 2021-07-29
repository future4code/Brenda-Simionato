import React from "react";
import axios from "axios";
import styled from "styled-components";

const MainContainer = styled.div`
display: inline-block;
text-align: center;
margin: 10px;
padding: 10px;
button {
  cursor: pointer;
}
p {
  text-align: justify;
}
`

export default class App extends React.Component {

  state = {

    atividade: {}

  }


  pegarAtividade = () => {
    const url = "https://www.boredapi.com/api/activity?key=5881028"

    axios.get(url)
      .then((resp) => {
        this.setState({ atividade: resp.data })

      }).catch((error) => {
        alert("Erro ao listar atividade!")
      })

  }


  render() {
    const { activity, type, participants, price } = this.state.atividade

    return (
      <MainContainer>

        <h2>Está entediado?</h2>
        <button onClick={this.pegarAtividade} type="text">Clique aqui!</button>
        <p></p>
        <hr></hr>

        <h3>Sugestão de Atividade</h3>
        <p>Nome: {activity}</p>
        <p>Tipo: {type}</p>
        <p>Participante: {participants}</p>
        <p>Preço: {price}</p>
      </MainContainer>

    )
  }

}
