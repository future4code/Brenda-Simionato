import React from "react"
import styled from "styled-components"


export default function AdminHomePage() {

    
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

            <div>Painel Administrativo:</div>
            <button type="text">Voltar</button>
            <button tyoe="text">Criar Viagem</button>
            <button type="text">Logout</button>
            {
                trips.map(trip => {
                    return (
                        <div>
                            <p><b>Nome:</b>{trip.name}</p>
                        </div>)
                })
            }
        </Container>

    )
}