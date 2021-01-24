import Header from "./Components/Header";
import Counter from "./Components/Counter";
import { Row, Col, Container } from "react-bootstrap";
function App() {
  return (
    <Container>
      <Header titulo="Hola, soy el titulo con props"/>
      <Counter/>
    </Container>
  );
}

export default App;
