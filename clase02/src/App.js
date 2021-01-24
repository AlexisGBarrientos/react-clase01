import Header from "./Components/Header";
import Counter from "./Components/Counter";
import { Row, Col, Container } from "react-bootstrap";
import Register from "./Components/Register/Register";
function App() {
  return (
    <Container>
      <Header titulo="Hola, soy el titulo con props"/>
      <Counter/>
      <Register/>
    </Container>
  );
}

export default App;
