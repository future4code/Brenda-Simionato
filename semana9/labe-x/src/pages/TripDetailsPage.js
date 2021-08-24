import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useHistory } from "react-router"
import axios from "axios"


const Container = styled.div`
display: inline-block;
text-align: center;
align-items: center;
color: slategray;
margin: 50px;

button {
    border-radius: 20px;
  text-align: center;   
  font-size: 15px; 
  height: 38px;
  width: 130px;
  display: inline;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  color: white;
  background-color: slategray;
  border: white solid;
  margin: 30px;
  display: inline;
  
  align-items: center;
}

b {
    color: slategray;    
}

p {
    color: black;
    padding: auto;
}
`


export default function TripDetailsPage() {

    const [details, setDetails] = useState({})

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const loginPage = () => {
        history.push("/login")
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            alert("Não está logado!")
            {loginPage()}
        }
    }, [])


    useEffect((id) => {
        const token = localStorage.getItem("token")

        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/brenda/trip/" + id, {
            headers: {
                auth: token
            }
        }).then((resp) => {
            setDetails(resp.data.trip)
            console.log(resp.data.trip)
        }).catch((error) => {
            alert("Erro ao exibir detalhes!")
        })
    }, [])


    return (
        <Container>

            <div><h2>Detalhes da Viagem:</h2></div>
            <hr></hr>

            <div>
                <p><b>Nome: </b>{details.name}</p>
                <p><b>Descrição: </b>{details.description}</p>
                <p><b>Planeta: </b>{details.planet}</p>
                <p><b>Duração: </b>{details.durationInDays} dias</p>
                <p><b>Data: </b>{details.date}</p>
                <hr></hr>
            </div>



            <button onClick={goBack}>Voltar</button>

        </Container>
    )
}