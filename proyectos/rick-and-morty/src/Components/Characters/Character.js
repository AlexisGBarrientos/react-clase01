import { Col, Card} from "react-bootstrap";

const Character = ({ image, name, status, gender}) => {
    return ( 
        <Col md={4}>
            <Card>
                <Card.Img variant="top" src={image} alt="Imagen character Rick and Morty"/>
                <Card.Body>
                    <Card.Title>{name} - {gender}</Card.Title>
                    <Card.Text>{status}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};
 
export default Character;