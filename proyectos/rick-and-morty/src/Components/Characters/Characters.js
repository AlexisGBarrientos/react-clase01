import { useFetch, useState } from "./../../CustomHooks/useFetch";
import { Row } from "react-bootstrap";
import Character from "./Character";
import Loading from "./../Loading";

const Characters = () => {
    const [data, fetching] = useFetch("character");
    const {info, results: characters} = data;
    return ( 
        <>
            <Row className="justify-content-center">
                { fetching 
                ?
                (<Loading/>) 
                :
                (characters.map( (character) => ( 
                    <Character key={character.id} {...character} />
                )))
                }
            </Row>
        </>
    );
}
 
export default Characters;