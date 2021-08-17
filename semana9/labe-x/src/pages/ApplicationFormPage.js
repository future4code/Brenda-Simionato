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
}
`


export default function ApplicationFormPage() {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (

        <Container>
            <div><h2>Inscreva-se para uma viagem</h2></div>
            <p></p>
            <select typeof="text">
                <option value disabled selected>Escolha uma Viagem</option>
                <option value="0aQ9retlt9zxpeo40G2M">Multi luau em Jupiter</option>
                <option value="HF3V6C2VFWoQ3QUOVJON">Picnic de Inverno em Plutão</option>
                <option value="NoIFVcOiSgTKTIPVZwXS">Ano novo em Mercúrio</option>
                <option value="QuWBcnjEQXAlxjLtAjLS">Surfando em Netuno</option>
                <option value="vX4GWQtFDENjFEo7EAF1">Festança Marciana</option>
            </select>
            <p></p>
            <input type="text" placeholder="Nome"></input>
            <p></p>
            <input type="number" placeholder="Idade"></input>
            <p></p>
            <input type="text" placeholder="Texto de Candidatura"></input>
            <p></p>
            <input type="text" placeholder="Profissão"></input>
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

            <button onClick={goBack}>Voltar</button>
            <button>Enviar</button>
        </Container>
    )
}