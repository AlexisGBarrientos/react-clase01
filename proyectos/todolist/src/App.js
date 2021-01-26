import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";

function App() {
  return (
    <Container>
      <Header title={"To Do List xD"}/>
      <List/>
      <Footer/>
    </Container>
  );
}

export default App;
