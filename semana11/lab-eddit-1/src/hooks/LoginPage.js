import { Form, Button, Container } from "react-bootstrap"
import { useHistory } from "react-router-dom"


export default function LoginPage() {

    const history = useHistory()

    const goToFeed = () => {
        history.push("/feed")
    }

    const goToCadastre = () => {
        history.push("/cadastre")
    }

    return (
        <Container>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu e-mail" />
                    <Form.Text className="text-muted">
                        Nós não dividiremos seu e-mail com mais ninguém.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Digite sua senha" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={goToFeed}>
                    Entrar
                </Button>
                &nbsp;
                <Button variant="primary" type="submit" onClick={goToCadastre}>
                    Cadastrar
                </Button>
            </Form>

        </Container>

    )
}