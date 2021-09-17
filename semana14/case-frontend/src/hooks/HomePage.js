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
                        <img class="text-center" style={{ width: '10rem' }} src={tarot.imagesUrl + card.image}  alt={"Imagem da carta"} />
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
                            <Card style={{ width: '10rem' }} class="col-sm-8">
                                <img src={tarot.imagesUrl + card.image}  class="text-center"alt={"Imagem da carta"} />
                                <div>
                                <b>{card.name}</b>
                                <p></p>
                                <span >Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                     specimen book. It has survived not only five centuries, but also the leap into 
                                     electronic typesetting, remaining essentially unchanged. It was popularised in the 
                                     1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                                     recently with desktop publishing software like Aldus PageMaker including versions
                                      of Lorem Ips</span>
                                </div>
                            </Card>
                        )
                    } else {
                        return (
                            <Card style={{ width: '10rem' }} class="col-sm-8">
                                <img src={tarot.imageBackCard}  alt={"Imagem da carta"} />
                            </Card>
                        )
                    }

                } else {
                    return (
                        <Card class="col-sm-8">
                            <img onClick={() => setIndexChooseCard(index)} src={tarot.imageBackCard} alt={"Imagem da carta"} />
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
        <Container class="row" style={{ width: '12rem' }}>

            <Button onClick={() => setInitGame(true)} variant="outline-success">Iniciar Jogo</Button>
            {render()}


        </Container>
    )
}