import { Container, Row, Col} from "react-bootstrap";
import Header from "./Components/Header";
import Characters from "./Components/Characters";
import "./App.css";

function App() {
  return (
    <>
      <Header/>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Characters/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
