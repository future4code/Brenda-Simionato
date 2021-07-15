import React from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {

    posts: [
      {
        nomeUsuario: 'Paula',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Brenda',
        fotoUsuario: 'https://encrypted-tbn0.gstatic.com/images?q:tbn:ANd9GcTa2kGS59IAv4Dmk3yB8JxFTGC3b0O7cdBApg&usqp:CAU',
        fotoPost: 'https://blog.pescagerais.com.br/wp-content/uploads/2020/05/paisagens-do-rio-suia-micu-pescaria-2017-6.jpg'

      },
      {
        nomeUsuario: 'Andrezza',
        fotoUsuario: 'https://www.papeiseparede.com.br/7500-large_default/papel-de-parede-paisagem-natural-cachoeira.jpg',
        fotoPost: 'https://static.significados.com.br/foto/paisagem-natural-cke.jpg'
      }
    ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",

    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost

    };

    const novosPost = [... this.state.posts, novoPost];
    this.setState({ posts: novosPost });

  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });

  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });

  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });

  };


  onClickCurtida = () => {

    let numeroCurtidasAtualizado = this.state.numeroCurtidas

    if (!this.state.curtido) {
      numeroCurtidasAtualizado = numeroCurtidasAtualizado + 1
    } else {
      numeroCurtidasAtualizado = numeroCurtidasAtualizado - 1
    }

    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: numeroCurtidasAtualizado
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    return this.state.posts.map((post) => {

      return (
        
          <PostContainer>
            <PostHeader>
              <UserPhoto src={post.fotoUsuario} alt={'Imagem do usuario'} />
              <p>{post.nomeUsuario}</p>
            </PostHeader>

            <PostPhoto src={post.fotoPost} alt={'Imagem do post'} />

            <PostFooter>
              <IconeComContador
                icone={iconeCurtida}
                onClickIcone={this.onClickCurtida}
                valorContador={this.state.numeroCurtidas}
              />

              <IconeComContador
                icone={iconeComentario}
                onClickIcone={this.onClickComentario}
                valorContador={this.state.numeroComentarios}
              />
            </PostFooter>
            {componenteComentario}
          </PostContainer>
    
      );

    });


  }
}

export default Post