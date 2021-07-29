import styled from "styled-components"
import React from "react"
import axios from "axios"

const Container = styled.div`
display: flex;
margin: 15px;
padding: 15px;
align-items: center;
button {
    text-align: center;
    height: 30px;
    width: 70px;
    cursor: pointer;
}
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
            this.setState({name: "", email: ""})
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
                    <input onChange={this.onChangeName} value={this.state.name} type="text"></input>
                </label>
                <p></p>
                <label> Digite seu e-mail:
                    <input onChange={this.onChangeEmail} value={this.state.email} type="text"></input>
                </label>
                <p></p>
                <button onClick={this.criarUsuario}>Enviar</button>
            </Container>

        )
    }
}