import { Container, Button, Card, Modal } from "react-bootstrap";
import { React, useState } from "react";
import tarot from "../tarot.json"
import styled from "styled-components";




export default function HomePage() {

    const [initGame, setInitGame] = useState(false)
    const [indexChooseCard, setIndexChooseCard] = useState(undefined)
    const [show, setShow] = useState(false);
    const [cardName, setCardName] = useState("")


    const renderOpenTarot = () => {
        return (
            tarot.cards.map((card) => {
                return (
                    <Card class=".d-xl-inline-flex">
                        <img style={{ width: '10rem' }} src={tarot.imagesUrl + card.image} class="rounded mx-auto d-block" alt={"Imagem da carta"} />
                    </Card>
                )
            })
        )
    }


    const renderCloseTarot = () => {
        const shuffledCardsTarot = tarot.cards.sort(() => Math.random() - 0.5)
        return (
            shuffledCardsTarot.map((card, index) => {

                if (indexChooseCard) {
                    if (indexChooseCard == index) {
                        return (
                            <Card style={{ width: '10rem' }} class="card">
                                <img src={tarot.imagesUrl + card.image} class="card-img-top" alt={"Imagem da carta"} />
                                {card.name}
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ips</span>
                            </Card>
                        )
                    } else {
                        return (
                            <Card style={{ width: '10rem' }} class="card">
                                <img src={tarot.imageBackCard} class="card-img-top" alt={"Imagem da carta"} />
                            </Card>
                        )
                    }

                } else {
                    return (
                        <Card class="card">
                            <img onClick={() => setIndexChooseCard(index)} class="card-img-top" src={tarot.imageBackCard} alt={"Imagem da carta"} />
                        </Card>
                    )
                }

            })
        )
    }

    const render = () => {
        if (!initGame) {
            return renderOpenTarot()
        } else {
            return renderCloseTarot()
        }
    }



    return (
        <Container style={{ width: '12rem' }} class="card-group">

            <Button onClick={() => setInitGame(true)} variant="outline-success">Iniciar Jogo</Button>
            {render()}


        </Container>
    )
}