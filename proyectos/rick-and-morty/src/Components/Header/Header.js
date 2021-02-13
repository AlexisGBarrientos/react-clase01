import { Row, Col, Jumbotron} from "react-bootstrap";

const Header = () => {
    return ( 
        <Row className="justify-content-center py-4 bg-info">
            <Col>
                <Jumbotron className="text-center">
                    <h1>Rick And Morty Api</h1>
                </Jumbotron>
            </Col>
        </Row>
     );
}
 
export default Header;
