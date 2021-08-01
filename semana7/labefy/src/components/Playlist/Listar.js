import axios from 'axios';
import styled from 'styled-components';
import React from 'react';
import App from '../../App';

const Container = styled.div`
`

export default class Listar extends React.Component {



    componentDidMount = () => {
        this.props.listaPlaylists()
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
            this.props.listaPlaylists()

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

                        {this.props.playlists.map(playlist => {
                            return (
                                <tr>
                                    <td >
                                        {playlist.name}
                                    </td>
                                    <td>
                                        <button onClick={() => this.props.detalhes(playlist.id)}>Exibir detalhes</button>
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
