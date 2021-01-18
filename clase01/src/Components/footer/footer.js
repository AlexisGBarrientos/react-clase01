import "./footer.css";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <Row className="justify-content-center bg-dark footer">
            <Col md={4}>
                <h5>Desarrollado por Alexis Barrientos - 2020</h5>
            </Col>
        </Row>
    );
};

export default Footer;