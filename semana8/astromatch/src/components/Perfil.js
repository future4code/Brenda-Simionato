import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
align-items: center;
text-align: center;
justify-content: center;
img {
    height: 450px;
    width: 500px;
}

`

export default function Perfil(props) {


    return (
        <Container>
            <div>
                <img src={props.perfil.photo}></img>
                <hr></hr>
                <span className="nomePerfil"><b>{props.perfil.name}</b></span>, <span className="idadePerfil">{props.perfil.age}</span>
                <p></p>
                <span>{props.perfil.bio}</span>
                <hr></hr>
            </div>
        </Container>
    )

}