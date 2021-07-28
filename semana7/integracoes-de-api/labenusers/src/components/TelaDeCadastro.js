import styled from "styled-components"
import React from "react"
import axios from "axios"

const Container = styled.div`
`



export default class TelaDeCadastro extends React.Component {

    state = {
        "name": "",
        "email": ""
    }


    criarUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = this.state

        axios.post(url, body, {
            headers: {
                Authorization: "brenda-simionato-lovelace"
            }
        }).then((res) => {
            alert("Cadastrado com Sucesso!")
        }).catch((error) => {
            alert("Erro ao cadastrar!")

        })
    }

    onChangeName = (event) => {
        this.setState({ name: event.target.value })
    }

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }


    render() {
        return (
            <Container>
                <label> Digite seu nome:
                    <input onChange={this.onChangeName} type="text"></input>
                </label>
                <p></p>
                <label> Digite seu e-mail:
                    <input onChange={this.onChangeEmail} type="text"></input>
                </label>
                <p></p>
                <button onClick={this.criarUsuario}>Enviar</button>
            </Container>

        )
    }
}