import { Container, Button, Card, Modal } from "react-bootstrap";
import { React, useState } from "react";
import tarot from "../tarot.json"
import styled from "styled-components";




export default function HomePage() {

    const [initGame, setInitGame] = useState(false)
    const [indexChooseCard, setIndexChooseCard] = useState(undefined)
    //const [showDescriptionModal, setShowDescriptionModal] = useState('')
    const [show, setShow] = useState(false);
    const [cardName, setCardName] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const renderOpenTarot = () => {
        return (
            tarot.cards.map((card) => {
                return (
                    <Card class=".d-xl-inline-flex"> 
                        <img  style={{ width: '10rem' }}src={tarot.imagesUrl + card.image} class="rounded mx-auto d-block" alt={"Imagem da carta"} />
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
                        setCardName(card.name)
                        handleShow()
                        return (
                            <Card style={{ width: '10rem' }} class="card">
                                <img src={tarot.imagesUrl + card.image} class="card-img-top" alt={"Imagem da carta"} />
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
            {/* <>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{cardName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </> */}

        </Container>
    )
}