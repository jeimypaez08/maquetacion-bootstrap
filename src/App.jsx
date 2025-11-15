import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

import { Container, Row, Col } from "react-bootstrap";



function App() {
  return (
    <Container>

      <Row>
     <Col><Header/></Col> 
     </Row>

      <Row>
        <Col><Nav/></Col>
      </Row>

      <Row>
        <Col><Main/></Col>
      </Row>

      <Row>
        <Col><Footer/></Col>
      </Row>
    </Container>
  );
}

export default App
