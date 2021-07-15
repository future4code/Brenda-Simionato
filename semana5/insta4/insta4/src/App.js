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
        <Post />
        <div>
        <input
            value={Post.valorInputNomeUsuario}
            onChange={Post.onChangeInputNomeUsuario}
            placeholder={"Nome do Usuário"}
          />

          <input
            value={Post.valorInputFotoUsuario}
            onChange={Post.onChangeInputFotoUsuario}
            placeholder={"Foto do Usuário"}
          />

          <input
            value={Post.valorInputFotoPost}
            onChange={Post.onChangeInputFotoPost}
            placeholder={"Post do Usuário"}
          />

          <button onClick={Post.adicionaPost}>Adicionar</button>
        </div>
        
      </MainContainer>

    );
  }
}

export default App;
