import { Container, Row, Col} from "react-bootstrap";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Characters from "./Components/Characters";
import Footer from "./Components/Footer";

 
function App() {
  return (
    <>
      <Header />
      <Search />
      <Container>
        <Characters />
      </Container>
      <Footer />
    </>
  );
}

export default App;
