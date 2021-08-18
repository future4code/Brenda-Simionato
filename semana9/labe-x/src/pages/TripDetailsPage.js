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


export default function TripDetailsPage(){

    // const [details, setDetails] = useState({})

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }


    useEffect((id) => {
        const token = localStorage.getItem("token")

       
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/brenda/trip/" + id, {
            headers: {
                auth: token
            }
        }).then((resp) => {
            console.log(resp.data)
        }).catch((error) => {
            console.log(error.resp)
        })
    }, [])
       
  
    return (
        <Container>

            <b>Detalhes da Viagem: </b>
             <button onClick={goBack}>Voltar</button>
            
        </Container>
    )
}