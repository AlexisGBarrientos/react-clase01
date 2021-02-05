import { Jumbotron, Row, Col } from "react-bootstrap";
import "./header.css"

const Header = () => {
    return (
        <Row className="justify-content-center mb-3 p-4 header">
            <Col md={6}>
                <Jumbotron>
                    <h1 className="text-center">Characters Breaking Bad</h1>
                </Jumbotron>
            </Col>
        </Row>
    )
}

export default Header;