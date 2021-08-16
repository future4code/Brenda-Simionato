import axios from "axios"
import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div``

export default function ListTripsPage() {

    const [trips, setTrips] = useState([]);


    const url = "https://us-central1-missao-newton.cloudfunctions.net/futureX/brenda/trips"

    axios.get(url, {
    }).then((resp) => {
        setTrips(resp.data.trips)
        console.log(resp)
    }).catch((error) => {
        console.log(error)
    })

    return (

        <Container>

            <div>Lista de Viagens:</div>
            {
                trips.map(trip => {
                    return (
                        <div>
                            <p><b>Nome:</b>{trip.name}</p>
                            <p><b>Descrição:</b>{trip.description}</p>
                            <p><b>Planeta:</b>{trip.planet}</p>
                            <p><b>Duração:</b>{trip.durationInDays}</p>
                            <p><b>Data:</b>{trip.date}</p>
                        </div>)

                })

            }
        </Container>

    )
}
