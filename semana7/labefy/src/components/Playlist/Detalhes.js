import styled from 'styled-components';
import React from 'react';
import axios from 'axios';
import App from '../../App';

const Container = styled.div`
`


export default class Detalhes extends React.Component {
    

   


    render() {
        return (
            <Container>
                <table>
                    <thead>
                        <tr>
                            <th>Nome:</th>
                            <th>Artista:</th>
                            <th>Link:</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.musicas.map(musica => {
                            return (
                                <tr>
                                    <td >
                                        {musica.name}
                                    </td>
                                    <td>
                                        {musica.artist}
                                    </td>
                                    <td>
                                        {musica.url}
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