import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";


const Container = styled.div``


export default function Listagem() {
    const [matches, setMatches] = useState([])


    const listaMatches = () => {

        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brenda/matches"

        axios.get(url, {
        }).then((resp) => {
            setMatches(resp.data.matches)
            console.log(resp.data.matches)
            console.log(matches)
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
                    <div>
                        <img src={match.photo}></img>
                        <span>{match.name}</span>
                    </div>
                })

            }
        </Container>

    )

}