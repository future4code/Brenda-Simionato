import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router"


const Container = styled.div``


export default function CreateTripPage() {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }


    return (
        <Container>
            <div><h2>Criar Viagem</h2></div>
            <input type="text" placeholder="Nome"></input>
            <select typeof="text">
                <option value disabled selected>Escolha um Planeta</option>
                <option value="Jupiter">Jupiter</option>
                <option value="Plutão">Plutão</option>
                <option value="Mercúrio">Mercúrio</option>
                <option value="Netuno">Netuno</option>
                <option value="Marte">Marte</option>
            </select>
            <input placeholder="Data"></input>
            <input type="text" placeholder="Descrição"></input>
            <input type="text" placeholder="Duração em dias"></input>

            <button onClick={goBack}>Voltar</button>
            <button>Criar</button>

        </Container>

    )
}