import Header from "./Components/header";
import Main from "./Components/main";
import Footer from "./Components/footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Header/>
      <Main/>
      <Footer/>
    </Container>
  );
}

export default App;
