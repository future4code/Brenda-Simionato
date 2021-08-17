import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router"


const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;

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
  border: white solid
}
`

export default function HomePage() {



    const history = useHistory()


    const listTripsPage = () => {
        history.push("/public")
    }


    const loginPage = () => {
        history.push("/login")
    }

    return (
        <Container>

            <button onClick={listTripsPage}>Ver Viagens</button>
            <button onClick={loginPage}>Área de Admin</button>
        </Container>
    )
}