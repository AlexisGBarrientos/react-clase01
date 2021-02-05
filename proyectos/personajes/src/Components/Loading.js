/* Spinner */
import { Row, Col} from 'react-bootstrap';
import RingLoader from "react-spinners/RingLoader";


const Loading = () => {
    return ( 
        <Row className="justify-content-center mt-5">
            <Col md={4} className="align-item-center">
                <RingLoader color={"green"} size={200} />
            </Col>
        </Row>
    );
}
 
export default Loading;