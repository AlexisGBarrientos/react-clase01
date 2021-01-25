import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';


const Register = () => {
    const initialState = {
        name: "",
        email: ""
    }
    const [user,setUser] = useState(initialState); // useState vector de dos posiciones, el get y el set respectivamente. Las setero con user y setUser del objeto vacio 
    const handleInput = (e) => {
        setUser({
            ...user,
            [e.target.name] : [e.target.value] // Dentro de los objetos [] para variables xD
        });
    }
    const handleReset = () => {
        setUser(initialState);
    }
    return (
        <>
            <Row>
                <Col md={12}>
                    <h3 className="text-center">Formulario Comunacho</h3>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={6}>
                    
                    <input
                    name="name"
                    placeholder="Ingrese su nombre..."
                    onChange={handleInput}
                    value={user.name}
                    />
                </Col>
                <Col md={6}>
                    <input
                    name="email"
                    placeholder="Ingrese su Mail..."
                    onChange={handleInput}
                    value={user.email}
                    />
                </Col>
            </Row>
            <Row className="my-3">
                <Col md={12}>
                    <h4>Nombre: {user.name}</h4>
                    <h4>Email: {user.email}</h4>
                </Col>
            </Row>
            <Row className="mt-3">
                <Button
                variant={"danger"}
                onClick={handleReset}
                >Reset</Button>
            </Row>
        </>
    );
}

export default Register;