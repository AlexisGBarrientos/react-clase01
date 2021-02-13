import { Row, Col, Button, Form } from "react-bootstrap";

const Search = () => {
    return ( 
        <Row className="justify-content-center my-5">
            <Col md={6} className="p-3">
                <Form>
                    <Form.Group>
                        <Form.Control 
                        type="text"
                        placeholder="Buscar por nombre..."/>
                    </Form.Group>
                    <Button type="submit">Buscar</Button>
                </Form>
            </Col>
        </Row>
    );
}
 
export default Search;