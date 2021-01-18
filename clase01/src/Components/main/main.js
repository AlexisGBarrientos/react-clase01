import "./main.css";
import { Row, Col } from "react-bootstrap";

const Main = () => {
    return (
        <Row className="justify-content-center main">
            <Col md={4}>
                <p className="mt-4">Hola, soy el contenido principal</p>
            </Col>
        </Row>
    );
};

export default Main;