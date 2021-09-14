import { Container, Button, Card } from "react-bootstrap";
import { React, useState } from "react";
import tarot from "../tarot.json"

export default function HomePage() {

    const [initGame, setInitGame] = useState(false)
    const [indexChooseCard, setIndexChooseCard] = useState(undefined)
    const [showDescriptionModal, setShowDescriptionModal] = useState('')

    const renderOpenTarot = () => {
        return (
            tarot.cards.map((card) => {
                return (
                    <Card>
                        <img src={tarot.imagesUrl + card.image} alt={"Imagem da carta"} />
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
                            <Card>
                                <img src={tarot.imagesUrl + card.image} alt={"Imagem da carta"} />
                            </Card>
                        )
                    } else {
                        return (
                            <Card>
                                <img src={tarot.imageBackCard} alt={"Imagem da carta"} />
                            </Card>
                        )
                    }

                } else {
                    return (
                        <Card>
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

    // const renderDescription = () => {
       
    // }

    return (
        <Container>

            <Button onClick={() => setInitGame(true)} variant="outline-success">Iniciar Jogo</Button>
            {render()}

        </Container>
    )
}