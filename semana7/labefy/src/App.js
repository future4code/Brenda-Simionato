import styled from 'styled-components';
import React from 'react';
import Adicionar from './components/Playlist/Adicionar';
import Listar from './components/Playlist/Listar';

const MainContainer = styled.div`
`

export default class App extends React.Component {

  render () {
    return (
      <MainContainer>

        <Adicionar></Adicionar>
        <Listar></Listar>

      </MainContainer>
    )
  }
}
