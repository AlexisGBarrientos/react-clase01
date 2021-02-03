import { Alert, Row, Col, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  


const Item = ({id, task, deleteActivity}) => { // se pasa a traves de las props "...item" todas las propiedades, por eso destructuro item
    const toasty = () => toast(task);
    const deleteTask = (e) => {
        deleteActivity(id);
    };    
    return (
            <Alert key={id} variant={"info"} >
                <Row className="align-items-center">
                    <Col md={11}>
                        <Form.Check type="checkbox" label={task} onClick={toasty}/>
                    </Col>
                    <Col md={1} >
                        <Button
                        variant="danger"
                        style={{cursor:"pointer"}} 
                        id={id}
                        onClick={deleteTask}
                        >x</Button>
                    </Col>
                </Row>
                <ToastContainer />
            </Alert>
        )
}

export default Item;