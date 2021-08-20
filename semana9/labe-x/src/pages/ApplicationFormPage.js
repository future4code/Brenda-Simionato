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
}
`


export default function ApplicationFormPage() {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [applicationText, setApplicationText] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")


    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeAge = (event) => {
        setAge(event.target.value)
    }

    const onChangeApplicationText = (event) => {
        setApplicationText(event.target.value)
    }

    const onChangeProfession = (event) => {
        setProfession(event.target.value)
    }

    const onChangeCountry = (event) => {
        setCountry(event.target.value)
    }


    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    
    const applyToTrip = (id) => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/brenda/trips/" + id + "/apply"
        const token = localStorage.getItem("token")
        const body = {
            name: name,
            age: age,
            applicationText: applicationText,
            profession: profession,
            country: country,
        }
        axios.post(url, body, {
            headers: {
                auth: token
            }
        }).then((resp) => {
            alert("Viagem inscrita com sucesso!")


        }).catch((error) => {
            alert("Erro ao inscrever viagem!")

        })
    }

    return (

        <Container>
            <div><h2>Inscreva-se para uma viagem</h2></div>
            <p></p>
            <input onChange={onChangeName} type="text" placeholder="Escolha uma Viagem"></input>
            <p></p>
            <input onChange={onChangeName} type="text" placeholder="Nome"></input>
            <p></p>
            <input onChange={onChangeAge} type="number" placeholder="Idade"></input>
            <p></p>
            <input onChange={onChangeApplicationText} type="text" placeholder="Texto de Candidatura"></input>
            <p></p>
            <input onChange={onChangeProfession} type="text" placeholder="Profissão"></input>
            <p></p>
            <input onChange={onChangeCountry} type="text" placeholder="Escolha um Planeta"></input>
            <p></p>

            <button onClick={goBack}>Voltar</button>
            <button onClick={applyToTrip}>Enviar</button>

        </Container>
    )
}