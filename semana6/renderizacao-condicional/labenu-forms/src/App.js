import './App.css';
import React from 'react';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

const Button = styled.button`
display: flex;
text-align: center;
margin: 0;
padding: 0;
`


export default class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case "final":
        return <Final />

    }
  }

  irParaProximaEtapa = () => {

    const proximaEtapa = this.state.etapa == 3 ? "final" : this.state.etapa + 1
    this.setState({ etapa: proximaEtapa })

    /*let proximaEtapa;
    if(this.state.etapa == 3) {
      proximaEtapa = "final"
    } else {
      proximaEtapa = this.state.etapa + 1
    }*/
  }

  exibirBotao = () => {
    if (this.state.etapa != "final") {
      return (<button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderizaEtapa()}

        {this.exibirBotao()}

      </div>

    )

  }
}


