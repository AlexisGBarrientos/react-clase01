import { Container, Row, Col } from "react-bootstrap";
import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";
import Create from "./Components/List/Create"
import { useState } from "react";
import "./App.css"
function App() {

  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities([...activities, activity]);
  }
  const deleteActivity = id => {
    const newActivity = activities.filter((activity) => activity.id !== id)
    // newActivity --> todas las tareas menos la que "elimine"
    setActivities(newActivity);
  }

  return (
    <>
      <Container className="mt-5 container">
        <Header title={"To Do APP xD"}/>
        <Row className="mt-3 justify-content-center">
          <Col Col md={6}>
            <Create addActivity={addActivity}/> {/*a traves de props le paso la funcion addActivity*/} 
          </Col>
        </Row>
        <Row className="mt-3 justify-content-center">
          <Col Col md={6}>
            <List activities={activities} deleteActivity={deleteActivity}/>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
