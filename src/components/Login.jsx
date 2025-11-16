import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function Login(){
    const navigate = useNavigate(); //para redirigir sin cambiar la pestaña

    const handleSubmit = (e) => {
        e.preventDefault(); //evita refrescar la pagina
        navigate("/Pagina1"); //redirige a la Pagina1
}
    return(
        <Container className="mt-5" style={{maxWidth: "400px"}}>
            <h2 className="mb-4 text-center">Iniciar sesion</h2>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" required placeholder="Ingresar correo"/>
                </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" required placeholder="********"/>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">Ingresar</Button>

            </Form>
        </Container>
    );
}