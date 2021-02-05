import { Card, Col, Button } from "react-bootstrap";

const Character = ({ name, img, occupation}) => {
    return(
        <Col md={4} className="mt-3 mb-3">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>
                    <Card.Text>
                        {/*<p>*/}
                            {occupation}
                        {/*</p> */}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Character;