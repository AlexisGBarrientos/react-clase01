import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import shortid from "shortid";

const Create = ({ addActivity })  => {
    const initialState = {
        id: "",
        task: "",
        state: false,
    };
    const handleTask = (e) => {
        const {name, value} = e.target;
        setTask({
            ...task,
            [name]: value, // name del form.control
        });
    };
    const handleSubmit = (e) => { //funcion para crear una task
        e.preventDefault();
        if (task.task.trim() === "") return;
        const workTask = {//traigo las propiedades de task y piso la de id con shortid()
            ...task,   
            id: shortid()
        };
        setTask(initialState); // limpio task
        addActivity(workTask);
    }
    const [task, setTask] = useState(initialState);
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label><h3>Crear Tarea:</h3></Form.Label>
                    <Form.Control 
                    type="text" 
                    name="task" 
                    value={task.task} 
                    onChange={handleTask}
                    placeholder = "Ingresa la tarea"
                    />
                </Form.Group>

                <Button type="submit" variant="primary" block>
                    Agregar Tarea
                </Button>
            </Form>
        </>
    )
}

export default Create;