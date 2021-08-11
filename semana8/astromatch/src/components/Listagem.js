import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";


const Container = styled.div`
display: block;
text-align: center;
margin: 10px;
padding: 10px;
font-size: 20px;
img {
    height: 50px;
    width: 50px;
}
button {
    width: 100px;
    height: 50px;
    cursor: pointer;
}`


export default function Listagem(props) {
    const [matches, setMatches] = useState([])


    const listaMatches = () => {

        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brenda/matches"

        axios.get(url, {
        }).then((resp) => {
            setMatches(resp.data.matches)
        }).catch((error) => {
            alert("Erro ao atualizar perfil")
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