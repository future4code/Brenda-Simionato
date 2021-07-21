import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
display: block;
text-align: center;
padding: 15px;
`

export default class Etapa1 extends React.Component {
    render() {
        return (
            <MainContainer>
                <div>
                    <h1> ETAPA 1 - DADOS GERAIS</h1>
                    <p>
                        <label>1. Qual o seu nome?</label>
                        <p><input></input></p>
                    </p>
                    <p>
                        <label>2. Qual a sua idade?</label>
                        <p><input></input></p>
                    </p>
                    <p>
                        <label>3. Qual o seu e-mail?</label>
                        <p><input></input></p>
                    </p>
                    <p>
                        <label>4. Qual a sua escolaridade?</label>
                        <p><input></input></p>
                    </p>

                </div>
            </MainContainer>
        )

    }

}

