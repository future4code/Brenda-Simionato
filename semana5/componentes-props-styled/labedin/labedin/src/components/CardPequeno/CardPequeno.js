import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <p><b>{ props.descricao }: </b> { props.dados }</p>
        </div>
    )
}

export default CardPequeno;