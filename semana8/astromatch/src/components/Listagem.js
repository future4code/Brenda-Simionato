import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";


const Container = styled.div`
display: inline-block;
text-align: center;
margin: 10px;
padding: 10px;
font-size: 20px;
border: 1px solid black;
height: auto;
width: 400px;
align-items: center;
text-align: center;
justify-content: center;
img {
    height: 50px;
    width: 50px;
}
span {
    font-size: 14px;
    padding: 15px;
    text-align: center;
    align-items: center;
}
button {
    width: 100px;
    height: 50px;
    cursor: pointer;
    border-radius: 20px;
}`


export default function Listagem(props) {
    const [matches, setMatches] = useState([])


    const listaMatches = () => {

        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brenda/matches"

        axios.get(url, {
        }).then((resp) => {
            setMatches(resp.data.matches)
        }).catch((error) => {
            alert("Erro ao exibir matches")
        })
    }


    useEffect(() => {
        listaMatches()
    }, [])


    return (

        <Container>
            {
                matches.map(match => {
                    return (
                        <div>
                            <ul>
                                <img src={match.photo}></img>
                                <span>{match.name}</span>
                            </ul> </div>)

                })

            }
            <button onClick={() => props.limpaInformacoes()}>Limpa Informações</button>
        </Container>

    )

}