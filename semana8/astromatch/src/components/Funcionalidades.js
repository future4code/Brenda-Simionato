import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
`

export default function Funcionalidades(props) {

    const escolhePerfil = (id, choice) => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brenda/choose-person"
        const body = {"id": id, "choice": choice}
        console.log(body)
        axios.post(url, body, {})
        .then((resp) => {
            props.pegaPerfil()
        }).catch((error) => {
            alert("Erro ao atualizar perfil!")

        })
    }

    return (
        <Container>
            <div>
                <button onClick={() => escolhePerfil(props.perfil.id, false)}>Não</button>
                <button onClick={() => escolhePerfil(props.perfil.id, true)}>Sim</button>
            </div>
        </Container>
    )

}