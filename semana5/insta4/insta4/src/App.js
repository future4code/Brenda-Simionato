import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paula'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Brenda'}
          fotoUsuario={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2kGS59IAv4Dmk3yB8JxFTGC3b0O7cdBApg&usqp=CAU'}
          fotoPost={'https://blog.pescagerais.com.br/wp-content/uploads/2020/05/paisagens-do-rio-suia-micu-pescaria-2017-6.jpg'}
        />
        <Post
          nomeUsuario={'Andrezza'}
          fotoUsuario={'https://www.papeiseparede.com.br/7500-large_default/papel-de-parede-paisagem-natural-cachoeira.jpg'}
          fotoPost={'https://static.significados.com.br/foto/paisagem-natural-cke.jpg'}
        />
      </MainContainer>

    );
  }
}

export default App;
