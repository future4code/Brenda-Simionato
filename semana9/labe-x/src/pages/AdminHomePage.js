import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios";
import { useHistory } from "react-router"



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


export default function AdminHomePage() {


    const [trips, setTrips] = useState([]);



    useEffect(() => {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/brenda/trips"

        axios.get(url, {
        }).then((resp) => {
            setTrips(resp.data.trips)
        }).catch((error) => {
            alert("Erro")
        })
    }, [])



    const removeTrip = (id) => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/brenda/trips/" + id

        const token = localStorage.getItem("token")

        axios.delete(url, {
            headers: {
                auth: token
            }
        }).then((resp) => {
            alert("Viagem removida com sucesso!")
            history.push("/private")

        }).catch((error) => {
            alert("Erro ao remover viagem!")
        })
    }


    const confirmRemoveTrip = (id) => {
        if (window.confirm("Deseja realmente remover a viagem?")) {
            removeTrip(id)
        }
    }


    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const createTripPage = () => {
        history.push("/createTrip")
    }

    const tripDetails = () => {
        history.push("/details")
    }

    const logout = () => {
        history.push("/login")
    }


    return (

        <Container>

            <div><h2>Painel Administrativo:</h2></div>
            <p></p>
            <button onClick={goBack}>Voltar</button>
            <button onClick={createTripPage} type="text">Criar Viagem</button>
            <button onClick={logout}>Logout</button>
            {
                trips.map(trip => {
                    return (
                        <div>
                            <hr></hr>
                            <p><b>Nome:</b> {trip.name}</p>
                            <button onClick={() => confirmRemoveTrip(trip.id)}>Remover</button>
                            <button onClick={tripDetails}>Ver detalhes</button>
                            <hr></hr>

                        </div>)
                })
            }
        </Container>

    )
}