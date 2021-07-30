import axios from 'axios';
import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
`

export default class Listar extends React.Component {

    state = {

        playlists: []
    }


    componentDidMount = () => {
        this.listaPlaylists()
    }


    listaPlaylists = () => {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const authorization = "brenda-simionato-lovelace"

        axios.get(url, {
            headers: {
                authorization
            }
        }).then((resp) => {
            this.setState({ playlists: resp.data.result.list })

        }).catch((error) => {
            alert("Erro ao exibir playlists!")
        })
    }


    removePlaylist = (id) => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/" + id
        const authorization = "brenda-simionato-lovelace"

        axios.delete(url, {
            headers: {
                authorization
            }
        }).then((resp) => {
            alert("Playlist removida com sucesso")

        }).catch((error) => {
            alert("Erro ao remover playlist")
        })
    }


    confirmaRemocaoPlaylist = (id) => {
        if (window.confirm("Deseja realmente remover?")) {
            this.removePlaylist(id)
        }
    }


    render() {
        return (
            <Container>
                <table>
                    <thead>
                        <tr>
                            <th>Nome:</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.playlists.map(playlist => {
                            return (
                                <tr>
                                    <td >
                                        {playlist.name}
                                    </td>
                                    <td>
                                        <button onClick={() => this.confirmaRemocaoPlaylist(playlist.id)}>Remover</button>
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
