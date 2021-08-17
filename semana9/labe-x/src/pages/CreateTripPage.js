import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router"


const Container = styled.div`
display: block;
text-align: center;
align-items: center;
color: slategray;

input {
    height: 30px;
    width: 500px;
    font-size: 16px;  
}

button {
  border-radius: 20px;
  text-align: center;   
  font-size: 15px; 
  height: 38px;
  width: 130px;
  display: inline;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  color: white;
  background-color: slategray;
  border: white solid;
  margin: 50px;
}

select {
    height: 30px;
    width: 500px;
    font-size: 16px;
}`


export default function CreateTripPage() {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }


    return (
        <Container>
            <div><h2>Criar Viagem</h2></div>
            <p></p>
            <input type="text" placeholder="Nome"></input>
            <p></p>
            <select typeof="text">
                <option value disabled selected>Escolha um Planeta</option>
                <option value="Jupiter">Jupiter</option>
                <option value="Plutão">Plutão</option>
                <option value="Mercúrio">Mercúrio</option>
                <option value="Netuno">Netuno</option>
                <option value="Marte">Marte</option>
            </select>
            <p></p>
            <input placeholder="Data"></input>
            <p></p>
            <input type="text" placeholder="Descrição"></input>
            <p></p>
            <input type="text" placeholder="Duração em dias"></input>
            <p></p>

            <button onClick={goBack}>Voltar</button>
            <button>Criar</button>

        </Container>

    )
}