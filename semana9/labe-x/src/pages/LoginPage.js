import React, { useState } from "react"
import styled from "styled-components"
import { useHistory } from "react-router"
import axios from "axios"



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

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }


    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login", body)
            .then((resp) => {
                localStorage.setItem("token", resp.data.token);
                adminHomePage()
            })
            .catch((error) => {
                alert('Usuário não encontrado')
            });
    };

    const history = useHistory()

    const adminHomePage = () => {
        history.push("/private")
    }

    const goBack = () => {
        history.goBack()
    }


    return (
        <Container>,

            <div><h2>Login</h2></div>

            <input onChange={onChangeEmail} type="text" placeholder="E-mail"></input>
            <p></p>
            <input onChange={onChangePassword} type="password" placeholder="Senha"></input>
            <p></p>
            <button onClick={goBack}>Voltar</button>
            <p></p>
            <button onClick={onSubmitLogin}>Enviar</button>

        </Container>

    )
}