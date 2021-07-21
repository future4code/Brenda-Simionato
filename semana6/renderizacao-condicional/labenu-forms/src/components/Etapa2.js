import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
display: block;
text-align: center;
padding: 15px;
`

export default class Etapa2 extends React.Component {
    render() {
        return (
            <MainContainer>
                <div>
                    <h1> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                    <p>
                        <label>5. Qual o seu nome?</label>
                        <p><input></input></p>
                    </p>
                    <p>
                        <label>6. Qual a unidade de ensino?</label>
                        <p><input></input></p>
                    </p>

                </div>
            </MainContainer>
        )

    }

}


