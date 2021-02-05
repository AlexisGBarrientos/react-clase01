// Componente de logica ( peticion http + map )
import { useEffect, useState } from "react";
import Character from "./Character";
import { Row } from "react-bootstrap";

const BASE_URL = "https://www.breakingbadapi.com/api";

const Characters = () => {
    const [characters, setCharacters] = useState([]) // arranca vacio el array de objetos de characters que se va a rellenar con lo que provea la api. Esto guarda info del estado
    const [fetching, setFeching] = useState(true); // cuando el componente esta haciendo la peticion (cargando)
    const [error, setError] = useState(false); // cuando el componente dio error
    const getCharacters = async(endpoint) => {
        try {
            const result = await fetch(`${BASE_URL}/${endpoint}`);
            const data = await result.json();
            setCharacters(data);
            setFeching(false);
            setError(false);
        } catch (e) {
            // configuro estado si hubo error 
            setError(true);
            setFeching(false);
            setCharacters([]);
        }
    }
    useEffect(() => {
        getCharacters("characters")
    },[]);
    
    return(
        <Row>
            {fetching ? <h3>Cargando...</h3> : characters.map((character) => (
                <Character key={character.id} {...character} />
            ))}
        </Row>
    );
};

export default Characters;