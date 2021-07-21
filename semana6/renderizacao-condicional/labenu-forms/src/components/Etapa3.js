import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
display: block;
text-align: center;
padding: 15px;
`

export default class Etapa3 extends React.Component {
    render() {
        return (
            <MainContainer>
                <div>
                    <h1> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                    <p>
                        <label>5. Porque você não terminou um curso de graduação?</label>
                        <p><input></input></p>
                    </p>
                    <p>
                        <label>6. Você fez algum curso complementar?</label>
                        <p><input></input></p>
                    </p>

                </div>
            </MainContainer>
        )

    }

}

