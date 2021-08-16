import React from "react"
import styled from "styled-components"

const Container = styled.div`
`


export default function ApplicationFormPage() {

    return (

        <Container>
            <div>Inscreva-se para uma viagem</div>
            <select typeof="text">
                <option value disabled selected>Escolha uma Viagem</option>
                <option value="0aQ9retlt9zxpeo40G2M">Multi luau em Jupiter</option>
                <option value="HF3V6C2VFWoQ3QUOVJON">Picnic de Inverno em Plutão</option>
                <option value="NoIFVcOiSgTKTIPVZwXS">Ano novo em Mercúrio</option>
                <option value="QuWBcnjEQXAlxjLtAjLS">Surfando em Netuno</option>
                <option value="vX4GWQtFDENjFEo7EAF1">Festança Marciana</option>
            </select>
            <input type="text" placeholder="Nome"></input>
            <input type="number" placeholder="Idade"></input>
            <input type="text" placeholder="Texto de Candidatura"></input>
            <input type="text" placeholder="Profissão"></input>
            <select typeof="text">
                <option value disabled selected>Escolha um Planeta</option>
                <option value="Jupiter"></option>
                <option value="Plutão"></option>
                <option value="Mercúrio"></option>
                <option value="Netuno"></option>
                <option value="Marte"></option>
            </select>
        </Container>
    )
}