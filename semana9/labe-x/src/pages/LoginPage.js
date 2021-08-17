import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router"



const Container = styled.div`
display: inline-block;
color: slategray;
text-align: center;
padding: 30px;
margin: 10px;

input {
    height: 30px;
    width: 500px;
    font-size: 16px;
}

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


export default function LoginPage() {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const adminHomePage = () => {
        history.push("/private")
    }


    return (
        <Container>,

            <div><h2>Login</h2></div>

            <input type="text" placeholder="E-mail"></input>
            <p></p>
            <input type="password" placeholder="Senha"></input>
            <p></p>
            <button onClick={goBack}>Voltar</button>
            <p></p>
            <button onClick={adminHomePage}>Entrar</button>

        </Container>

    )
}