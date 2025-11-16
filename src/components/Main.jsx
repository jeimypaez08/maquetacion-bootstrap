import { Container, Row, Col } from "react-bootstrap";

export default function Main() {
    return (
        <main className="my-4">
            <Container>

                <Row className="g-4">
                    <Col md={6} className="bg-primary text-white text-center p-4 border rounded">Izquierda</Col>
                    <Col md={6} className="bg-info text-white text-center p-4 border rounded">Derecha</Col>
                </Row>

            </Container>
        </main>
    );
}
