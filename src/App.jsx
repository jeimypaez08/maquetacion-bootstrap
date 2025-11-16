import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';

import Login from './components/Login.jsx';
import Pagina1 from './components/Pagina1.jsx';

function Diseno() {
  return (
    <Container>
      <Row>
        <Col><Header /></Col>
      </Row>

      <Row>
        <Col><Nav /></Col>
      </Row>

      <Row>
        <Col><Main /></Col>
      </Row>

      <Row>
        <Col><Footer /></Col>
      </Row>
    </Container>
  );
}

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Diseno />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Pagina1" element={<Pagina1 />} />
      

    </Routes>
  );
}
