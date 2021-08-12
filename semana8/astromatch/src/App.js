import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Perfil from "./components/Perfil";
import Funcionalidades from "./components/Funcionalidades";
import Listagem from "./components/Listagem";


const MainContainer = styled.div`
margin: 0px;
padding: 0px;
align-items: center;
text-align: center;
button {
  text-align: center;
  justify-content: center;
  background-color: white;
  cursor: pointer;
  padding: 8px;
}
`


export default function App() {
  const [perfil, setPerfil] = useState({});
  const [componente, setComponente] = useState("")


  const pegaPerfil = () => {

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brenda/person"

    axios.get(url, {
    }).then((resp) => {
      setPerfil(resp.data.profile)
    }).catch((error) => {
      alert("Erro ao atualizar perfil")
    })

  }

  const escolheComponente = () => {
    if (componente == "listar") {

      return (
        <MainContainer>
          <Listagem
            limpaInformacoes={limpaInformacoes}>

          </Listagem>
        </MainContainer>
      )

    } else {

      return (
        <MainContainer>
           <img src="images/astromatch.png" />

          <Perfil
            perfil={perfil}>
          </Perfil>

          <Funcionalidades
            perfil={perfil}
            pegaPerfil={pegaPerfil}>
          </Funcionalidades>

          <p></p>

          <button onClick={() => alteraComponente("listar")}>Lista Matches</button>
          
        </MainContainer>
      )

    }
  }

  const alteraComponente = (componente) => {
    setComponente(componente)
  }

  useEffect(() => {
    pegaPerfil()
  }, [])


  const limpaInformacoes = () => {

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brenda/clear"

    axios.put(url, {
    }).then((resp) => {
      alteraComponente("")
    }).catch((error) => {
      alert("Erro ao limpar informações")
    })


  }

  return (

    escolheComponente()

  )
}
