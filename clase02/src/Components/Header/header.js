import { Row, Col } from "react-bootstrap";
const Header = ({titulo}) => {
    return (
        <Row>
            <Col md={12}>
                <h1 className="text-center">{ titulo }</h1>
                <hr />
            </Col>
        </Row>
    )
}

export default Header;