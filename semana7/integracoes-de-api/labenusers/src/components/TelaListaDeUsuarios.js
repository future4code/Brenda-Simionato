import styled from "styled-components"
import React from "react"
import axios from "axios"

const Container = styled.div`
`



export default class TelaListaDeUsuarios extends React.Component {
    state = {
        usuarios: []

    }


    componentDidMount = () => {
        this.pegarUsuarios()
    }

    componentDidUpdate = () => {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "brenda-simionato-lovelace"
            }
        }).then((resp) => {
            this.setState({ usuarios: resp.data })

        }).catch((error) => {
            alert("Erro ao recuperar usuários!")

        })
    }

    removeUsuario = (id) => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/" + id

        axios.delete(url, {
            headers: {
                Authorization: "brenda-simionato-lovelace"
            }
        }).then((resp) => {
            alert("Usuário removido com sucesso!")
        }).catch((error) => {
            alert("Erro ao remover usuário!")
        })
    }

    render() {
        return (
            <Container>
                <table>
                    <thead>
                        <tr>
                            <th><b>Nome</b></th>
                            <th><b>Ação</b></th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.usuarios.map(usuario => {
                            return (
                                <tr>
                                    <td>
                                        {usuario.name}
                                    </td>
                                    <td>
                                        <button onClick={() => this.removeUsuario(usuario.id)}>Remover</button>
                                    </td>
                                </tr>

                            )

                        })}

                    </tbody>
                </table>
            </Container>

        )
    }
}