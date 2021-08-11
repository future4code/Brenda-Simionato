import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Perfil from "./components/Perfil";
import Funcionalidades from "./components/Funcionalidades";
import Listagem from "./components/Listagem";

const MainContainer = styled.div``


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
          <Listagem></Listagem>
        </MainContainer>
      )

    } else {

      return (
        <MainContainer>
          <button onClick={() => alteraComponente("listar")}>Listar Matches</button>
          <Perfil
            perfil={perfil}
          ></Perfil>
          <Funcionalidades
            perfil={perfil}
            pegaPerfil={pegaPerfil}
          ></Funcionalidades>
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


  return (

    escolheComponente()

  )

}