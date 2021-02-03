import { Alert, Row, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  


const Item = ({id, task, deleteActivity}) => { // se pasa a traves de las props "...item" todas las propiedades, por eso destructuro item
    const deleteTask = (e) => {
        toast(task)
        deleteActivity(id);
    };    
    return (
            <Alert key={id} variant={"info"} >
                <Row className="justify-content-between">
                    <Col md={11}>
                        <p>{task}</p>
                    </Col>
                    <Col md={1}>
                        <p 
                        style={{cursor:"pointer"}} 
                        id={id}
                        onClick={deleteTask}
                        >x</p>
                    </Col>
                </Row>
                <ToastContainer />
            </Alert>
        )
}

export default Item;