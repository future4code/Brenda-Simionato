import React, { useState } from "react"
import styled from "styled-components"
import ListTripsPage from "./ListTripsPage"
import LoginPage from "./LoginPage"


const Container = styled.div`
button {
  border-radius: 10px;
  height: 50px;
  width: 90px;
  display: inline;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}
`

export default function HomePage() {

    const [component, setComponent] = useState("");



    const renderComponent = () => {
        if (component == "public") {
            <ListTripsPage />
        } else if (component == "private") {
            <LoginPage />
        }
    }

    const onChangeComponent = (component) => {
        setComponent(component)
    }

    return (
        <Container>
            
            <button onClick={() => onChangeComponent("public")} type="text">Ver Viagens</button>
            <button onClick={() => onChangeComponent("private")} type="text">Área de Admin</button>

            {renderComponent()}

        </Container>
    )
}