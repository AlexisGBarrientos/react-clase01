import { Row, Col} from "react-bootstrap";
import DotLoader from "react-spinners/DotLoader";


const Loading = () => {
    return (
        <Row className="justify-content-center mt-4">
            <Col md={4} className="align-item-center">
            <DotLoader color={"green"} size={250} />
            </Col>
        </Row>
    );
}
 
export default Loading;