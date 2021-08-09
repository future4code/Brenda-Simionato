import React from "react";
import styled from "styled-components";
import axios from "axios";


const ContainerFooter = styled.div`
img {
    height: 10px;
}
`


export default class Footer extends React.Component {
    state = {

    }

    render() {


        return (
            <ContainerFooter>
                <img src="logo"></img>
            </ContainerFooter>

        )
    }
}