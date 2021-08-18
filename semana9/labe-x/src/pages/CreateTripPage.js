import React, { useState } from "react"
import styled from "styled-components"
import { useHistory } from "react-router"
import axios from "axios"


const Container = styled.div`
display: block;
text-align: center;
align-items: center;
color: slategray;

input {
    height: 30px;
    width: 500px;
    font-size: 16px;  
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
  border: white solid;
  margin: 50px;
}

select {
    height: 30px;
    width: 500px;
    font-size: 16px;
}`


export default function CreateTripPage() {

    const [name, setName] = useState("")
    const [planet, setPlanet] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState("")


    const onChangeName = (event) => {
        setName(event.target.value)
    }
    
    const onChangePlanet = (event) => {
        setPlanet(event.target.value)
    }

    const onChangeDate = (event) => {
        setDate(event.target.value)
    }

    const onChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    const onChangeDuration = (event) => {
        setDuration(event.target.value)
    }

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }


    const onCreateTrip = () => {
        const token = localStorage.getItem("token")
        const body = {
            name: name,
            planet: planet,
            date: date, 
            description: description, 
            durationInDays: duration
        }
        axios.post ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/brenda/trips", body, {
            headers: {
                auth: token
            }
        }).then((resp) => {
            alert("Viagem criada com sucesso");
            
            
        }).catch((error) => {
            alert('Não foi possível criar uma nova viagem.');
        });
};


    return (
        <Container>
            <div><h2>Criar Viagem</h2></div>
            <p></p>
            <input onChange={onChangeName} type="text" placeholder="Nome"></input>
            <p></p>
            <input onChange={onChangePlanet} type="text" placeholder="Planeta"></input>
            <p></p>
            <input onChange={onChangeDate} type="date" placeholder="Data"></input>
            <p></p>
            <input onChange={onChangeDescription} type="text" placeholder="Descrição"></input>
            <p></p>
            <input onChange={onChangeDuration} type="text" placeholder="Duração em dias"></input>
            <p></p>

            <button onClick={goBack}>Voltar</button>
            <button onClick={onCreateTrip}>Criar</button>

        </Container>

    )
    }