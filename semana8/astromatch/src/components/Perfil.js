import React from "react";
import styled from "styled-components";

const Container = styled.div`
`

export default function Perfil(props) {


    return (
        <Container>
            <div>
                <img src={props.perfil.photo}></img>
                <hr></hr>
                <span><b>{props.perfil.name}</b>, {props.perfil.age}</span>
                <p></p>
                <span>{props.perfil.bio}</span>
            </div>
        </Container>
    )

}