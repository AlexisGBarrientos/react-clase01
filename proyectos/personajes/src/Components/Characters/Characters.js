// Componente de logica ( peticion http + map )
import { useFetch } from "./../../customHooks/useFetch";
import { Row } from "react-bootstrap";
import Character from "./Character";
import Loading from "../Loading";

const Characters = () => {
   const [characters, fetching, error] = useFetch('characters');
  
    return(
        <Row>
            {fetching 
            ?
            <Loading/> 
            : characters.map((character) => (
                <Character key={character.id} {...character} />
            ))}
        </Row>
    );
};

export default Characters;