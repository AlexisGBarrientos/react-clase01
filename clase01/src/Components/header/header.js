import "./header.css";
import { Row, Col } from "react-bootstrap";

const Header = () => {
    return (
        <Row className="justify-content-between">
            <Col md={4}>
                <h1>Bienvenido</h1>
            </Col>
            <Col md={4}>
                <h2>Test</h2>
            </Col>
        </Row>
    );
};

export default Header;