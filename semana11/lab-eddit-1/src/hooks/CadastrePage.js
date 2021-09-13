import { Container, Form, Button } from "react-bootstrap"
import { useHistory } from "react-router"

export default function CadastrePage() {


    const history = useHistory()

    const goToFeed = () => {
        history.push("/feed")
    }

    return (
        <Container>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Usuário</Form.Label>
                    <Form.Control type="user" placeholder="Escreva um nome de usuário" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu e-mail" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Digite sua senha" />
                </Form.Group>
                &nbsp;
                <Button variant="primary" type="submit" onClick={goToFeed}>
                    Cadastrar
                </Button>
            </Form>
        </Container>

    )
}