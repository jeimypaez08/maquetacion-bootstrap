import { Container, Row, Col } from "react-bootstrap";

export default function Main() {
    return (
        <main className="my-4">
            <Container>
                <Row className="g-10">
                    <Col md={6} className="bg-primary text-white p-4 rounded">
                        Izquierda
                    </Col>

                    <Col md={6} className="bg-primary text-white p-4 rounded">
                        Derecha
                    </Col>
                </Row>
            </Container>
        </main>
    );
}
