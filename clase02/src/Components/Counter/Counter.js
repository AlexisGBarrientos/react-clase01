import { useState } from "react"; // Hook, funcion que controla el estado
import { Col, Row, Button  } from "react-bootstrap";


const Counter = () => {
    // Todo lo que es lógica siempre antes del return
    // No es necesario pasar parámetros si solo queremos el evento
    // Los estados brindan informacion global al COMPONENTE
    const [counter, setCounter] = useState(0);
    const add = () => {
        setCounter(counter+1);
    }
    const substract = () => {
        setCounter(counter-1);
    }

    return (
        <>
            <Row>
                <h3>El contador:</h3>
            </Row>
            <Row>
                <Col>
                    <h4 className="mb-3">Valor: { counter }</h4>
                    <Button 
                        className="mr-4" 
                        variant={"primary"}
                        onClick={add}
                    >
                    +1</Button>
                    <Button 
                        variant={"primary"}
                        onClick={substract}
                    >
                    -1</Button>
                </Col>
            </Row>
        </>
      );
}
 
export default Counter;