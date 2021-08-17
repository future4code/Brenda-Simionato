import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router"


const Container = styled.div``


export default function TripDetailsPage(){

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <Container>
             <button onClick={goBack}>Voltar</button>
            
        </Container>
    )
}