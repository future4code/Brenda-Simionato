import axios from "axios"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useHistory } from "react-router"

const Container = styled.div`
display: inline-block;
text-align: center;
color: slategray;

h2{
    text-align: center;
    
}

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
  border: white solid
}

b {
    color: slategray;    
}

p {
    color: black;
}`

export default function ListTripsPage() {

    const [trips, setTrips] = useState([]);



    useEffect(() => {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/brenda/trips"

        axios.get(url, {
        }).then((resp) => {
            setTrips(resp.data.trips)
        }).catch((error) => {
            alert("Erro ao listar viagens!")
        })
    }, [])



    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }


    const applicationFormPage = () => {
        history.push("/formPage")
    }

    return (

        <Container>

            <div><h2>Lista de Viagens:</h2></div>
            <hr></hr>
            {
                trips.map(trip => {
                    return (
                        <div>
                            <p><b>Nome: </b>{trip.name}</p>
                            <p><b>Descrição: </b>{trip.description}</p>
                            <p><b>Planeta: </b>{trip.planet}</p>
                            <p><b>Duração: </b>{trip.durationInDays} dias</p>
                            <p><b>Data: </b>{trip.date}</p>
                            <hr></hr>
                        </div>)

                })

            }
            <p></p>
            <button onClick={goBack}>Voltar</button>
            <p></p>
            <button onClick={applicationFormPage}>Inscrever-se</button>
        </Container>

    )
}
