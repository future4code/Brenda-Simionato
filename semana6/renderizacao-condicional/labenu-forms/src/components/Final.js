import React from 'react';
import styled from 'styled-components';


const MainContainer = styled.div`
display: block;
text-align: center;
padding: 15px;
`

export default class Final extends React.Component {
    render() {
        return (
            <MainContainer>
                <div>
                    <h1>O FORMULÁRIO ACABOU!</h1>
                    <label>Muito obrigado por participar! Entraremos em contato!</label>


                </div>
            </MainContainer>

        )

    }

}


