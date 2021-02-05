import { Container, Row, Col} from "react-bootstrap";
import Characters from "./Components/Characters"
function App() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Characters/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
