import { Container, Button, Card } from "react-bootstrap";
import React from "react";
import { imagesURL } from "../constants/url";


export default function HomePage() {

    const getImages = useRequestData([], `${imagesURL}`)

    const renderCard = getImages.map((card) => {
        return (
            <Card>
                <img src={card.image} alt={"Imagem da carta"} />
            </Card>
        )
    })
    return (
        <Container>

            {renderCard}

            <Button variant="outline-success">Iniciar Jogo</Button>

        </Container>
    )
}