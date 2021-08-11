import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
display: flex;
text-align: center;
align-items: center;
justify-content: center;
button {
 
    border-radius: 50%;
    width: 80px;
    height: 80px;
    border: 1px solid red;
    color: red;
    font-size: 40px;
    transform: scale(0.7);
    transition: all 0.2s ease 0s;
    position: relative;
    box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
    overflow: hidden;
    cursor: pointer;
 
}
`

const Box = styled.div`
button {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    border: 1px solid green;
    color: green;
    font-size: 40px;
    transform: scale(0.7);
    transition: all 0.2s ease 0s;
    position: relative;
    box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
    overflow: hidden;
    cursor: pointer;
}
`

export default function Funcionalidades(props) {

    const escolhePerfil = (id, choice) => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brenda/choose-person"
        const body = { "id": id, "choice": choice }
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
                <button onClick={() => escolhePerfil(props.perfil.id, false)}>X</button>
            </div>
            <Box>
                <button onClick={() => escolhePerfil(props.perfil.id, true)}>❤</button>
            </Box>
        </Container>
    )

}